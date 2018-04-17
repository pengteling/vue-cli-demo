<template>
 <div id="app">
 <child1
  class="red"
  :p-child1="child1"
  :p-child2="child2"
  :p-child3="child3"
  v-on:test1="onTest1"
  v-on:test2="onTest2">
 </child1>
 </div>
</template>
<script>
import Child1 from './components/Child1.vue'
export default {
  data () {
    return {
      child1: 'child1',
      child2: 'child2',
      child3: 'child3'
    }
  },
  components: { Child1 },
  methods: {
    onTest1 () {
      console.log('test1 running...')
    },
    onTest2 () {
      console.log('test2 running')
    }
  }
}
</script>
