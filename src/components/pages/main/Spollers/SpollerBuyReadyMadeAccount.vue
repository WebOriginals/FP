<template lang="pug">
.buyReadyMadeAccounts__spollersWrapper(data-spollerWrapper)
  .buyReadyMadeAccounts__spollersTitle(data-spoller) Купить готовые аккаунты
  .buyReadyMadeAccounts__spollersBody
    .grid
      p 55Мы предусмотрели способы пополнения, которые подойдут каждому. Банковские карты, электронные кошельки, криптовалюта — используйте то, что удобно и выгодно вам! Обязательно следите за новостями в наших соцсетях, там мы рассказываем про акции для пополнения и сообщаем о задержках на стороне платежных систем.
      v-select.buyReadyMadeAccounts__select.selectTemplate(
        :modelValue="selectedService"
        :options="arrayOptionsSelectService"
        @update:modelValue="setSelectedService"
        label="label"
        :searchable="false"
        placeholder="Выберите сервис"
      )
      .buyReadyMadeAccounts__grid
        template-account-view(
          v-for="account in getFilteredArrayAccountsBay"
          :account="account"
          :key="account.id"
        )

      template-paggination-view(
        v-if="accounts.data.length > 11"
        :currentPage="22"
        :totalPages="30"
        :pagesToShow="5"
        @pageChange="getPageChange"
        @nextPage="getNextPage"
        @prevPage="getPrevPage"
        )

</template>

<script>
import TemplatePagginationView from "@/components/pages/main/TemplatePagginationView.vue";
import TemplateAccountView from "@/components/pages/main/TemplateAccountView.vue";
import {spollers} from "@/assets/js/files/functions";
import vSelect from "vue-select";
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "TemplateSpollerView",
  components: {
    vSelect,
    TemplateAccountView,
    TemplatePagginationView
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations({
      setSelectedService: 'account/setSelectedService',
    }),
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

  computed:{
    ...mapState({
      arrayOptionsSelectService: state => state.account.arrayOptionsSelectService,
      selectedService: state => state.account.selectedService,
      accounts: state => state.account.accounts
    }),
    ...mapGetters({
      getFilteredArrayAccountsBay: 'account/getFilteredArrayAccountsBay',
    }),

  },

  mounted() {
    spollers()
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
.buyReadyMadeAccounts{

  &__spollersWrapper{
    border: 1px solid #C4C4C4;
    border-radius: 16px;
    display: grid;
    align-content: flex-start;
    position: relative;

    &:before {
      content: '';
      width: rem(15);
      height: rem(9);
      background-image: url("public/assets/img/svg/arrow_drop_down.svg");
      background-repeat: no-repeat;
      transition: transform 0.5s ease 0s;
      position: absolute;
      top: 30px;
      right: 15px;
    }

    &._spoller-activeWrapper {
      border: 1px solid #EA5400;

      &:before {
        transform: scaleY(-1);
        background-image: url("public/assets/img/svg/arrow_drop_down_r.svg");
      }
    }
  }

  &__spollersTitle {
    width: 100%;
    cursor: default;
    text-align: left;
    padding: rem(20) rem(45) rem(20) rem(25);
    border-radius: rem(11);
    font-size: rem(18);
    position: relative;
    color: $mainColor;
    font-weight: 700;
    @include adaptiveValue(font-size, 20, 16);

    ._spoller-init & {
      cursor: pointer;


      &._spoller-active {
        color: #EA5400;

      }
    }
  }

  &__spollersBody {
    @include adaptiveValue(padding-left, 25, 16);
    @include adaptiveValue(padding-right, 32, 16);
    @include adaptiveValue(padding-bottom, 24, 24);
    @include adaptiveValue(padding-top, 10, 5);
    border-radius: rem(11);

    p {
      font-weight: 400;
      @include adaptiveValue(font-size, 14, 14);
      color: #6E7072;
    }
  }

  .grid{
    display: grid;
    grid-gap: 24px;
  }
}
</style>
