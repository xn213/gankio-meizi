<template>
  <div class="header">
    <div class="mask" v-show="isMenuShow" @click="isMaskShow"></div>
    <header :class="{'show': isMenuShow}" @click="isMaskShow">
      <div class="menu-btn">
        <span class="iconfont icon-fenlei" @click.stop="isMaskShow"></span>
      </div>
      <section class="title">{{ headerTitle }}</section>
      <div class="search-btn">
        <span class="iconfont icon-sousuo_sousuo"></span>
      </div>
    </header>
    <v-menu :show='isMenuShow'></v-menu>
  </div>
</template>

<script>
import vMenu from 'components/menu'
import { mapState } from 'vuex'
export default {
  name: 'v-header',
  components: {
    vMenu
  },
  computed: {
    ...mapState([
      'headerTitle', 'isMenuShow'
    ])
  },
  methods: {
    isMaskShow(){
      this.$store.commit('UPDATE_ISMENUSHOW')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  .mask {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 21;
  }
  .show {
    transform: translateX(250px);
  }
  header {
    width: 100%;
    min-height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2113;
    color: #fff;
    background: #b45dea;
    line-height: 50px;
    text-align: center;
    box-shadow: 0 1px 0 rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.1);
    transition: all .3s ease;
    .title {
      width: auto;
      min-height: 50px;
      margin: 0;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      z-index: 2;
      font-size: 16px;
      white-space: nowrap;
      position: absolute;
      left: 100px;
      right: 100px;
      font-weight: 500;
    }
    .menu-btn {
      float: left;
      margin-left: 21px;
      z-index: 213;
      cursor: pointer;
    }
    .search-btn {
      float: right;
      margin-right: 21px;
      z-index: 213;
      cursor: pointer;
    }
    .iconfont {
      font-size: 18px;
      font-weight: 400;
    }
  }
}
</style>

