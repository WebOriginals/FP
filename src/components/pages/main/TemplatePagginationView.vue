<template lang="pug">
.templatePaginationView
  ul.templatePaginationView__nav.templatePaginationViewnav
    li.templatePaginationViewnav__btn(
      @click="prevPage(currentPage)",
      v-if="this.currentPage > 1 && this.currentPage !== 1"
      )
      span.material-icons
        svg(width='10', height='16', viewbox='0 0 10 16', fill='none', xmlns='http://www.w3.org/2000/svg')
          path(fill-rule='evenodd', clip-rule='evenodd', d='M7.91659 0L10 2.10536L4.16681 8L10 13.8946L7.91659 16L0 8L7.91659 0Z', fill='#254D71')

    li.templatePaginationViewnav__numbers(v-if='_pagesToShow[0] !== 1')
      a(
        href='#',
        @click.prevent='goToPage(1)'
        ) 1

    li.templatePaginationViewnav__dots(v-if='_pagesToShow[0] !== 1 && _pagesToShow[1] !== null') ...

    li.templatePaginationViewnav__numbers(v-for='page in _pagesToShow', :key='page')
      a(
        href='#',
        @click.prevent='goToPage(page)',
        :class='{ active: page === currentPage, templatePaginationViewnav__dots: page === null }'
        )  {{ page }}
    li.templatePaginationViewnav__dots(v-if='_pagesToShow[_pagesToShow.length - 1] !== totalPages && _pagesToShow[_pagesToShow.length - 2] !== null') ...

    li.templatePaginationViewnav__numbers(v-if='_pagesToShow[_pagesToShow.length - 1] !== totalPages')
      a(
        href='#',
        @click.prevent='goToPage(totalPages)'
        ) {{ totalPages }}
    li.templatePaginationViewnav__btn(
      @click="nextPage(currentPage)",
      v-if="this.currentPage !== this.totalPages && this.currentPage < this.totalPages"
    )
      span.material-icons
        svg(width='10', height='16', viewbox='0 0 10 16', fill='none', xmlns='http://www.w3.org/2000/svg')
          path(fill-rule='evenodd', clip-rule='evenodd', d='M2.08341 0L0 2.10536L5.83319 8L0 13.8946L2.08341 16L10 8L2.08341 0Z', fill='#254D71')

</template>

<script>
export default {
  name: "TemplatePaginationView",
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    pagesToShow: {
      type: Number,
      required: true
    }
  },


  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit('pageChange', page);
      }
    },
    nextPage(page){
      if (page !== this.totalPages && page < this.totalPages) {
        page += 1
        this.$emit('nextPage', page);
      }
    },
    prevPage(page){
      if (page > 1 && page !== 1) {
        page -= 1
        this.$emit('prevPage', page);
      }
    },
  },

  computed: {
    pages() {
      const pages = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
      return pages;
    },
    pagesInRange() {
      const half = Math.floor(this.pagesToShow / 2);
      const start = Math.max(1, this.currentPage - half);
      const end = Math.min(this.totalPages, this.currentPage + half);
      return this.pages.filter(page => page >= start && page <= end);
    },
    _pagesToShow() {
      const pagesInRange = this.pagesInRange;
      const pages = pagesInRange.slice();
      if (pagesInRange[0] > 1) {
        pages.unshift(1);
        if (pagesInRange[0] > 2) {
          pages.splice(1, 0, null);
        }
      }
      if (pagesInRange[pagesInRange.length - 1] < this.totalPages) {
        pages.push(this.totalPages);
        if (pagesInRange[pagesInRange.length - 1] < this.totalPages - 1) {
          pages.splice(-1, 0, null);
        }
      }
      return pages;
    }
  },
}
</script>

<style scoped lang="scss">
.templatePaginationView {
  padding: 15px 0;
  display: flex;
  width: 100%;

  @media only screen and (max-width: 767px) {
    justify-content: center;
  }

  &nav {
    display: flex;
    gap: 8px;
    padding: 5px 0 !important;
    @media only screen and (max-width: 767px) {
      align-items: center;
    }


    &__btn {
      padding: 0 5px;
    }

    &__numbers {
      padding: 3px 5px;
      color: #333333;
      font-weight: 400;
      font-size: 14px;
      cursor: pointer;

      & a:hover {
        color: #EA5400
      }

      & .active {
        color: #EA5400;
        font-weight: 700;
      }
    }

    &__dots {
      position: relative;
      cursor: default;

      &:before{
        content: '...';
      }
    }
  }
}
</style>
