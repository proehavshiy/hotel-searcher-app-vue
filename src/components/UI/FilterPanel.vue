<template>
  <div class="filter" :class="{ 'filter_active': filterStatus.name === name }" @click="handleClickFilterPanel"
    @keydown="handleKeyDownFilterPanel" role='button' tabIndex={0}>
    <span>{{name}}</span>
    <div class="filter__buttons-container">
      <span class="filter__button filter__button_max"
        :class="{ 'filter__button_active': filterStatus.name === name && filterStatus.filterParam === 'max' }">
        <icon-max></icon-max>
      </span>
      <span class="filter__button filter__button_min"
        :class="{ 'filter__button_active': filterStatus.name === name && filterStatus.filterParam === 'min' }">
        <icon-min></icon-min>
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
    handleKeyDownFilterPanel(evt) {
      if (evt.code === 'Enter') {
        return this.$emit('updateFilterStatus', this.changeFilterStatus())
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin activeFilter {
  color: $colAccent;
  border: 1px solid $colAccent;
}

@mixin activeButton {
  path {
    fill: $colAccent;
  }
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

  &_active {
    @include activeButton;
  }

  &_max {
    padding: 5px 5px 0 5px;
  }

  &_min {
    padding: 0 5px 5px 5px;
  }
}
</style>
