<template>
  <button class="collapse-button" :class="{'collapse-button_collapsed': isActive}" 
    type='button' 
    aria-label='collapse'
    @click="handleClick"></button>
</template>

<script>
export default {
  name: 'collapse-button',
  props: {
    isActive: {
      type: [Boolean, null],
      required: true,
    },
    handleClick: {
      type: Function,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.collapse-button {
  display: none;
  position: absolute;
  top: 0;
  right: 50%;
  transform: translate(50%, -50%) rotate(180deg);
  width: 30px;
  height: 30px;
  background-image: url('@/assets/images/collapse-arrow.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: white;
  border-radius: 100%;

  @include standartTransition(.3);

  &_collapsed {
    transform: translate(50%, -50%);
  }

  &:hover {
    background-color: $colBorders;
  }

  @media (max-width: $br3) {
    display: block;
  }
}
</style>
