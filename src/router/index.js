import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: () => import('../views/StartView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/shedule',
    name: 'schedule',
    component: () => import('../views/ScheduleView.vue')
  },
  {
    path: '/location',
    name: 'location',
    component: () => import('../views/LocationView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
