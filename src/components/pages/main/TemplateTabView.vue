<template lang="pug">
.tab__body(:data-tabs-item="NumberTab")
  filter-for-tab
  .blockOffers
    .blockScroll
      template-card-good(v-if="accounts.length > 0"
        v-for="account in accounts"
        :account="account"
        :key="account.id"
        :class=" {_active: account.id === activeElement }"
      )
      span(v-else) аккаунтов нет



    .offers(v-if="$store.state.account.offers.length > 0")
      h4 Предложения
      p Средняя цена продажи за последний час: <b>6 ₽</b>
      span.linkBay Купить за 50₽
      ul.offers__list.offers-list
        li(v-for="offer in offers")
          .offers-list__price {{offer.price}} p
          .offers-list__quantity {{offer.available}}  шт
          .offers-list__bay
            svg(width='16', height='15', viewbox='0 0 16 15', fill='none', xmlns='http://www.w3.org/2000/svg')
              path(d='M11.6625 8.25C12.225 8.25 12.72 7.9425 12.975 7.4775L15.66 2.61C15.9375 2.115 15.5775 1.5 15.0075 1.5H3.9075L3.2025 0H0.75V1.5H2.25L4.95 7.1925L3.9375 9.0225C3.39 10.0275 4.11 11.25 5.25 11.25H14.25V9.75H5.25L6.075 8.25H11.6625ZM4.62 3H13.7325L11.6625 6.75H6.3975L4.62 3ZM5.25 12C4.425 12 3.7575 12.675 3.7575 13.5C3.7575 14.325 4.425 15 5.25 15C6.075 15 6.75 14.325 6.75 13.5C6.75 12.675 6.075 12 5.25 12ZM12.75 12C11.925 12 11.2575 12.675 11.2575 13.5C11.2575 14.325 11.925 15 12.75 15C13.575 15 14.25 14.325 14.25 13.5C14.25 12.675 13.575 12 12.75 12Z', fill='white')

    .offers(v-else)
      h4 Предложений нет

  template-paggination-view(
    v-if="accounts.length > 11"
    :currentPage="22"
    :totalPages="30"
    :pagesToShow="5"
    @pageChange="getPageChange"
    @nextPage="getNextPage"
    @prevPage="getPrevPage"
    )
</template>

<script>
import FilterForTab from "@/components/pages/main/FilterForTab.vue";
import TemplateCardGood from "@/components/pages/main/TemplateCardGood.vue";
import {mapMutations, mapState} from "vuex";
import templatePagginationView from "@/components/pages/main/TemplatePagginationView.vue";
export default {
  name: "TemplateTabView",

  components: {
    TemplateCardGood,
    FilterForTab,
    templatePagginationView
  },
  props: {
    NumberTab: {
      type: Number,
      required: true,
    },
    accounts: {
      type: Array,
      required: true,
    }
  },
  computed: {
    ...mapState({
      accounts: state => state.account.accounts,
      activeElement: state => state.account.activeElement,
      offers: state => state.account.offers
    }),
    ...mapMutations({
      getOfferAccount: 'account/getOfferAccount'
    })
  },
methods:{
  getPageChange(event){
    console.log(event)
  },
  getNextPage(event){
    console.log(event)
  },
  getPrevPage(event){
    console.log(event)
  }
},
 mounted() {

 }

}
</script>

<style scoped lang="scss">
.tab__body {
  display: grid;
  grid-gap: rem(16) rem(24);



  &[hidden] {
    display: none;
  }
}

.blockScroll {
  max-height: 450px;
  overflow-y: auto;
}


.blockOffers {
  display: grid;
  grid-template-columns: 1fr 280px;

}

.offers {
  background: rgba(225, 235, 245, 0.25);
  padding: 20px;

  h4 {
    font-weight: 600;
    font-size: 16px;
    color: #333333;
    margin-bottom: 20px;
    display: block;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: #333333;
  }

  .linkBay {
    font-weight: 400;
    font-size: 12px;
    color: #254D71;
    margin-bottom: 20px;
    display: block;
  }

}

.offers-list {
  display: grid;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 0;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(196, 196, 196, 0.3);
    }
  }

  &__price {
    font-weight: 600;
    font-size: 14px;
    margin-right: auto;
  }

  &__quantity {
    font-weight: 400;
    font-size: 12px;
    color: #9C9C9C;
  }

  &__bay {
    height: 26px;
    width: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: #7AD848;
  }
}
</style>
