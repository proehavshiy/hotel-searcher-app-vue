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
export default {
  name: 'App',
  components: {},
  props: {},
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
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
