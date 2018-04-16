<template>
  <div class="container">
    <transition-group tag="div" name="fadeIn">
      <div class="slide" v-for="(item,index) in banners" :key="index" v-show="index === curpage">
        <a :href="item.sourceUrl">
          <img :src="item.imgUrl" alt="">
        </a>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'App',
  // props:[],
  data () {
    return {
      curpage: 0,
      banners: [
        {
          sourceUrl: 'https://i1.mifile.cn/a4/xmad_15234553192824_sTkYv.jpg',
          imgUrl: 'https://i1.mifile.cn/a4/xmad_15234553192824_sTkYv.jpg'
        },
        {
          sourceUrl: 'https://i1.mifile.cn/a4/xmad_1523852977495_RedjU.jpg',
          imgUrl: 'https://i1.mifile.cn/a4/xmad_1523852977495_RedjU.jpg'
        }
      ]
    }
  },
  mounted () {
    setInterval(() => {
      this.curpage++
      if (this.curpage >= this.banners.length) {
        this.curpage = 0
      }
    }, 3000)
  }

}
</script>
<style lang="scss">
.slide{
  position: absolute;
  width: 800px;
  height: 200px;
  img{
    max-width: 800px;
  }
}
.fadeIn-enter-active, .fadeIn-leave-active{
  transition: all 1s;
}
.fadeIn-enter,.fadeIn-leave-to{
  opacity: 0;
}
.fadeIn-enter{
  transform: translate3d(100%,0,0)
}
.fadeIn-leave-to{
  transform: translate3d(-100%,0,0)
}
</style>
