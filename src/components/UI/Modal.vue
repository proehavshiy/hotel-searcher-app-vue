<template>
  <div class="popup" :class="{ 'popup_opened': isOpen }">
    <div class="container">
      <slot></slot>
      <button class="button" type='button' @click="handleClick" v-if="type !== 'default'">Попробовать</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-window',
  props: {
    isOpen: {
      type: [Boolean, String, null],
      required: true,
    },
    type: {
      type: String,
      default: 'default',
    }
  },
  methods: {
    handleClick() {
      this.$emit('buttonClick');
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  transition: all .5s ease;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &_opened {
    visibility: visible;
    opacity: 1;
  }
}

.container {
  max-width: 70%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.close-btn {
  position: absolute;
  top: 1%;
  right: 1%;
  width: 40px;
  height: 40px;
  background: transparent;
  box-shadow: 0;
  border-radius: 0;



  &:hover {

    &::after,
    &::before {
      background-color: $colLiked;
    }

    &:after {
      transform: rotate(-225deg);
    }

    &:before {
      transform: rotate(225deg);
    }
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 40px;
    height: 2px;
    background: $colMainText;

    @include standartTransition(.2);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &::before {
    transform: rotate(45deg);
  }
}

.button {
  margin-top: 40px;
  @include button;
}
</style>
