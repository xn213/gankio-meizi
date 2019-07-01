<template>
  <transition name="fade">
    <div class="detail" v-show="showDetail">
      <header class="header">
        <div class="back" @click="hideDetail">
          <span class="iconfont icon-left"></span>
        </div>
        <div class="title">{{ detailData.publishedAt || time | formatTime }}</div>
      </header>
      <section class="section">
        <v-day ref="day" :data='detailData'></v-day>
      </section>
    </div>
  </transition>
</template>

<script>
import { formatDate } from 'utils'
import BScroll from 'better-scroll'
import vDay from './v-day'
export default {
  name: 'v-detail',
  props: {
    time: String,
    detailData: Object
  },
  components: { vDay },
  data(){
    return {
      showDetail: false
    }
  },
  mounted(){
    this.scroll=new BScroll(this.$refs.day, { mouseWheel: true, click: true, tap: true })
  },
  methods: {
    show(){
      this.showDetail = true
      this.$nextTick(() => {
        if(!this.scroll) {
          this.scroll = new BScroll(this.$el, {
            click: true
          })
        }else {
          this.scroll.refresh()
        }
        this.$refs.day.clearStyle()
      })
    },
    hideDetail(){
      this.showDetail = false
    }
  },
  filters: {
    formatTime(time) {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2113;
  background-color: #fff;
  &.fade-enter-active, &.fade-leave-active {
    transition: all .2s linear;
    transform: translate3d(0, 0, 0);
  }
  &.fade-enter, &.fade-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .header {
    width: 100%;
    min-height: 50px;
    line-height: 50px;
    background-color: #b45dea;
    color: #fff;
    text-align: center;
    .back {
      position: fixed;
      font-weight: 600;
      padding-left: 21px;
    }
  }
  .section {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
}
</style>

