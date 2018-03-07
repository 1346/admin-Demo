import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1,
    status: '嘻嘻',
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  mutations: {
    increment(state) {
      state.count ++
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  }
});

// const mutations = {
//   add(state,n) {
//     state.count += n;
//   },
//   reduce(state) {
//     state.count -= 1;
//   }
// };
//
// const getters = {
//   count: function(state) {
//     return state.count+=100
//   }
// }

export default store;

// export default new Vuex.Store({
//   store
// })
