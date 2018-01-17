import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/'
const _import = require('./_import_' + process.env.NODE_ENV)

import Layout from '../views/layout/Layout'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'index',
//       component: index
//     },
//     {
//       path: '/HelloWorld',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })


export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/Test',
    component: Layout,
    name: '测试',
    icon: 'example',
    children: [
      {
        path: 'index',
        name: 'Test',
        icon: 'testing-mouse',
        component: _import('Test/test'),
        meta: { title: 'Test', icon: 'test' }
      }
    ]
  },
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

