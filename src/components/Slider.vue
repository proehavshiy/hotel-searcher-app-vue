<template>
  <div class="slider-wrapper">
    <swiper 
    v-if="!isLoading"
    class="slider"
    :spaceBetween="12"
    :scrollbar="{ draggable: true }"
    :loop="true"
    :breakpoints="{
      1280: {
        slidesPerView: 3.5,
      },
      1024: {
        slidesPerView: 3,
      },
      480: {
        slidesPerView: 3.5,
      },
      320: {
        slidesPerView: 1.5,
      },
    }"
    >
      <swiper-slide class="slide" v-for="img of images" :key="img.id">
        <img class="image" :src="img.link" alt='a hotel' />
      </swiper-slide>
    </swiper>
    <data-placeholder v-else-if="error">{{error}}</data-placeholder>
    <loading-spinner v-else-if="isLoading" />
    <data-placeholder v-else>Изображений нет</data-placeholder>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';

export default {
  name: 'app-slider',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
    },
    error: {
      type: String,
    }
  },
}
</script>

<style lang="scss">
.slider-wrapper {
  width: 100%;
  height: 149px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-wrapper {
  max-height: 164px;
}

.slider {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  border-radius: 10px;
  box-shadow: 0 3px 4px rgb(0 0 0 / 15%);
  cursor: grab;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
