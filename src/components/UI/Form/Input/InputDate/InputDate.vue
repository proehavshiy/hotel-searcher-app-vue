<template>
  <input :type={type} :name={name} :id={id} class="input" :class="{'input_error': isError}" :value={modelValue}
    @input="changeInputValue" @blur="onBlur" />
</template>

// :min={name ==='days' ? 1 }

<script>
export default {
  name: "app-input-date",
  props: {
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number, null],
      required: true,
    },
    onChange: {
      type: Function,
      required: true,
    },
    onBlur: {
      type: Function,
    },
    isError: {
      type: Boolean,
    }
  },
  methods: {
    changeInputValue(e) {
      this.$emit('update:modelValue', e.target)
    }
  }
}
</script>

<style lang="scss" scoped>
// убирает стандартный дейтпикер хрома
.input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
}

.input {
  width: 100%;
  padding: 15px;
  border: 1px solid $colBorders;
  border-radius: 4px;

  @include standartTransition(.3);

  &_error {
    color: $colError;
  }

  @media (max-width: $br4) {
    padding: 10px;
  }
}

.datepicker-icon {
  width: 18px;
  height: 18px;
  background: url('@/assets/images/calendar-today.svg');
  cursor: pointer;
  border-radius: 3px;
  @include standartTransition(.3);

  &:hover {
    background-color: $colBorders;
  }
}
</style>
