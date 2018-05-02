import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  // strict: process.env.NODE_ENV !== 'production',
  state: {
    todos: [],
    filter: 'All'
  },
  getters: {
    todosView (state) {
      if (state.filter === 'All') {
        return state.todos
      } else if (state.filter === 'Active') {
        return state.todos.filter(v => v.isCompleted === false)
      } else {
        return state.todos.filter(v => v.isCompleted === true)
      }
    },
    isHaveCompleted (state) {
      return state.todos.some(v => v.isCompleted === true)
    },
    leftItemsCount (state) {
      return state.todos.filter((v) => v.isCompleted === false).length
    }
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.unshift(todo)
    },
    deleteTodo (state, todo) {
      state.todos = state.todos.filter(v => v !== todo)
    },
    toggleFilter (state, filter) {
      state.filter = filter
    },
    clearComplete (state) {
      state.todos = state.todos.filter(v => v.isCompleted === false)
    },
    initState (state, payload) {
      state.todos = payload.todos
      state.filter = payload.filter
    },
    updateTodo (state, todo) {
      console.log('updateTodo')
      state.todos = state.todos.map(item => {
        if (todo === item) {
          // return {...todo,{isCompleted:!todo.isCompleted}}
          return Object.assign({}, item, {isCompleted: !item.isCompleted})
        } else {
          return item
        }
      })
    }
  }
})
