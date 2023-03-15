<template lang="pug">
section.darkBlue
  button.darkBlue__close
    svg(width='14', height='14', viewbox='0 0 14 14', fill='none', xmlns='http://www.w3.org/2000/svg')
      path(d='M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z', fill='white')

  h3.darkBlue__title Пополняйте баланс так, как это удобно вам
  p.darkBlue__text Мы предусмотрели способы пополнения, которые подойдут каждому. Банковские карты, электронные кошельки, криптовалюта — используйте то, что удобно и выгодно вам! Обязательно следите за новостями в наших соцсетях, там мы рассказываем про акции для пополнения и сообщаем о задержках на стороне платежных систем.
  button.darkBlue__btn Попробовать
</template>

<script>
export default {
  name: "DarckBlueSectionWithText"
}
</script>

<style scoped lang="scss">
.darkBlue{
  background: #254D71;
  border-radius: 16px;
  color: #FFFFFF;
  padding: 22px 20px;
  position: relative;

  &__close{
    position: absolute;
    top: 22px;
    right: 20px;
  }
  &__title{
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
    padding-right: 30px;
  }
  &__text{
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 16px;
  }
  &__btn{
    background: #fff;
    border-radius: 8px;
    color: #EC5901;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 700;

    &:hover{
      background: #e8e8e8;
    }
  }

}
</style>