<template>
  <form class="form" 
    @submit.prevent="onSubmit" 
    novalidate
  >
    <h1 class="heading" v-if="formHeading">
      {{formHeading}}
    </h1>
    <div class="fields-block">
      <slot></slot>
    </div>
    <button class="submit" 
      type="submit" 
      :disabled="isSubmitDisabled"
    >
      {{submitCTA}}
    </button>
  </form>
</template>

<script>
export default {
  name: "app-form",
  props: {
    formHeading: {
      type: String,
    },
    submitCTA: {
      type: String,
      required: true,
    },
    isSubmitDisabled: {
      type: Boolean,
    },
    onSubmit: {
      type: Function,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  @include contentBlock();
  align-items: space-between;
}

.heading {
  @include h1;
  text-align: center;
  margin-bottom: 32px;

  @media (max-width: $br4) {
    margin-bottom: 24px;
  }
}

.fields-block {
  margin-bottom: 32px;
}

.submit {
  @include button;
}
</style>
