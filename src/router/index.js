import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'create',
    component: () => import('@/views/Create')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/List')
  },
  {
    path: '/card/:id',
    name: 'card',
    component: () => import('@/views/CardPage')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
