import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/boxes',
      name: 'Boxes',
      component: () => import(/* webpackChunkName: "boxes" */ '@/views/Boxes')
    },
    {
      path: '/buttons',
      name: 'Buttons',
      component: () => import(/* webpackChunkName: "boxes" */ '@/views/Buttons')
    },
  ]
})
