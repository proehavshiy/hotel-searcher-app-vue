<template>
  <app-form submitCTA="Найти" :isSubmitDisabled="false" :onSubmit="handleSubmit">
    <app-form-fieldset 
      labelPlaceholder="Локация" 
      type="text" 
      name="location" 
      id="location" 
      :value="searchParams.city"
      @updateInput="setCity" 
    />
    <app-form-fieldset 
      labelPlaceholder="Дата заселения" 
      type="date" 
      name="date" 
      id="date" 
      :value="new Date(searchParams.date).toISOString().split('T')[0]" 
      @updateInput="setDate(new Date($event).getTime())" 
    />
    <app-form-fieldset 
      labelPlaceholder="Количество дней" 
      type="number" 
      name="days" 
      id="days" 
      min="1"
      :value="searchParams.days" 
      @updateInput="setDays" 
    />
  </app-form>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  name: 'hotel-form',
  computed: {
    ...mapState({
      searchParams: 'searchParams',
    })
  },
  methods: {
    ...mapMutations({
      setCity: 'searchParams/setCity',
      setDate: 'searchParams/setDate',
      setDays: 'searchParams/setDays'
    }),
    ...mapActions({
      initFetchHotels: 'hotels/initFetchHotels',
    }),
    handleSubmit() {
      // fetch hotels
      this.initFetchHotels(this.searchParams)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
