import Vue from 'vue'
import Vuex from 'vuex'

import * as ct  from 'const'

Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  'headerTitle': '福利',
  'menus': ct.NAME_TITLE,
  'isMenuShow': false,
  'isLoadingShow': false,
  'news': 5
}

// 创建一个对象保存我们要写的 mutation 函数
const mutations = {
  // 放置状态变更函数
  UPDATE_TITLE(state, title) {
    console.log(title)
    state.headerTitle = title
  },
  UPDATE_ISLOADINGSHOW(state, data) {
    state.isLoadingShow = data
  },
  UPDATE_ISMENUSHOW(state) {
    state.isMenuShow = !state.isMenuShow
  },
  UPDATE_NEWS(state) {
    state.news = 0;
  }
}

const store = new Vuex.Store({
  state,
  mutations,
})

export default store