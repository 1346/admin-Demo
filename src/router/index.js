import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

import Layout from '../views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
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
  {
    path: '/components',
    component: Layout,
    name: '定位',
    redirect: 'noredirect',
    icon: 'books',
    children: [
      {
        path: 'position/index',
        name: 'position',
        icon: 'books',
        component: _import('position/index')
      }
    ]
  },
  {
    path: '/components',
    component: Layout,
    name: 'TODO',
    redirect: 'noredirect',
    icon: 'books',
    children: [
      {
        path: 'Todo/index',
        name: 'Todo',
        icon: 'books',
        component: _import('Todo/index')
      }
    ]
  },
  {path: '/components', component: Layout, name: 'Select', redirect: 'noredirect', icon: 'books', children: [{ path: 'Select/index', name: 'select', icon: 'books', component: _import('Select/index') }]},
  {path: '/components', component: Layout, name: 'Demo', redirect: 'noredirect', icon: 'books',
    children: [
      {path: 'demo/ok', name: 'demo', icon: 'books', component: _import('demo/ok')},
      {path: 'demo/demoStore', name: 'store', icon: 'books', component: _import('demo/demoStore')}
    ]},
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

