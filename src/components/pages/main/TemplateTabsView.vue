<template lang="pug">
.tabs(data-tabs data-tabs-animate)
  .tabs-navigation__body
    .tabs__navigation(data-tabs-titles)
      button(data-tabs-title='1').tabs__title._tab-active  Последние активации ({{this.accounts.data.length}})
      button(data-tabs-title='2').tabs__title  Избранное ({{this.getArrayFavoriteAccounts.length}})
      button(data-tabs-title='3').tabs__title  Последние настроенные ({{this.getFilteredArrayAccountsLastSettings.length}})

  .tabs__content(data-tabs-body)
    template-tab-view(:NumberTab="1" :accounts="this.getFilteredArrayAccountsLastActivate")
    template-tab-view(:NumberTab="2" :accounts="this.getFilteredArrayAccountsFavourites")
    template-tab-view(:NumberTab="3" :accounts="this.getFilteredArrayAccountsLastSettings")


</template>

<script>
import TemplateTabView from "@/components/pages/main/TemplateTabView.vue";
import {tabs} from "@/assets/js/files/functions.js";
import {mapState, mapGetters, mapMutations, mapActions} from "vuex";

export default {
  name: "TemplateTabsView",
  components: {
    TemplateTabView
  },

  computed:{
    ...mapState({
      accounts: state =>  state.account.accounts,
      showFP: state =>  state.account.showFP
    }),
    ...mapGetters({
      getArrayFavoriteAccounts: 'account/getArrayFavoriteAccounts',
      getFilteredArrayAccountsLastActivate: 'account/getFilteredArrayAccountsLastActivate',
      getFilteredArrayAccountsFavourites: 'account/getFilteredArrayAccountsFavourites',
      getFilteredArrayAccountsLastSettings: 'account/getFilteredArrayAccountsLastSettings'
    })
  },
  mounted() {
    tabs()
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
.tabs {
  &-navigation__body{
    @include maq('tablet') {
      width: 100%;
      overflow-x: auto;
      height: 52px;
      overflow-y: hidden;
    }
  }

  &__navigation {
    display: flex;
    @include adaptiveValue(margin-bottom, 32,32);
    gap: rem(24);
  }

  &__title {
    padding: rem(3) 0;
    color: #BEBEBE;
    @include adaptiveValue(font-size,16,14);
    font-weight: 600;

    &._tab-active {
      color: #254D71;
      position: relative;
      border-top: 2px solid #254D71;
    }
  }

  &__content {
    padding: rem(10) rem(15);
  }


}
</style>