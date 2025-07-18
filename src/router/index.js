import { createRouter, createWebHistory } from 'vue-router'
import Cuatri1 from '@/views/Cuatri1.vue'
import Cuatri2 from '@/views/Cuatri2.vue'
import Principal from '@/views/Principal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'principal',
      component: Principal,
    },
    {
      path: '/cuatri1',
      name: 'cuatri1',
      component: Cuatri1,
    },
    {
     path: '/cuatri2',
     name: 'cuatri2',
     component: Cuatri2,
    },
  ],
})

export default router
