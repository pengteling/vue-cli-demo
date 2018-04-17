<template>
  <div class="container">
    <transition-group tag="div" name="fadeIn">
      <div class="slide" v-for="(item,index) in banners" :key="index" v-show="index === curpage">
        <a :href="item.sourceUrl">
          <img :src="item.imgUrl" alt="">
        </a>
      </div>
    </transition-group>
    <div class="btns">
      <button @click="prev">上一张</button>
      <button @click="next">下一张</button>
    </div>
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
        },
        {
          sourceUrl: 'https://i1.mifile.cn/a4/xmad_15239326176265_HDrpS.jpg',
          imgUrl: 'https://i1.mifile.cn/a4/xmad_15239326176265_HDrpS.jpg'
        }
      ],
      timer: null
    }
  },
  mounted () {
    this.auto()
  },
  methods: {
    auto () {
      this.timer = setInterval(() => {
        this.curpage++
        if (this.curpage >= this.banners.length) {
          this.curpage = 0
        }
      }, 3000)
    },
    prev () {
      clearInterval(this.timer)
      this.curpage--
      if (this.curpage < 0) {
        this.curpage = this.banners.length - 1
      }
      this.auto()
    },
    next () {
      clearInterval(this.timer)
      this.curpage++
      if (this.curpage >= this.banners.length) {
        this.curpage = 0
      }
      this.auto()
    }
  }

}
</script>
<style lang="scss">
.btns {
  padding-top: 400px;
}
.slide {
  position: absolute;
  width: 800px;
  height: 200px;
  img {
    max-width: 800px;
  }
}
.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: all 1s;
}
.fadeIn-enter,
.fadeIn-leave-to {
  opacity: 0;
}
.fadeIn-enter {
  transform: translate3d(100%, 0, 0);
}
.fadeIn-leave-to {
  transform: translate3d(-100%, 0, 0);
}
</style>
