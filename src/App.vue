<script setup>
import DarckBlueSectionWithText from "@/components/pages/main/DarckBlueSectionWithText.vue";
import TemplateAccountView from "@/components/pages/main/TemplateAccountView.vue";
import TemplatePagginationView from "@/components/pages/main/TemplatePagginationView.vue";
import TemplateTabsView from "@/components/pages/main/TemplateTabsView.vue";
import TemplateSpollerView from "@/components/pages/main/TemplateSpollerView.vue";
import SpollerSettings from "@/components/pages/main/Spollers/SpollerSettings.vue";
import SpollerBuyReadyMadeAccount from "@/components/pages/main/Spollers/SpollerBuyReadyMadeAccount.vue";
</script>

<template lang="pug">
.wrapper
  main.page
    section.MyActivates
      h1 Мои активации
      p Мы предусмотрели способы пополнения, которые подойдут каждому. Банковские карты, электронные кошельки, криптовалюта — используйте то, что удобно и выгодно вам! Обязательно следите за новостями в наших соцсетях, там мы рассказываем про акции для пополнения и сообщаем о задержках на стороне платежных систем.
      darck-blue-section-with-text
      template-spoller-view
        template(v-slot:body)
          spoller-buy-ready-made-account
          spoller-settings
      //template-spoller-view
    //template-account-view
    template-paggination-view(:currentPage="5" :totalPages="30" :pagesToShow="4")
    //template-tabs-view


</template>

<style  lang="scss">
.page{
  max-width: 1326px;
  padding: 22px 32px;
  margin: auto;
}
.MyActivates{
  display: grid;
  grid-gap: 24px;
}
</style>
