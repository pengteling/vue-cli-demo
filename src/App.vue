<template>
  <div class="container">
    <son class="classson">
      父组件上子组件包含的内容
    </son>
    <button>按钮</button>
  </div>
</template>

<script>
import Son from './components/Son'
export default {
  name: 'App',
  components: {
    Son
  }
}
</script>
