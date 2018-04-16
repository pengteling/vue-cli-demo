<template>
  <div class="container">
    <span>{{ msg }}</span>
    <button @click="updateMsg">update</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'not updated'
    }
  },
  methods: {
    updateMsg () {
      this.msg = 'updated'
      this.$nextTick(() => {
        console.log(this.$el.textContent + ' nextTick')
      })
      console.log(this.$el.textContent + ' click')
    }
  },
  beforeUpdate () {
    console.log(this.$el.textContent + ' beforeUpdate')
  },
  updated () {
    console.log(this.$el.textContent + ' updated')
  }
}
</script>
