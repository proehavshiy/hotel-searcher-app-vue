<template>
  <p class="data-placeholder">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'data-placeholder'
}
</script>

<style lang="scss" scoped>
.data-placeholder {
  margin: auto;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.17;
  color: $colSecondaryText;
  text-align: center;
}
</style>
