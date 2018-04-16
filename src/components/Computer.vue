<template>
  <div>
    <h3>这里是子组件</h3>
    <button @click="changeMsg">改变</button>
  </div>
</template>
<script>
export default{
  // name: 'Son'
  props: [
    'value'
  ],
  data () {
    return {
      data: ['zhangsan', 'lisi', 'wanwu', 'zhaoliu', 'tianqi', 'xiaoba']
    }
  },
  methods: {
    changeMsg () {
      this.$emit('input', 'test')
    }
  }
}
</script>
