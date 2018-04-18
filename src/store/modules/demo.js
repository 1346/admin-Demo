const demo = {
  state: {
    count: 100,
    show: false
  },
  mutations: {
    demoMutationAdd(state, n) {
      state.count += n
    },
    demoMutationLess(state) {
      state.count --
    },
    isShow(state) {
      state.show = !state.show;
    }
  },
  actions: {
    increment({ commit }, n) {
      if (isNaN(parseInt(n))) {
        throw 'n is undefined'
      } else {
        commit('demoMutationAdd', n)
      }
      // commit('demoMutationAdd', parseInt(n))
    },
    demoMutationLess({ commit }) {
      setTimeout(() => {
        commit('demoMutationLess')
      }, 2000)
    },
    isShow({ commit }) {
      commit('isShow')
    }
  }
};

export default demo
