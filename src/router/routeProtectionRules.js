import store from '@/store'

export default function routeProtectionRules(to, from, next) {
  const isLogined = store.state.user.isLogined;
  // if user is not logined, redirect to login
  if (to.matched.some((record) => record.meta.requireAuth)) {
    isLogined
      ? next(true)
      : next({ name: 'login' });
    // if user is logined, redirect to hotels
  } else if (to.matched.some((record) => record.meta.requireAuth === false)) {
    isLogined
      ? next({ name: 'hotels' })
      : next(true);
  } else {
    next(true);
  }
}