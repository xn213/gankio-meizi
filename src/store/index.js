import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  'headerTitle': '福利',
  'menuShow': false,
  'loadingShow': false,
  'news': 5
}

const store = new Vuex.Store({
  state
})

export default store