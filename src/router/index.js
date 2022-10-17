import unpackLocalStorage from '@/utils/unpackLocalStorage';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/hotels',
    name: 'hotels',
    component: () => import('../views/HotelsView.vue'),
    meta: {
      isLogined: true,
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: () => import('../views/ErrorView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// защита роута
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.isLogined)) {
    const [isExist, { isLogined }] = unpackLocalStorage('hotels-app');
    if (isExist && isLogined) {
      next(true);
    } else {
      // если user is not logined, то редирект на авторизацию
      next({ name: 'login' });
    }
  } else {
    next(true);
  }
});

export default router
