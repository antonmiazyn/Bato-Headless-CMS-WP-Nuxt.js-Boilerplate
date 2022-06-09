import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '~/pages/index'
import Documentation from '~/pages/docs'
import Demo from '~/pages/demo'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Homepage
      },
      {
        path: '/docs',
        component: Documentation
      },
      {
        path: '/demo',
        component: Demo
      }
    ]
  })
}
