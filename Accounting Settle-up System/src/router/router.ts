import { createRouter, createWebHistory } from 'vue-router'
import authView from '@/views/auth/auth-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'auth',
      path: '/',
      component: authView
    },
    {
      name: 'landing',
      path: '/landing',
      component: () => import('@/views/landing/landing-view.vue')
    },
    {
      name: 'group',
      path: '/group',
      component: () => import('@/views/group/group-view.vue')
    },
    {
      name: 'payment',
      path: '/payment',
      component: () => import('@/views/payment/payment-view.vue')
    }
  ],
})

export default router
