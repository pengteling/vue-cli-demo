<template>
  <div class="container">
    <Computer
      v-model="msg"
    ></Computer>
    <!-- :value="msg"
      @input="changeMsg" -->
    <input type="text"
     v-model="iptVal"
    >
    <!-- :value="iptVal"
     @change="iptVal = $event.target.value" -->
  </div>
</template>

<script>
import Computer from './components/Computer'
export default {
  name: 'App',
  components: {Computer},
  data () {
    return {
      msg: 'not updated',
      iptVal: ''
    }
  }
  // methods: {
  //   changeMsg (msg) {
  //     this.msg = msg
  //   }
  // }

}
</script>
