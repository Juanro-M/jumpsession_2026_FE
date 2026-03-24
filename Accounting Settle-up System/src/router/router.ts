import { createRouter, createWebHistory } from 'vue-router'
import loginView from '@/views/login/loginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: loginView
    }
  ],
})

export default router
