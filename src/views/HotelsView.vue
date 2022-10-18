<template>
  <Header @logout="handleLogout" />
</template>

<script>
import Header from '@/components/Header.vue';
import { mapMutations } from 'vuex';
export default {
  name: 'hotels-view',
  components: { Header },
  methods: {
    ...mapMutations({
      setIsLogined: 'setIsLogined',
    }),
    handleLogout() {
      this.setIsLogined(false);
      this.$router.push({ name: 'login' });
    }
  }

}
</script>

<style lang="scss" scoped>

</style>