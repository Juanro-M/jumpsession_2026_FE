import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '@/views/auth/AuthView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: AuthView
    },
    {
      path: '/landing',
      name: 'landing',
      component: () => import('@/views/landing/landing-view.vue')
    }
  ],
})

export default router
