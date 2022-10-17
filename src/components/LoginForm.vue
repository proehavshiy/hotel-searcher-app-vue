<template>
  <app-form formHeading='Simple Hotel Check' submitCTA="Войти" :isSubmitDisabled="false" :onSubmit="handleSubmit">
    <app-form-fieldset labelPlaceholder="Логин" type="email" name="login" id="login" :value="email"
      @updateInput="handleLoginChange" />
    <app-form-fieldset labelPlaceholder="Пароль" type="password" name="password" id="password" :value="password"
      @updateInput="handlePasswordChange" />
    <!-- <FormFieldset labelPlaceholder='Логин' type='email' name='login' id='login' value={formik.values.login}
    onChange={formik.handleChange} onBlur={formik.handleBlur} isTouched={formik.touched.login}
    errorMessage={formik.errors.login} />
  <FormFieldset labelPlaceholder='Пароль' type='password' name='password' id='password' value={formik.values.password}
    onChange={formik.handleChange} onBlur={formik.handleBlur} isTouched={formik.touched.password}
    errorMessage={formik.errors.password} /> -->
  </app-form>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'login-form',
  components: {},
  props: {},
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    ...mapState({
      isLogined: 'isLogined'
    })
  },
  methods: {
    ...mapActions({
      initFetchLogin: 'initFetchLogin',
    }),
    handleLoginChange(value) {
      this.email = value;
    },
    handlePasswordChange(value) {
      this.password = value;
    },
    handleSubmit() {
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
</script>

<style lang="scss" scoped>

</style>
