<template>
  <header class="header">
    <div class="logo-wrapper">
      Simple Hotel Check
    </div>
    <button class="logout" type='button' @click="handleLogout">
      Выйти
      <icon-logout />
    </button>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  components: {},
  props: {},
  computed: {},
  methods: {
    handleLogout() {
      this.$emit('logout');
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  padding: 32px;
  display: flex;
  align-items: center;
}

.logo-wrapper {
  @include h1;
  cursor: pointer;
  @include standartTransition(.3);
  white-space: nowrap;

  &:hover {
    opacity: .8;
  }
}

.logout {
  margin-left: auto;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: -0.408px;

  color: $colAccent;

  background-color: transparent;
  cursor: pointer;
  @include standartTransition(.3);

  &:hover {
    opacity: .8;
  }

  & svg {
    margin-left: 15px;
  }
}
</style>
