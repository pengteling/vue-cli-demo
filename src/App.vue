<template>
  <div>
    <header class="main-header">
      <h1>Todo</h1>
    </header>
    <div class="main">
      <section class="real-app">
        <input type="text" @keyup.enter="addTodo" class="add-input" placeholder="接下来要做什么?">
        <tabs-component
          v-for="todo in todosView"
          :key="todo.content"
          :todo="todo"
          @deleteTodo="deleteTodo"
        />
        <tabs
          :left-items-count="leftItemsCount"
          :filter="filter"
          :is-have-completed="isHaveCompleted"
          @toggle-tab-filter="toggleTabFilter"
          @clear-completed="clearCompleted"
        />
      </section>
    </div>
    <footer id="footer">
      <span>written by Jacky</span>
    </footer>
  </div>
</template>

<script>
/* eslint no-unused-vars : off */
import TabsComponent from './components/Item'
import Tabs from './components/Tabs'
export default {
  name: 'App',
  components: {
    TabsComponent,
    Tabs
  },
  data: function () {
    return {
      todos: [
        // {
        //   content:'吃饭',
        //   isCompleted:false
        // },
        // {
        //   content:'睡觉',
        //   isCompleted:false
        // }
      ],
      filter: 'All'
    }
  },

  computed: {
    isHaveTodo () {
      return this.todos.length > 0
    },
    leftItemsCount () {
      return this.todos.filter((v) => v.isCompleted === false).length
    },
    todosView () {
      if (this.filter === 'All') {
        return this.todos
      } else if (this.filter === 'Active') {
        return this.todos.filter(v => v.isCompleted === false)
      } else {
        return this.todos.filter(v => v.isCompleted === true)
      }
    },
    isHaveCompleted () {
      return this.todos.filter(v => v.isCompleted === true).length > 0
    }
  },
  beforeMount () {
    if (localStorage.getItem('filter')) {
      this.todos = JSON.parse(localStorage.getItem('todos'))
      this.filter = localStorage.getItem('filter')
    }
  },

  updated () {
    localStorage.setItem('filter', this.filter)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  },
  methods: {
    addTodo (e) {
      // console.log(e.target.value)
      let content = e.target.value
      if (content) {
        this.todos.unshift({
          // id:Symbol(),
          content: content,
          isCompleted: false
        })
      }
      e.target.value = ''
    },
    deleteTodo (todo) {
      // this.todos.splice(this.todos.findIndex(item=> todo === item),1)
      this.todos = this.todos.filter(v => v !== todo)
    },
    toggleTabFilter (state) {
      this.filter = state
    },
    clearCompleted () {
      this.todos = this.todos.filter(v => v.isCompleted === false)
    }
  }

}
</script>

<style lang="scss">
.main-header {
  text-align: center;
  h1 {
    font-size: 100px;
    color: rgba(175, 47, 46, 0.4);
    font-weight: 700;
    margin: 20px;
  }
}
#footer{
  margin-top: 40px;
  text-align: center;
  color: #bfbfbf;
  font-size: 10px;text-shadow: 0 1px 0 rgba(#999,0.6);
}
.real-app {
  width: 640px;
  margin: 0 auto;
  box-shadow: 0 0 5px rgba(#666, 0.1);
  input.add-input {
    width: 100%;
    font-size: 24px;
    line-height: 1.4em;
    border: 0;
    outline: none;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    padding: 16px 16px 16px 60px;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.1);
  }
}
</style>
