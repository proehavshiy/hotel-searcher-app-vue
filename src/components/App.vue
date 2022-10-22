<template>
  <router-view />
  <modal-window 
    :isOpen="userLoginisLoading || hotelsIsLoading">
    <loading-spinner />
  </modal-window>
  <modal-window 
    :isOpen="userLoginError" 
    type="error" 
    @buttonClick="setUserLoginError(null)">
    <data-placeholder>Не&nbsp; удалось загрузить данные. Попробуйте снова</data-placeholder>
  </modal-window>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      isActive: false,
    }
  },
  computed: {
    ...mapState({
      isLogined: (state) => state.user.isLogined,
      userLoginError: (state) => state.user.fetchStatus.error,
      userLoginisLoading: (state) => state.user.fetchStatus.isLoading,
      hotelsIsLoading: (state) => state.hotels.fetchStatus.hotels.isLoading,
    }),
  },
  methods: {
    ...mapMutations({
      setIsLogined: 'setIsLogined',
      setUserLoginError: 'setError',
    }),
    handleClick() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss">
</style>
