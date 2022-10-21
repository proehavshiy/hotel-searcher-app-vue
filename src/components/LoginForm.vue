<template>
  <app-form 
  formHeading='Simple Hotel Check' 
  submitCTA="Войти" 
  :isSubmitDisabled="v$.$invalid" 
  :onSubmit="handleSubmit">
    <app-form-fieldset 
    labelPlaceholder="Логин" 
    type="email" 
    name="login" 
    id="login" 
    :value="email"
      @updateInput="handleLoginChange"
      :onBlur="v$.email.$touch"
      :isTouched="v$.email.$dirty"
      :errorMessage="v$.email.$errors[0]?.$message"
      />
    <app-form-fieldset 
    labelPlaceholder="Пароль" 
    type="password" 
    name="password" 
    id="password" 
    :value="password"
      @updateInput="handlePasswordChange" 
      :onBlur="v$.password.$touch"
      :isTouched="v$.password.$dirty"
      :errorMessage="v$.password.$errors[0]?.$message"
      />
  </app-form>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'
import { disableCyrillicSymbols } from '@/utils/validateLoginForm';
import { LOGIN_FORM_MESSAGES } from '@/constants';

export default {
  name: 'login-form',
  components: {},
  props: {},
  setup() {
    return {
      v$: useVuelidate(),
    }
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage(LOGIN_FORM_MESSAGES.required, required),
        email: helpers.withMessage(LOGIN_FORM_MESSAGES.email, email),
        // $autoDirty: true,
        // $lazy: true
      },
      password: {
        required: helpers.withMessage(LOGIN_FORM_MESSAGES.required, required),
        minLength: helpers.withMessage(LOGIN_FORM_MESSAGES.password, minLength(8)),
        disableCyrillicSymbols: helpers.withMessage(LOGIN_FORM_MESSAGES.cyrillic, disableCyrillicSymbols),
        // $autoDirty: true,
        // $lazy: true
      }
    }
  },
  computed: {
    ...mapState({
      isLogined: 'user/isLogined'
    })
  },

  methods: {
    ...mapActions({
      initFetchLogin: 'user/initFetchLogin',
    }),
    handleLoginChange(value) {
      this.email = value;
    },
    handlePasswordChange(value) {
      this.password = value;
    },
    async handleSubmit() {
      const result = await this.v$.$validate();
      if (result) {
        // fetch login and password and in case of success redirect to hotels page
        this.initFetchLogin({
          loginParams: {
            email: this.email,
            password: this.password
          },
          callback: () => this.$router.push({ name: 'hotels' })
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
