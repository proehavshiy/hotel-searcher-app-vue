<template>
  <input :type="type" :name="name" :id="id" class="input" :class="{'input_error': isError}" :value="value"
    @input="this.$emit('updateInput', $event.target.value)" @blur="onBlur" />
<Datepicker 
v-if="type === 'date'"
:modelValue="value"
@update:modelValue="onChangeDatePicker"
locale="ru" 
cancelText="Отменить" 
selectText="Выбрать" 
showNowButton 
nowButtonLabel="Сегодня" 
:minDate="new Date()" 
:enableTimePicker="false"
:monthChangeOnScroll="false"
inputClassName="input-hide"
>
<template #input-icon>
  <button class="datepicker-icon" type="button">
  </button>
</template>
</Datepicker>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss'

export default {
  name: "app-input",
  components: { Datepicker },
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
    value: {
      type: String,
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
    onChangeDatePicker(e) {
      this.$emit('updateInput', e)
    }
  }
}
</script>

<style lang="scss">
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

// datepicker
.input-hide {
  display: none !important;
}
.dp__icon {
  display: none;
}

.dp__input_icon {
position: static;
}

.dp__main{
  height: 18px;
    position: absolute;
    right: 20px;
    top: 55%;
    width: 18px;
}
</style>

