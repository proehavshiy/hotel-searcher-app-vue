<template>
  <main class="login-page">
    <div class="form-wrapper">
      <LoginForm />
    </div>
  </main>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
export default {
  name: 'LoginView',
  components: {
    LoginForm,
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url('@/assets/images/login_bg.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
  }
}

.form-wrapper {
  width: 90%;
  max-width: 409px;
  z-index: 1;
}
</style>