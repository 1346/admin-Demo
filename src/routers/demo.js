const _import = require('../router/_import_' + process.env.NODE_ENV)

import Layout from '../views/layout/Layout'

export default  [
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
  }
]
