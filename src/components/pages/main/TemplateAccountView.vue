<template lang="pug">
.templateAccountView
  .templateAccountView__name
    .templateAccountView__img
      img(:src='account.image' :alt="account.category_name")
    .templateAccountView__title {{account.category_name}}
  .templateAccountView__quantity доступно: ${{account.available}} шт
  .templateAccountView__price цена: ${{account.price}} ₽/шт
  button.button-orange Купить
</template>

<script>
export default {
  name: "TemplateAccountView",
  props:{
    account:{
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
.templateAccountView{
    border: 1px solid #C4C4C4;
    border-radius: 10px;
    padding: 12px 20px;

    display: grid;
    grid-gap: 8px;

    @media only screen and (min-width:767px){
      grid-template-columns: 1fr 156px 130px 113px;
      grid-gap: 20px;
      align-items: center;
    }

  &__name{
    display: flex;
    width: 100%;
    gap: 8px;
    align-items: center;
  }

  &__img{
    flex: 0 0 34px;
    img{
      max-width: 100%;
    }
  }

  &__title{
    font-weight: 700;
    font-size: 14px;
    color: #333333;
  }

  &__quantity{
    color: #4C4C4C;
    font-weight: 400;
    font-size: 14px;
  }

  &__price{
    color: #4C4C4C;
    font-weight: 400;
    font-size: 14px;
  }

  .button-orange{
    @media only screen and (max-width:767px){
      margin-top: 10px;
    }
    @media only screen and (min-width:767px){
      margin-left: 20px;
    }
  }
}
.button-orange{
  background: linear-gradient(83.15deg, #F67A01 3.74%, #EB5701 103.11%);
  border-radius: 5px;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  padding: 8px 24px;
}
</style>