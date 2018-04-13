<template>
  <div class="channel">
    <h2>Channel 3</h2>
    <p>
      如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。为此可以添加一个 keep-alive 指令参数：
    </p>
    <p>{{count}}</p>
  </div>
</template>
<script>
export default{
  name: 'Channel3',
  data () {
    return {
      count: 0
    }
  },
  activated () {
    this.count++
  }
}
</script>
