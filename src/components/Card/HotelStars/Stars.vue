<template>
  <div class="stars">
    <span :class="`star star_${type}`" v-for="(type, id) in renderStars" :key="id"></span>
  </div>
</template>

<script>
export default {
  name: 'card-stars',
  props: {
    numOfStars: {
      type: Number,
      required: true,
    },
  },
  computed: {
    renderStars() {
      const renderContainer = [];
      for (let index = 0; index < 5; index += 1) {
        if (index < this.numOfStars) {
          renderContainer.push('active');
        } else {
          renderContainer.push('default');
        }
      }
      return renderContainer;
    }
  },
}
</script>

<style lang="scss" scoped>
.stars {
  display: flex;

  & *:not(:last-of-type) {
    margin-right: 4px;
  }
}

.star {
  width: 17px;
  height: 17px;
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;

  &_active {
    background-image: url('@/assets/images/star.svg');
  }

  &_default {
    background-image: url('@/assets/images/star_default.svg');
  }
}
</style>
