<template>
  <div class="menu">
    <div class="menu-list" :class="{'show': show}">
      <div class="menu-header">
        <a href="https://xn213.github.io/fe-notes" title='余生' target="_blank">
          <img class="menu-avatar" src="https://avatars0.githubusercontent.com/u/49441268?s=460&v=4" alt="github.com/xn213">
        </a>
        <div class="menu-title">xn213</div>
      </div>
      <div class="menu-ul">
        <div v-for="(menu, index) in menus"
             :key="index"
             @click="updateHeader(MENU_CONVERT[menu], menu)">
          <router-link class="icon-quanbu iconfont item border-1px" :to='menu'>
            <div class="menu-icon">
              <i class="iconfont" :class="'icon-' + menu"></i>
            </div>
            <div class="menu-text">{{ MENU_CONVERT[menu] }}</div>
            <div class="menu-new" v-show="menu === 'day' && news > 0">
              <span>5</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="menu-other"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { MENU_CONVERT } from 'const'
export default {
  name: 'v-menu',
  props: {
    show: Boolean
  },
  data() {
    return {
      MENU_CONVERT
    }
  },
  computed: {
    ...mapState([
      'menus', 'news'
    ])
  },
  methods: {
    updateHeader(title, menu) {
      this.$store.commit('UPDATE_TITLE', title)
      this.$store.commit('UPDATE_ISMENUSHOW')
      if( menu === 'day') {
        this.$store.commit('UPDATE_NEWS')// 显示新闻条数清零方法
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  .show {
    transform: translateX(250px);
  }
  &-list {
    width: 250px;
    background-color: #22262a;
    color: #313131;
    transition: all .3s ease;
    position: fixed;
    top: 0;
    left: -250px;
    bottom: 0;
    z-index: 99;
    .menu-header {
      width: 100%;
      height: 180px;
      background-color: #262d30;
      a {
        .menu-avatar {
          width: 40%;
          height: auto;
          border-radius: 50%;
          margin: 21px 75px;
        }
      }
      .menu-title {
        font-size: 21px;
        color: #b45dea;
        line-height: 28px;
        font-weight: 500;
        text-align: center;
      }
    }
    .menu-ul {
      margin: 0;
      padding: 0;
      overflow: hidden;
      .item {
        display: block;
        padding: 10px 13px;
        font-size: 14px;
        line-height: 15px;
        text-align: left;
        text-indent: 1px;
        color: #a6adb3;
        font-weight: 700;
        border-top: 1px solid #40474a;
        .menu-icon {
          display: inline-block;
          width: 30px;
          height: 30px;
          background-color: #383c40;
          border-radius: 50%;
          vertical-align: top;
          text-align: center;
          .iconfont {
            color: #999;
            line-height: 30px;
            font-weight: 700;
          }
        }
        &.router-link-active {
          color: #01aef3;
          .menu-icon {
            background-color: #01aef3;
            .iconfont {
              color: #fff;
            }
          }
        }
        .menu-text {
          display: inline-block;
          font-size: 15px;
          line-height: 32px;
          vertical-align: top;
          margin-left: 10px;
          font-weight: 700;
        }
        .menu-new {
          // display: inline-block;
          display: block;
          width: 30px;
          height: 30px;
          background-color: #d81229;
          border-radius: 50%;
          // vertical-align: top;
          text-align: center;
          float: right;
          span {
            color: #fff;
            font-size: 15px;
            line-height: 30px;
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>
