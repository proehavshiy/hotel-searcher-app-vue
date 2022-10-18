<template>
  <li class="card" :class="`card_${type}`">
    <div class="card__header">
      <h3 class="card__heading" :title="data.hotelName">
        {{data.hotelName}}
      </h3>
      <Like :currentId="data.hotelId" />
    </div>
    <div class="card__dates">
      <span class="card__startDate">{{formatValue('date', data.date)}}</span>
      <span class="card__days">
        {{`${data.days} ${getRUDeclination('day', data.days)}`}}
      </span>
    </div>
    <div class="card__footer">
      <Stars :numOfStars="data.stars" />
      <div class="card__price">
        Price:
        <span>{{formatValue('currency', data.priceAvg)}}</span>
      </div>
    </div>
  </li>
</template>

<script>
import getRUDeclination from "@/utils/wordDeclinations";
import format from '@/utils/formatValues';
import Like from "./Like/Like.vue";
import Stars from "./HotelStars/Stars.vue";

export default {
  name: 'hotel-card',
  components: { Like, Stars },
  props: {
    type: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getRUDeclination(...args) {
      return getRUDeclination(...args)
    },
    formatValue(...args) {
      return format(...args)
    }
  },
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid rgba(135, 135, 135, 0.2);

  &_main {
    padding: 19px 16px 16px 88px;
    position: relative;

    @media (max-width: $br3) {
      padding: 16px 0;
    }

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 64px;
      height: 64px;
      background-image: url('@/assets/images/house.svg');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: auto;
      background-color: rgba(65, 82, 46, 0.05);
      border-radius: 50%;

      @media (max-width: $br3) {
        display: none;
      }
    }
  }

  &_favourite {
    padding: 16px 0;
  }
}

.card__header {
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
}

.card__heading {
  max-width: 70%;
  font-size: 17px;
  letter-spacing: -0.408px;
  @include extraTextHidden;
}

.card__dates {
  margin-bottom: 5px;
  display: flex;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: -0.408px;
  color: $colSecondaryText;

  @media (max-width: $br3) {
    flex-direction: column;
  }
}

.card__startDate {
  margin-right: 15px;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    display: inline-block;
    margin-left: 15px;
    background: $colSecondaryText;
    width: 9px;
    height: 1px;

    @media (max-width: $br3) {
      display: none;
    }
  }
}

.card__days {}

.card__footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.card__price {
  font-weight: 300;
  font-size: 11px;
  letter-spacing: -0.408px;
  color: $colSecondaryText;

  &>span {
    margin-left: 8px;
    font-size: 17px;
    text-align: right;
    letter-spacing: -0.408px;

    color: #424242;
  }
}
</style>
