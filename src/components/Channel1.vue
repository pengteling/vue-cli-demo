<template>
  <div class="channel">

    <h2>Channel 1</h2>
    <p>
      <input type="text">
      通过使用保留的 &lt;component&gt; 元素，并对其 is 特性进行动态绑定，你可以在同一个挂载点动态切换多个组件：
    </p>
    <p>{{count}}</p>
  </div>
</template>
<script>
export default{
  name: 'Channel1',
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
