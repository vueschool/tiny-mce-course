import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/chapter-1',
      name: 'chapter-1',
      component: () => import('@/views/Chapter1.vue')
    },
    {
      path: '/chapter-2',
      name: 'chapter-2',
      component: () => import('@/views/Chapter2.vue')
    },
    {
      path: '/chapter-3',
      name: 'chapter-3',
      component: () => import('@/views/Chapter3.vue')
    },
    {
      path: '/chapter-4',
      name: 'chapter-4',
      component: () => import('@/views/Chapter4.vue')
    }
  ]
})

export default router
