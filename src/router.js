import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/boxes',
      name: 'Boxes',
      component: () => import(/* webpackChunkName: "boxes" */ `@/views/Boxes/${process.env.VUE_APP_BRAND}`)
    },
    {
      path: '/buttons',
      name: 'Buttons',
      component: () => import(/* webpackChunkName: "buttons" */ `@/views/Buttons/${process.env.VUE_APP_BRAND}`)
    }
  ]
})
