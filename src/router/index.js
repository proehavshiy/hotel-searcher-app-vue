import { createRouter, createWebHistory } from 'vue-router'
import routeProtectionRules from './routeProtectionRules';

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: {
      requireAuth: false,
    }
  },
  {
    path: '/hotels',
    name: 'hotels',
    component: () => import('../views/HotelsView.vue'),
    meta: {
      requireAuth: true,
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

// routes protection
router.beforeEach(routeProtectionRules);

export default router
