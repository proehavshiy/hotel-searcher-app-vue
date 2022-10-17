<template>
  <fieldset class="fieldset">
    <label :for="id" class="label" :class="{ 'label_error': isTouched && errorMessage }">
      {{labelPlaceholder}}
    </label>
    <app-input :type="type" :name="name" :id="id" :value="value" @updateInput="this.$emit('updateInput', $event);"
      :onBlur="onBlur" :isError="errorMessage" />
    <span class="input-error" :class="{ 'input-error_active' : isTouched && errorMessage }">
      {{errorMessage}}
    </span>
  </fieldset>
</template>

<script>
export default {
  name: "app-form-fieldset",
  props: {
    labelPlaceholder: {
      type: String,
      default: 'Поле',
    },
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
    onChange: {
      type: Function,
      required: true,
    },
    onBlur: {
      type: Function,
    },
    isTouched: {
      type: Boolean,
    },
    errorMessage: {
      type: String,
    },
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.fieldset {
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 24px;
  }
}

.label {
  font-weight: 300;
  @include adaptive-font(16, 14);
  margin-bottom: 7px;
  text-align: left;

  @include standartTransition(.3);

  &_error {
    color: $colError;
  }
}

.input-error {
  position: absolute;
  left: 0;
  bottom: -20px;
  display: block;
  margin-top: 7px;
  font-size: 12px;
  line-height: 14px;
  color: $colError;

  opacity: 0;

  @include standartTransition(.3);

  &_active {
    opacity: 1;
  }
}
</style>
