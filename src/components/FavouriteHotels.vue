<template>
  <div class="favourites">
    <collapse-button :isActive="isCollapsed" :handleClick="toggleCollapse" />
    <h2 class="heading">Избранное</h2>
    <div class="content-wrapper collapsible-wrapper" :class="{'collapsed' : isCollapsed}">
      <div class="content collapsible">
        <div class="filer-bar">
          <filter-panel name="Рейтинг" :filterStatus="filterState" @updateFilterStatus="handleFilterPanel" />
          <filter-panel name="Цена" :filterStatus="filterState" @updateFilterStatus="handleFilterPanel" />
        </div>
        <ul class="hotels" v-if="sortedFavouriteHotels.length">
          <Card v-for="hotel in sortedFavouriteHotels" :key="hotel.hotelId" type="favourite"
            :data="{...hotel, ...fetched.info}" />
        </ul>
        <data-placeholder v-else>Список отелей пуст</data-placeholder>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/Card/Card.vue";
import getWindowDimensions from '@/utils/getWindowDimensions';
import { FavouriteHotelsForRendering } from "@/utils/FavouriteHotelsForRendering";

export default {
  name: 'favourite-hotels',
  components: { Card },
  data() {
    return {
      isCollapsed: null,
      filterState: { name: null, filterParam: null },
    }
  },
  computed: {
    ...mapState({
      favourites: (state) => state.hotels.favourites,
      fetched: (state) => state.hotels.fetched,
    }),
    sortedFavouriteHotels() {
      const favouriteHotels = this.fetched.hotels.filter((hotel) => this.favourites.includes(hotel.hotelId));
      return new FavouriteHotelsForRendering(favouriteHotels).sortByParam(this.filterState).data;
    }
  },
  mounted() {
    this.setIsCollapsed();
    console.log('favourites:', this.favourites);
    console.log('fetched:', this.fetched);
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
    setIsCollapsed() {
      const { width } = getWindowDimensions();
      this.isCollapsed = width < 992 ? true : false;
    },
    handleFilterPanel(newValue) {
      this.filterState = newValue;
    }
  },
}
</script>

<style lang="scss" scoped>
.favourites {
  height: 50%;
  position: relative;
  @include contentBlock;
  justify-content: flex-start;
}

.heading {
  font-weight: 500;
  font-size: 32px;
  line-height: 1.17;
}

.filer-bar {
  margin-bottom: 32px;
  display: flex;
  flex-flow: row wrap;

  &>*:not(:last-of-type) {
    margin-right: 8px;
  }
}

.hotels {
  padding-right: 14px;
  max-height: calc(288px - 32px);
  overflow-y: auto;

  // стили для скроллбара и трека
  &::-webkit-scrollbar {
    width: 2px;
    background: #E7E7E7;
  }

  &::-webkit-scrollbar-thumb {
    background: #41522E;
    border-radius: 2px;
  }
}

.content-wrapper {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
}

.content {
  margin-top: 32px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
}

// обертка для сворачивания блока по кнопке
// https: //stackoverflow.com/questions/3508605/how-can-i-transition-height-0-to-height-auto-using-css
@include verticalCollapseBlockAnimation;
</style>
