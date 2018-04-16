<template>
  <div>
    <h3>这里是子组件</h3>
    <slot :data="data" test="123"></slot>
  </div>
</template>
<script>
export default{
  // name: 'Son'
  data () {
    return {
      data: ['zhangsan', 'lisi', 'wanwu', 'zhaoliu', 'tianqi', 'xiaoba']
    }
  }
}
</script>
