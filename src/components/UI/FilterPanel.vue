<template>
  <div class="filter" :class="{ 'filter_active': isFilterActive }" 
    @click="handleClickFilterPanel"
    @keydown.enter="handleClickFilterPanel" 
    role='button' 
    tabIndex={0}>
    <span>{{name}}</span>
    <div class="filter__buttons-container">
      <span class="filter__button filter__button_max" :class="{ 'filter__button_active': isMaxActive }">
          <icon-max :isActive="isMaxActive" />
        </span>
        <span class="filter__button filter__button_min" :class="{ 'filter__button_active': isMinActive }">
          <icon-min :isActive="isMinActive"/>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'filter-panel',
  props: {
    name: {
      type: String,
      required: true,
    },
    filterStatus: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isFilterActive() {
      return this.filterStatus.name === this.name;
    },
    isMaxActive() {
      return this.filterStatus.name === this.name && this.filterStatus.filterParam === 'max';
    },
    isMinActive() {
      return this.filterStatus.name === this.name && this.filterStatus.filterParam === 'min';
    }
  },
  methods: {
    changeFilterStatus() {
      if (this.filterStatus.filterParam === 'min') {
        return { name: this.name, filterParam: 'max' };
      } else {
        return { name: this.name, filterParam: 'min' };
      }
    },
    handleClickFilterPanel() {
      return this.$emit('updateFilterStatus', this.changeFilterStatus())
    },
  }
}
</script>

<style lang="scss" scoped>
@mixin activeFilter {
  color: $colAccent;
  border: 1px solid $colAccent;
}

.filter {
  padding: 4px 8px;
  min-width: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;
  line-height: 1.43;
  letter-spacing: -0.408px;
  color: #99A0A3;

  background: $colBg;
  border: 1px solid #E5E5E5;
  border-radius: 4px;

  cursor: pointer;
  @include standartTransition(.3);

  &>span {
    margin-right: 4px;
  }

  &:hover {
    @include activeFilter;
  }

  &_active {
    @include activeFilter;
  }
}

.filter__buttons-container {
  display: inline-flex;
  flex-direction: column;
}

.filter__button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  @include standartTransition(.5);

  &_max {
    padding: 5px 5px 0 5px;
  }

  &_min {
    padding: 0 5px 5px 5px;
  }
}
</style>
