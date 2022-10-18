<template>
  <!-- <nav>
    <router-link to="/">Login</router-link> |
    <router-link to="/hotels">Hotels</router-link> |
    <router-link to="/dfdfd">errorpage</router-link>
    <collapse-button :isActive="isActive" :handleClick="handleClick" />
  </nav> -->
  <router-view />
  <modal-window :isOpen="userLoginisLoading || hotelsIsLoading">
    <loading-spinner></loading-spinner>
  </modal-window>
  <modal-window :isOpen="userLoginError" type="error" @buttonClick="setUserLoginError(null)">
    <data-placeholder>Не&nbsp; удалось загрузить данные. Попробуйте снова</data-placeholder>
  </modal-window>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'App',
  components: {},
  props: {},
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
  beforeMount() {
    // достать из localStorage данные при их наличии
    // const [isExist, { isLogined }] = unpackLocalStorage('hotels-app');
    // if (isExist) {
    //   this.setIsLogined(isLogined);
    //   this.$router.push({ name: 'hotels' });
    // }
  },
  // mounted() {
  //   if (this.isLogined) {
  //     this.$route.push({ name: 'hotels' });
  //   }
  // },
  watch: {
    isLogined(newValue) {
      console.log('isLogined:', newValue);
    },
    userLoginError(newValue) {
      console.log('userLoginError:', newValue);
    },
    userLoginisLoading(newValue) {
      console.log('userLoginisLoading:', newValue);
    }
  },
  methods: {
    ...mapMutations({
      setIsLogined: 'setIsLogined',
      setUserLoginError: 'setError',
    }),
    handleClick() {
      console.log('1')
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
