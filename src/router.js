import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('./views/Personal.vue')
    },
    {
      path: '/detailFilm/:id',
      name: 'detailFilm',
      component: () => import('./views/DetailFilm.vue')
    },
    {
      path:'/displayMsgList',
      name: 'displayMsgList',
      component: () => import('./views/DisplayMsgList.vue')
    },
    {
      path: '/cobaReturnState',
      name: 'cobaReturnState',
      component: () => import('./views/CobaReturnState.vue')
    }
  ]
})
