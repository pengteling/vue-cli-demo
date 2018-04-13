<template>
  <div>
    <div class="left">
        <button @click="currentView = 'Channel1'">Channel 1</button>
        <button @click="currentView = 'Channel2'">Channel 2</button>
        <button @click="currentView = 'Channel3'">Channel 3</button>
    </div>

    <div class="right">
      <transition name="fade">
        <keep-alive>
          <component :is="currentView"></component>
        </keep-alive>
      </transition>
      <!-- <Channel1></Channel1> -->
    </div>
  </div>

</template>

<script>
import Channel1 from './components/Channel1'
import Channel2 from './components/Channel2'
import Channel3 from './components/Channel3'
export default {
  name: 'App',
  components: {
    Channel1,
    Channel2,
    Channel3
  },
  data () {
    return {
      currentView: 'Channel1'
    }
  },
  mounted () {

  }
}
</script>
<style lang="scss">
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: all 2s
}
.fade-leave{

}

</style>
