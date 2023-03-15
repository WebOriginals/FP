<template lang="pug">
.cardGood(@click="$store.commit('account/getOfferAccount', account.id)" )
  .cardGood__favourites(@click="$store.commit('account/getChangeFavourite', account.id)")
    svg(v-if="account.isFavourite"  width='19', height='16', viewbox='0 0 19 16', fill='none', xmlns='http://www.w3.org/2000/svg')
      path(fill-rule='evenodd', clip-rule='evenodd', d='M5.41667 9.68117e-07C6.2859 -0.000518933 7.14247 0.208368 7.91388 0.608988C8.37401 0.847948 8.79576 1.15093 9.16722 1.5075C10.1398 0.574566 11.4613 9.68117e-07 12.9167 9.68117e-07C15.9082 9.68117e-07 18.3333 2.42518 18.3333 5.41667C18.3333 8.02843 16.8034 10.4162 15.0192 12.2179C13.227 14.0279 11.0351 15.3931 9.42944 15.9267C9.25884 15.9833 9.07449 15.9833 8.90389 15.9267C7.29824 15.3931 5.10635 14.0279 3.31411 12.2179C1.52997 10.4162 0 8.02843 0 5.41667C0 2.42538 2.42545 0.000319456 5.41667 9.68117e-07ZM7.14573 2.08809C6.61179 1.81079 6.0189 1.66624 5.41726 1.66667C3.34624 1.66667 1.66667 3.34566 1.66667 5.41667C1.66667 7.38824 2.84503 9.37552 4.49839 11.0452C6.03711 12.5991 7.86404 13.7517 9.16667 14.2508C10.4693 13.7517 12.2962 12.5991 13.8349 11.0452C15.4883 9.37552 16.6667 7.38824 16.6667 5.41667C16.6667 3.34566 14.9877 1.66667 12.9167 1.66667C11.6491 1.66667 10.5278 2.29493 9.8481 3.26051C9.69191 3.48239 9.43748 3.61434 9.16614 3.61417C8.8948 3.614 8.64054 3.48173 8.48463 3.25966C8.13893 2.76724 7.67967 2.36538 7.14573 2.08809Z', fill='#EA5400')
      path(d='M5.41726 1.66667C6.0189 1.66624 6.61179 1.81079 7.14573 2.08809C7.67967 2.36538 8.13893 2.76724 8.48463 3.25966C8.64054 3.48173 8.8948 3.614 9.16614 3.61417C9.43748 3.61434 9.69191 3.48239 9.8481 3.26051C10.5278 2.29493 11.6491 1.66667 12.9167 1.66667C14.9877 1.66667 16.6667 3.34566 16.6667 5.41667C16.6667 7.38824 15.4883 9.37552 13.8349 11.0452C12.2962 12.5991 10.4693 13.7517 9.16667 14.2508C7.86404 13.7517 6.03711 12.5991 4.49839 11.0452C2.84503 9.37552 1.66667 7.38824 1.66667 5.41667C1.66667 3.34566 3.34624 1.66667 5.41726 1.66667Z', fill='#EA5400')
    svg(v-else width='19', height='16', viewbox='0 0 19 16', fill='none', xmlns='http://www.w3.org/2000/svg')
      path(fill-rule='evenodd', clip-rule='evenodd', d='M5.41667 9.68117e-07C6.2859 -0.000518933 7.14247 0.208368 7.91388 0.608988C8.37401 0.847948 8.79576 1.15093 9.16722 1.5075C10.1398 0.574566 11.4613 9.68117e-07 12.9167 9.68117e-07C15.9082 9.68117e-07 18.3333 2.42518 18.3333 5.41667C18.3333 8.02843 16.8034 10.4162 15.0192 12.2179C13.227 14.0279 11.0351 15.3931 9.42944 15.9267C9.25884 15.9833 9.07449 15.9833 8.90389 15.9267C7.29824 15.3931 5.10635 14.0279 3.31411 12.2179C1.52997 10.4162 0 8.02843 0 5.41667C0 2.42538 2.42545 0.000319456 5.41667 9.68117e-07ZM7.14573 2.08809C6.61179 1.81079 6.0189 1.66624 5.41726 1.66667C3.34624 1.66667 1.66667 3.34566 1.66667 5.41667C1.66667 7.38824 2.84503 9.37552 4.49839 11.0452C6.03711 12.5991 7.86404 13.7517 9.16667 14.2508C10.4693 13.7517 12.2962 12.5991 13.8349 11.0452C15.4883 9.37552 16.6667 7.38824 16.6667 5.41667C16.6667 3.34566 14.9877 1.66667 12.9167 1.66667C11.6491 1.66667 10.5278 2.29493 9.8481 3.26051C9.69191 3.48239 9.43748 3.61434 9.16614 3.61417C8.8948 3.614 8.64054 3.48173 8.48463 3.25966C8.13893 2.76724 7.67967 2.36538 7.14573 2.08809Z', fill='#EA5400')

  .cardGood__img
    img(:src="account.image" alt="")
  .cardGood__name
    .cardGood__title {{account.category_name}}
    .cardGood__subTitle {{account.available}} шт.
  .cardGood__btnFP.button-g(:class="account.freePrice ? '' : 'hide'") Free Price
  .cardGood__counter
    svg(@click="counterDown()" width='28', height='29', viewbox='0 0 28 29', fill='none', xmlns='http://www.w3.org/2000/svg')
      rect(y='0.5', width='28', height='28', rx='8', fill='#F5F4F4')
      path(fill-rule='evenodd', clip-rule='evenodd', d='M9.5 13.7781H13.214H14.786H18.5V15.2232H14.786H13.214H9.5V13.7781Z', fill='#4C4C4C')
    span {{account.price}} ₽

    svg(@click="counterUp()" width='28', height='29', viewbox='0 0 28 29', fill='none', xmlns='http://www.w3.org/2000/svg')
      rect(y='0.5', width='28', height='28', rx='8', fill='#F5F4F4')
      path(d='M9.5 13.7783H13.214V10.01H14.786V13.7783H18.5V15.2234H14.786V19.01H13.214V15.2234H9.5V13.7783Z', fill='#444444')

  .cardGood__bay(:class="account.freePrice ? 'green' : 'orange'")
    svg(width='16', height='15', viewbox='0 0 16 15', fill='none', xmlns='http://www.w3.org/2000/svg')
      path(d='M11.6625 8.25C12.225 8.25 12.72 7.9425 12.975 7.4775L15.66 2.61C15.9375 2.115 15.5775 1.5 15.0075 1.5H3.9075L3.2025 0H0.75V1.5H2.25L4.95 7.1925L3.9375 9.0225C3.39 10.0275 4.11 11.25 5.25 11.25H14.25V9.75H5.25L6.075 8.25H11.6625ZM4.62 3H13.7325L11.6625 6.75H6.3975L4.62 3ZM5.25 12C4.425 12 3.7575 12.675 3.7575 13.5C3.7575 14.325 4.425 15 5.25 15C6.075 15 6.75 14.325 6.75 13.5C6.75 12.675 6.075 12 5.25 12ZM12.75 12C11.925 12 11.2575 12.675 11.2575 13.5C11.2575 14.325 11.925 15 12.75 15C13.575 15 14.25 14.325 14.25 13.5C14.25 12.675 13.575 12 12.75 12Z', fill='white')

</template>

<script>
import {mapState} from "vuex";

export default {
  name: "TemplateCardGood",
  props:{
    account:{
      type: Object,
      required: true,
    }
  },

  methods:{
    counterUp(max = 3000){
      if(this.account.price >= max){
        this.account.price = max;
        this.account.lastSettings = new Date()

      }else {
        this.account.price += 1
        this.account.lastSettings = new Date()
      }
    },
    counterDown(min = 0){
      if(this.account.price <= min){
        this.account.price = 0
        this.account.lastSettings = new Date()
      } else {
        this.account.price -= 1
        this.account.lastSettings = new Date()
      }
    },
  },
  computed:{
    ...mapState({

    })
  }
}
</script>

<style scoped lang="scss">
.cardGood {
  display: grid;
  grid-template-columns: 19px 50px 1fr 78px 132px 35px;
  padding: 16px 15px;
  align-items: center;
  grid-gap: 8px;

  &._active{
    background: rgba(225, 235, 245, 0.25);
  }

  &__img{
    img{
      max-width: 100%;
    }
  }
  &__name {
    display: grid;
    grid-gap: 5px;
  }

  &__title {
    font-weight: 600;
    font-size: 14px;
  }

  &__subTitle {
    font-weight: 400;
    font-size: 12px;
    color: #979797;
  }

  &__counter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    font-size: 12px;
    padding: 3px;
    gap: 8px;
    border: 1px solid #F5F4F4;
    border-radius: 8px;
    background: #fff;
  }

  &__bay {
    height: 26px;
    width: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;

    &.green{background: #7AD848;}
    &.orange{background: #EE5F02;}
  }

  &__btnFP{
    &.hide{
      opacity: 0;
      visibility: hidden;
    }
  }
}
</style>