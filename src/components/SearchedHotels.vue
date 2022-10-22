<template>
  <div class="searched">
    <h2 class="searched__heading">
      Добавлено в Избранное:
      <span>{{favourites.length}}</span>
      {{getRUDeclination('hotel', favourites.length)}}
    </h2>
    <ul class="hotels" v-if="fetched.hotels.length">
      <Card v-for="hotel in fetched.hotels" :key="hotel.hotelId" type="main" :data="{...hotel, ...fetched.info}" />
    </ul>
    <data-placeholder v-else>Список отелей пуст</data-placeholder>
  </div>
</template>

<script>
import Card from "@/components/Card/Card.vue";
import { mapState } from "vuex";
import getRUDeclination from "@/utils/wordDeclinations"

export default {
  name: 'searched-hotels',
  components: { Card },
  computed: {
    ...mapState({
      favourites: (state) => state.hotels.favourites,
      fetched: (state) => state.hotels.fetched,
    })
  },
  methods: {
    getRUDeclination(...args) {
      return getRUDeclination(...args)
    }
  },
}
</script>

<style lang="scss" scoped>
.searched {
  height: 100%;
  display: flex;
  flex-direction: column;

  &__heading {
    margin-bottom: 20px;
    font-weight: 300;
    font-size: 17px;
    letter-spacing: -0.408px;
    color: $colMainText;
    text-align: left;

    &>span {
      margin: 0 5px;
      font-weight: 500;
      color: $colAccent;
    }
  }

  @media (max-width: $br3) {
    max-height: 500px;
  }
}
.hotels {
  padding-right: 14px;
  max-height: calc(100% - 40px);
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

.hotels-placeholder {
  margin: auto;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.17;
  color: $colSecondaryText;
  text-align: center;
}
</style>
