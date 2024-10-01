import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IntroSlide from '@/components/IntroSlide.vue'
import RequirementSlides from '@/components/RequirementSlides.vue'
import ConclusionSlide from '@/components/ConclusionSlide.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
})

export default router
