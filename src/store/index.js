import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'
import demo from './modules/demo'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    demo,
  },
  getters
})

export default store
