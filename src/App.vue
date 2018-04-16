<template>
  <div class="container">
    <computer>
      <div slot="CPU" class="cpu"><b>Intel Core i7</b></div>
      <div slot="GPU"><i>GTX980Ti</i></div>
      <div slot="Memory"><strong>Kingston 32G</strong></div>
      <div slot="Hard-drive">(SSD)：Samsung SSD 1T</div>
    </computer>
  </div>
</template>

<script>
import Computer from './components/Computer'
export default {
  name: 'App',
  components: {
    Computer
  }
}
</script>
