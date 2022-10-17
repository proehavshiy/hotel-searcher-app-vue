<template>
  <nav>
    <router-link to="/">Login</router-link> |
    <router-link to="/hotels">Hotels</router-link> |
    <router-link to="/dfdfd">errorpage</router-link>
    <collapse-button :isActive="isActive" :handleClick="handleClick" />
  </nav>
  <router-view />
</template>

<script>
import unpackLocalStorage from '@/utils/unpackLocalStorage';
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
    })
  },
  beforeMount() {
    // достать из localStorage данные при их наличии
    const [isExist, { isLogined }] = unpackLocalStorage('hotels-app');
    if (isExist) {
      this.setIsLogined(isLogined);
      this.$router.push({ name: 'hotels' });
    }
  },
  methods: {
    ...mapMutations({
      setIsLogined: 'setIsLogined',
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
