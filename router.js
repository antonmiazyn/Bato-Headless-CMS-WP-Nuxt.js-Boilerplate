import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '~/pages/index'
import InspirePage from '~/pages/inspire'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: IndexPage
      },
      {
        path: '/inspire',
        component: InspirePage
      }
    ]
  })
}
