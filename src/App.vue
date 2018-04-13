<template>
  <div>
    <input type="text" ref="ipt">
    <my-component ref="child"></my-component>
  </div>
</template>

<script>
import myComponent from './components/MyComponent'
export default {
  name: 'App',
  components: {
    myComponent
  },
  data () {
    return {
      msg: 'Hi, Vue.js!'
    }
  },
  mounted () {
    console.log(this.$refs.ipt)
    this.msg = '123'
    this.$refs.ipt.value = this.msg
    console.log(this.$refs.child)
    // var iptDom = document.getElementById('id')
    // setTimeout(() => {
    //   this.$refs.ipt.value = this.msg
    // }, 3000)

    // console.log(this.ref.)
  }
}
</script>
