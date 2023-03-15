<template lang="pug">
.templatePaginationView
  ul.templatePaginationView__nav.templatePaginationView-nav
    li.templatePaginationView-nav__btn
      span.material-icons
        svg(width='10', height='16', viewbox='0 0 10 16', fill='none', xmlns='http://www.w3.org/2000/svg')
          path(fill-rule='evenodd', clip-rule='evenodd', d='M7.91659 0L10 2.10536L4.16681 8L10 13.8946L7.91659 16L0 8L7.91659 0Z', fill='#254D71')

    li.templatePaginationView-nav__numbers(
      v-for="pageNumber in totalPage"
      :key="pageNumber"
      :class="{ 'active': page === pageNumber }"
      @click="changePage(pageNumber)"
      )  {{pageNumber}}

    li.templatePaginationView-nav__dots ...
    li.templatePaginationView-nav__btn(@click="getNumberPages")
      span.material-icons
        svg(width='10', height='16', viewbox='0 0 10 16', fill='none', xmlns='http://www.w3.org/2000/svg')
          path(fill-rule='evenodd', clip-rule='evenodd', d='M2.08341 0L0 2.10536L5.83319 8L0 13.8946L2.08341 16L10 8L2.08341 0Z', fill='#254D71')
</template>

<script>
export default {
  name: "TemplatePaginationView",
  props:{
    incomingArray:{
      type: Object,
      required: true,
    },

    limitPages:{
      type: Object,
      required: true,
    }
  },
  data(){
    return{
      page: 1,
      totalPage: 0,
      workArray: [],
      start: 0,
      end: 0,
      numberForStart: 0
    }
  },

  methods:{
    changePage(pageNumber = 1){
      this.page = pageNumber
      this.$emit('clickNumberPage',  this.getTrimArray)
    },
  },

  computed:{
    getNumberPages(){
      return this.totalPage = Math.ceil( this.incomingArray.length / this.limitPages)
    },
    getTrimArray(){
      this.numberForStart = this.page
      this.numberForStart--
      this.workArray = [...this.incomingArray]
      this.start = this.limitPages * this.numberForStart
      this.end = this.start + this.limitPages
      return this.workArray.slice(this.start, this.end)
    }
  },

  mounted() {
    setTimeout(() => {
      this.getNumberPages
      this.getTrimArray
      this.changePage()
    }, 1000)

  }
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

  &-nav {
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

      &:hover {
        color: #EA5400
      }

      &.active {
        color: #EA5400;
        font-weight: 700;
      }
    }

    &__dots {
      padding: 3px 5px;
    }
  }
}
</style>