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
      path: '/chapter-1-start',
      name: 'chapter-1-start',
      component: () => import('@/views/Chapter1-start.vue')
    },
    {
      path: '/chapter-1-end',
      name: 'chapter-1-end',
      component: () => import('@/views/Chapter1-end.vue')
    },
    {
      path: '/chapter-2-start',
      name: 'chapter-2-start',
      component: () => import('@/views/Chapter2-start.vue')
    },
    {
      path: '/chapter-2-end',
      name: 'chapter-2-end',
      component: () => import('@/views/Chapter2-end.vue')
    },
    {
      path: '/chapter-3-start',
      name: 'chapter-3-start',
      component: () => import('@/views/Chapter3-start.vue')
    },
    {
      path: '/chapter-3-end',
      name: 'chapter-3-end',
      component: () => import('@/views/Chapter3-end.vue')
    },
    {
      path: '/chapter-4-start',
      name: 'chapter-4-start',
      component: () => import('@/views/Chapter4-start.vue')
    },
    {
      path: '/chapter-4-end',
      name: 'chapter-4-end',
      component: () => import('@/views/Chapter4-end.vue')
    }
  ]
})

export default router
