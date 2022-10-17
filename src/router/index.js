import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/hotels',
    name: 'hotels',
    component: () => import('../views/HotelsView.vue')
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

export default router
