// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/icons' // icon
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import './style/global.scss'
import store from './store'
import './style/index.scss'
import 'jquery'
import './mock'
import './permission'
import 'element-ui/lib/theme-chalk/display.css'

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
