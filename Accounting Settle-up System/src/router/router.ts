import { createRouter, createWebHistory } from 'vue-router'
import loginView from '@/views/login/login-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: loginView
    },
    {
      path: '/landing',
      component: () => import('@/views/landing/landing-view.vue')
    },
    {
      path: '/group',
      component: () => import('@/views/group/group-view.vue')
    },
    {
      path: '/payment',
      component: () => import('@/views/payment/payment-view.vue')
    }
  ],
})

export default router
