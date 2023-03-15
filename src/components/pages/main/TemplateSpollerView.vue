<template lang="pug">
section.buyReadyMadeAccounts
  .buyReadyMadeAccounts__spollers(data-spollers data-one-spoller)
    slot(name="body")

</template>

<script>
import TemplatePagginationView from "@/components/pages/main/TemplatePagginationView.vue";
import TemplateAccountView from "@/components/pages/main/TemplateAccountView.vue";
import {spollers} from "@/assets/js/files/functions";
import vSelect from "vue-select";
import axios from "axios";

const Select = [
  {text: 'Vk', img: `./assets/img/png/RU.png`, value: 'RU'},
  {text: 'Telegtam', img: "./assets/img/png/RO.png", value: 'RO'},
  {text: 'Istagram', img: "./assets/img/png/UA.png", value: 'UA'},
  {text: 'YouTube', img: "./assets/img/png/GE.png", value: 'GE'},
];
export default {
  name: "TemplateSpollerView",
  components: {
    vSelect,
    TemplateAccountView,
    TemplatePagginationView
  },
  data() {
    return {
      //Пропс языков для селекта
      arrayForSelect: Select,
      //Selected для селекта
      //selected: Select[0],
      croppedArrayWithAccounts:{},
      accounts: {
        "status": "success",
        "data": [
        {
          "id": 4625,
          "name": "Аккаунты Gmail.com с резервной почтой  высокое качество  Рег IP - Mix   Способ регистрации - Ручная   Пол - Mix.",
          "slug": "akkaunty-google-reg-ip-ru-sposob-registratsii-avtoreg-pol-muzh-4b600667",
          "image": "https:\/\/hstock.s3.eu-central-1.amazonaws.com\/images\/products\/4625\/wbhC0eIXf48zdoNVNPTiZ7wF2jqeA8zEzqLm47JK.webp",
          "description": "Аккаунты Google Рег IP - Ru Способ регистрации - Ручная Купить по лучшей цене. Описание, рейтинги, сравнение, отзывы, обсуждение пользователей.",
          "price": 21.28,
          "available": 128,
          "category_name": "Google",
          "category_id": 16,
          "discount": null,
          "properties": [{"name": "Рег IP", "value": "Eu", "unit": null}, {
            "name": "Способ регистрации",
            "value": "Ручная",
            "unit": null
          }, {"name": "Пол", "value": "Mix.", "unit": null}]
        },
        {
          "id": 4625,
          "name": "Аккаунты Gmail.com с резервной почтой  высокое качество  Рег IP - Mix   Способ регистрации - Ручная   Пол - Mix.",
          "slug": "akkaunty-google-reg-ip-ru-sposob-registratsii-avtoreg-pol-muzh-4b600667",
          "image": "https:\/\/hstock.s3.eu-central-1.amazonaws.com\/images\/products\/4625\/wbhC0eIXf48zdoNVNPTiZ7wF2jqeA8zEzqLm47JK.webp",
          "description": "Аккаунты Google Рег IP - Ru Способ регистрации - Ручная Купить по лучшей цене. Описание, рейтинги, сравнение, отзывы, обсуждение пользователей.",
          "price": 21.28,
          "available": 128,
          "category_name": "Google",
          "category_id": 16,
          "discount": null,
          "properties": [{"name": "Рег IP", "value": "Eu", "unit": null}, {
            "name": "Способ регистрации",
            "value": "Ручная",
            "unit": null
          }, {"name": "Пол", "value": "Mix.", "unit": null}]
        },
        {
          "id": 4625,
          "name": "Аккаунты Gmail.com с резервной почтой  высокое качество  Рег IP - Mix   Способ регистрации - Ручная   Пол - Mix.",
          "slug": "akkaunty-google-reg-ip-ru-sposob-registratsii-avtoreg-pol-muzh-4b600667",
          "image": "https:\/\/hstock.s3.eu-central-1.amazonaws.com\/images\/products\/4625\/wbhC0eIXf48zdoNVNPTiZ7wF2jqeA8zEzqLm47JK.webp",
          "description": "Аккаунты Google Рег IP - Ru Способ регистрации - Ручная Купить по лучшей цене. Описание, рейтинги, сравнение, отзывы, обсуждение пользователей.",
          "price": 21.28,
          "available": 128,
          "category_name": "Google",
          "category_id": 16,
          "discount": null,
          "properties": [{"name": "Рег IP", "value": "Eu", "unit": null}, {
            "name": "Способ регистрации",
            "value": "Ручная",
            "unit": null
          }, {"name": "Пол", "value": "Mix.", "unit": null}]
        },
        {
          "id": 4625,
          "name": "Аккаунты Gmail.com с резервной почтой  высокое качество  Рег IP - Mix   Способ регистрации - Ручная   Пол - Mix.",
          "slug": "akkaunty-google-reg-ip-ru-sposob-registratsii-avtoreg-pol-muzh-4b600667",
          "image": "https:\/\/hstock.s3.eu-central-1.amazonaws.com\/images\/products\/4625\/wbhC0eIXf48zdoNVNPTiZ7wF2jqeA8zEzqLm47JK.webp",
          "description": "Аккаунты Google Рег IP - Ru Способ регистрации - Ручная Купить по лучшей цене. Описание, рейтинги, сравнение, отзывы, обсуждение пользователей.",
          "price": 21.28,
          "available": 128,
          "category_name": "Google",
          "category_id": 16,
          "discount": null,
          "properties": [{"name": "Рег IP", "value": "Eu", "unit": null}, {
            "name": "Способ регистрации",
            "value": "Ручная",
            "unit": null
          }, {"name": "Пол", "value": "Mix.", "unit": null}]
        },
        {
          "id": 4625,
          "name": "Аккаунты Gmail.com с резервной почтой  высокое качество  Рег IP - Mix   Способ регистрации - Ручная   Пол - Mix.",
          "slug": "akkaunty-google-reg-ip-ru-sposob-registratsii-avtoreg-pol-muzh-4b600667",
          "image": "https:\/\/hstock.s3.eu-central-1.amazonaws.com\/images\/products\/4625\/wbhC0eIXf48zdoNVNPTiZ7wF2jqeA8zEzqLm47JK.webp",
          "description": "Аккаунты Google Рег IP - Ru Способ регистрации - Ручная Купить по лучшей цене. Описание, рейтинги, сравнение, отзывы, обсуждение пользователей.",
          "price": 21.28,
          "available": 128,
          "category_name": "Google",
          "category_id": 16,
          "discount": null,
          "properties": [{"name": "Рег IP", "value": "Eu", "unit": null}, {
            "name": "Способ регистрации",
            "value": "Ручная",
            "unit": null
          }, {"name": "Пол", "value": "Mix.", "unit": null}]
        },
        {
          "id": 4625,
          "name": "Аккаунты Gmail.com с резервной почтой  высокое качество  Рег IP - Mix   Способ регистрации - Ручная   Пол - Mix.",
          "slug": "akkaunty-google-reg-ip-ru-sposob-registratsii-avtoreg-pol-muzh-4b600667",
          "image": "https:\/\/hstock.s3.eu-central-1.amazonaws.com\/images\/products\/4625\/wbhC0eIXf48zdoNVNPTiZ7wF2jqeA8zEzqLm47JK.webp",
          "description": "Аккаунты Google Рег IP - Ru Способ регистрации - Ручная Купить по лучшей цене. Описание, рейтинги, сравнение, отзывы, обсуждение пользователей.",
          "price": 21.28,
          "available": 128,
          "category_name": "Google",
          "category_id": 16,
          "discount": null,
          "properties": [{"name": "Рег IP", "value": "Eu", "unit": null}, {
            "name": "Способ регистрации",
            "value": "Ручная",
            "unit": null
          }, {"name": "Пол", "value": "Mix.", "unit": null}]
        },
        {
          "id": 4625,
          "name": "Аккаунты Gmail.com с резервной почтой  высокое качество  Рег IP - Mix   Способ регистрации - Ручная   Пол - Mix.",
          "slug": "akkaunty-google-reg-ip-ru-sposob-registratsii-avtoreg-pol-muzh-4b600667",
          "image": "https:\/\/hstock.s3.eu-central-1.amazonaws.com\/images\/products\/4625\/wbhC0eIXf48zdoNVNPTiZ7wF2jqeA8zEzqLm47JK.webp",
          "description": "Аккаунты Google Рег IP - Ru Способ регистрации - Ручная Купить по лучшей цене. Описание, рейтинги, сравнение, отзывы, обсуждение пользователей.",
          "price": 21.28,
          "available": 128,
          "category_name": "Google",
          "category_id": 16,
          "discount": null,
          "properties": [{"name": "Рег IP", "value": "Eu", "unit": null}, {
            "name": "Способ регистрации",
            "value": "Ручная",
            "unit": null
          }, {"name": "Пол", "value": "Mix.", "unit": null}]
        },
        {
          "id": 4625,
          "name": "Аккаунты Gmail.com с резервной почтой  высокое качество  Рег IP - Mix   Способ регистрации - Ручная   Пол - Mix.",
          "slug": "akkaunty-google-reg-ip-ru-sposob-registratsii-avtoreg-pol-muzh-4b600667",
          "image": "https:\/\/hstock.s3.eu-central-1.amazonaws.com\/images\/products\/4625\/wbhC0eIXf48zdoNVNPTiZ7wF2jqeA8zEzqLm47JK.webp",
          "description": "Аккаунты Google Рег IP - Ru Способ регистрации - Ручная Купить по лучшей цене. Описание, рейтинги, сравнение, отзывы, обсуждение пользователей.",
          "price": 21.28,
          "available": 128,
          "category_name": "Google",
          "category_id": 16,
          "discount": null,
          "properties": [{"name": "Рег IP", "value": "Eu", "unit": null}, {
            "name": "Способ регистрации",
            "value": "Ручная",
            "unit": null
          }, {"name": "Пол", "value": "Mix.", "unit": null}]
        },
        ],
        "pagination": {"current_page": 1, "last_page": 1, "per_page": 5, "total": 1}
      },
    }
  },
  methods: {

    pageOutput(second) {
      this.croppedArrayWithAccounts = second
    },

    //   async fetchArrayAccount() {
    //     try {
    //       const response = await axios.get('http://jsonplaceholder.typicode.com/posts')
    //       this.accounts = response.data
    //
    //     } catch (e) {
    //       alert('error')
    //     }
    //   }
  }
  ,
  watch: {}
  ,
  mounted() {

    spollers()
  }
}
</script>

<style  lang="scss">

@import "@/assets/scss/style.scss";

.buyReadyMadeAccounts {

  &__grid {
    display: grid;
    grid-gap: 10px;
  }

  &__spollers {
    display: grid;
    grid-gap: 12px;
  }



  &__select {
    margin: rem(24) 0;
    max-width: 205px;

    //.vs__clear{
    //  display: none;
    //}
    //
    //.vs__selected{
    //  margin: 0;
    //  padding: 0;
    //}
    //
    //.vs__dropdown-toggle {
    //  padding: 17px 20px;
    //  border-radius: 8px !important;
    //  background: $color_1;
    //  color: $mainColor;
    //  font-weight: 400;
    //  font-size: rem(14);
    //}
    //
    //.vs__dropdown-menu {
    //  color: $mainColor;
    //  border-radius: 0 0 8px 8px;
    //  top: calc(93% - var(--vs-border-width));
    //}
    //
    //.select-arrow{
    //  width: rem(18);
    //  height: rem(10);
    //  position: relative;
    //  &:before, &:after {
    //    content: '';
    //    position: absolute;
    //    width: 10px;
    //    height: 2px;
    //    background: #909DAD;
    //  }
    //
    //  &:before{
    //    transform: rotate(45deg) translateX(4px) translateY(3px);
    //  }
    //  &:after{
    //    transform: rotate(-45deg) translateX(1px) translateY(8px);
    //  }
    //}
    //
    //.vs__search{
    //  margin: 0 !important;
    //  padding: 0 !important;
    //  font-size: 14px !important;
    //}
    //
    //.vs__actions{
    //  padding: 0;
    //}
  }

  .vs--open .select-arrow {
    transform: scaleY(-1) !important;
  }

}
</style>