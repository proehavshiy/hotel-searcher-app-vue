<template>
  <Header @logout="handleLogout" />
  <main class="hotels-page">
    <div class="content-wrapper">
      <div class="aside">
        <div class="search-form">
          <HotelForm />
        </div>
        <!-- <FavouriteHotels /> -->
      </div>
      <div class="main-content">
        <collapse-button :isActive="isCollapsed" :handleClick="toggleCollapse" />
        <div class="heading-block">
          <h1 class="heading">
            <span>Отели</span>
            {{fetchInfo.city}}
          </h1>
          <div class="date">
            {{fetchInfo.date && formatValue('date', fetchInfo.date)}}
          </div>
        </div>
        <div class="main-content__slider">
          <!-- <Slider /> -->
        </div>
        <div class="hotels collapsible-wrapper" :class="{'collapsed' : isCollapsed}">
          <div class="collapsible">
            <SearchedHotels />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from '@/components/Header.vue';
import HotelForm from '@/components/HotelForm.vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import format from '@/utils/formatValues';
import getWindowDimensions from '@/utils/getWindowDimensions';
import SearchedHotels from '@/components/SearchedHotels.vue';

function initIsCollapsed() {
  const { width } = getWindowDimensions();
  return width < 992 ? true : false
}

export default {
  name: 'hotels-view',
  components: { Header, HotelForm, SearchedHotels },
  data() {
    return {
      isCollapsed: initIsCollapsed(),
    }
  },
  watch: {
    isCollapsed(newVal) {
      console.log('isCollapsed watch:', newVal);
    }
  },
  mounted() {
    // fetch data hotels & images when page mounted
    this.initFetchHotels(this.searchParams);
    this.initFetchImages();
  },
  computed: {
    ...mapState({
      searchParams: (state) => state.searchParams,
      fetchInfo: (state) => state.hotels.fetched.info,
    })
  },
  methods: {
    ...mapMutations({
      setIsLogined: 'user/setIsLogined',
    }),
    ...mapActions({
      initFetchHotels: 'hotels/initFetchHotels',
      initFetchImages: 'hotels/initFetchImages',
    }),
    handleLogout() {
      this.setIsLogined(false);
      this.$router.push({ name: 'login' });
    },
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
    formatValue(...args) {
      return format(...args)
    }
  }
}
</script>

<style lang="scss" scoped>
.hotels-page {
  display: flex;
  position: relative;
}

.content-wrapper {
  margin: 28px auto 30px;
  width: calc((360 + 24 + 664) / 1440 * 100vw);
  max-height: 906px;
  display: flex;
  justify-content: center;

  &>*:first-child {
    width: calc(360 / (360 + 24 + 664) * 100%);
    max-width: 360px;
    min-width: 300px;
  }

  &>*:last-child {
    width: calc(664 / (360 + 24 + 664) * 100%);
    max-width: 664px;
  }

  &>*:not(:last-of-type) {
    margin-right: 24px;
  }

  @media (max-width: $br3) {
    width: 90%;
    max-height: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &>*:first-child {
      width: 100%;
      max-width: 100%;
      min-width: 100%;
      margin-bottom: 24px;
    }

    &>*:last-child {
      width: 100%;
      max-width: 100%;
    }

    &>*:not(:last-of-type) {
      margin-right: 0;
    }
  }
}


.aside {
  display: flex;
  flex-direction: column;

  &>*:not(:last-of-type) {
    margin-bottom: 24px;
  }
}

.main-content {
  position: relative;
  @include contentBlock;
  justify-content: flex-start;
  padding: 48px 32px;

  @media (max-width: $br1) {
    padding: 32px;
  }

  &__slider {
    margin: 28px 0;
  }
}

.heading-block {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: $br1) {
    flex-direction: column;
  }
}

.heading {
  font-weight: 500;
  font-size: 32px;
  line-height: 1.19;

  &>span {
    position: relative;
    margin-right: 20px;

    @media (max-width: 334px) {
      margin-right: 0;
    }

    &::after {
      content: '';
      margin-left: 20px;
      display: inline-block;
      width: 9px;
      height: 17px;
      background-image: url('@/assets/images/hotels_heading_vector.svg');
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }

  @media (max-width: $br1) {
    margin-bottom: 10px;
    text-align: center;
  }
}

.date {
  font-size: 24px;
  line-height: 1.17;
  text-align: right;

  color: #41522E;
}

.hotels {
  margin-top: 28px;

  &>div {
    height: 100%;
  }
}

@include verticalCollapseBlockAnimation;
</style>