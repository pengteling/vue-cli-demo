<template>
  <div :class="['todo-item', todo.isCompleted?'completed':'']">
    <input
      type="checkbox"
      class="toggle"
      v-model="todo.isCompleted"
    >
    <label>{{ todo.content}}</label>
    <button @click="deleteTodo" class="destory">x</button>
  </div>
</template>
<script>
export default {
  name: 'Item',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo () {
      this.$emit('deleteTodo', this.todo)
    }
  }
}
</script>
<style lang="scss" scoped>
.todo-item {
  cursor: pointer;
  font-size: 24px;
  line-height: 36px;
  padding: 12px 0;
  border-bottom: 1px solid #ededed;
  position: relative;
  .destory {
    position: absolute;
    right: 60px;
    top: 15px;
    font-size: 9pt;
  }
  &.completed{
        color: #d9d9d9;
    text-decoration: line-through;
  }
}
</style>
