<template>
  <div class="channel">
    <h2>Channel 2</h2>
    <p>
      在编写组件时，最好考虑好以后是否要进行复用。一次性组件间有紧密的耦合没关系，但是可复用组件应当定义一个清晰的公开接口，同时也不要对其使用的外层数据作出任何假设。
    </p>
    <p>{{count}}</p>
  </div>
</template>
<script>
export default{
  name: 'Channel2',
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
