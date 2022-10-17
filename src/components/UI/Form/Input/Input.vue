<template>
  <InputDefault :type="type" :name="name" :id="id" :modelValue="value"
    @update:model-value="this.$emit('updateInput', $event)" />
</template>

// if type === 'date'
  // ? InputDate
  // : InputDefault

<script>
import InputDefault from './inputDefault/InputDefault.vue';
export default {
  name: "app-input",
  components: { InputDefault },
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
  }
}
</script>

<style lang="scss" scoped>

</style>
