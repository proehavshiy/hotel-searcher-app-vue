<template>
  <button class="like" :class="{ 'like_active': isLiked }" type='button' @click="handleClick">
    <icon-like />
  </button>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'card-like',
  data() {
    return {
      isLiked: null,
    }
  },
  props: {
    currentId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState({
      favourites: (state) => state.hotels.favourites,
    })
  },
  mounted() {
    this.isLiked = this.favourites.includes(this.currentId);
  },
  watch: {
    favourites(newVal) {
      this.isLiked = newVal.includes(this.currentId);
    }
  },
  methods: {
    ...mapMutations({
      setFavourites: 'hotels/setFavourites'
    }),
    handleClick() {
      if (this.isLiked) {
        this.setFavourites(this.favourites.filter((id) => id !== this.currentId))
      } else {
        this.setFavourites([...this.favourites, this.currentId])
      }
    },
  },
}
</script>

<style lang="scss">
.like {
  width: 23px;
  height: 20px;
  background: transparent;
  cursor: pointer;

  & * {
    @include standartTransition(.1);
  }

  &:hover * {
    fill: #EBEBEB;
  }

  &_active {
    & * {
      fill: $colLiked;
      stroke: $colLiked;
    }

    &:hover * {
      fill: $colError;
      stroke: $colError;
    }
  }
}
</style>
