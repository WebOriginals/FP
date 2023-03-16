<template lang="pug">
.filtersForTab
  v-select.filtersForTab__select.selectTemplate(
    :modelValue="selectedCountry"
    :options="arrayOptionsSelectCountry"
    @update:modelValue="setSelectedCountry"
    label="label"
    :searchable="false"
    placeholder="Выберите страну"

  )
  v-select.filtersForTab__select.selectTemplate(
    :modelValue="selectedService"
    :options="arrayOptionsSelectService"
    @update:modelValue="setSelectedService"
    label="label"
    :searchable="false"
    placeholder="Выберите сервис"
  )
  .checkbox
    input#formAgreement.checkbox__input(
      v-model="setShowFP",
      type='checkbox',
      )
    label.checkbox__label(for='formAgreement') Показать только сервисы с Free Price

</template>

<script>
import vSelect from "vue-select";
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "FilterForTab",
  components: {
    vSelect,
  },
  computed: {
    ...mapState({
      arrayOptionsSelectCountry: state => state.account.arrayOptionsSelectCountry,
      arrayOptionsSelectService: state => state.account.arrayOptionsSelectService,
      selectedCountry: state => state.account.selectedCountry,
      selectedService: state => state.account.selectedService,
      showFP: state => state.account.showFP
    }),

    setShowFP:{
      get () {
        return this.showFP
      },
      set (value) {
        this.$store.commit('account/setShowFP', value)
      }
    }
  },
  methods: {

    ...mapMutations({
      setSelectedCountry: 'account/setSelectedCountry',
      setSelectedService: 'account/setSelectedService',
    })
  }

}
</script>

<style scoped lang="scss">
.filtersForTab {
  display: grid;
  align-items: center;
  grid-gap: 12px;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 80%;
  margin-bottom: 16px;
}
</style>
