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
  methods: {
    handleLoginChange(e) {
      console.log('3:', e);
      console.log('login:', e);
      this.email = e;
    },
    handlePasswordChange(e) {
      console.log('3:', e);
      console.log('password:', e);
      this.password = e;
    },
    handleSubmit(e) {
      console.log('submit:', e);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
