<template>
  <svg :class="{'active': isActive }" 
    width='9' height='6' viewBox='0 0 9 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.0147181 4.24264L4.25736 0L8.5 4.24264Z'
      fill='#99A0A3' />
  </svg>
</template>

<script>
export default {
  name: 'icon-max',
  props: {
    isActive: {
      type: Boolean,
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  path {
    fill: $colAccent;
  }
}
</style>
