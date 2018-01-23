import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

import Layout from '../views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index')
    }]
  },

  {
    path: '/IconLib',
    component: Layout,
    name: '一些图标',
    redirect: 'noredirect',
    icon: 'books',
    children: [
      {
        path: 'index',
        name: '图标',
        icon: 'books',
        component: _import('IconLib/index')
      }
    ]
  },

  {
    path: '/components',
    component: Layout,
    name: '按钮组件',
    redirect: 'noredirect',
    icon: 'books',
    children: [
      {
        path: 'Button/index',
        name: '按钮',
        icon: 'books',
        component: _import('Button/index')
      }
    ]
  },
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

