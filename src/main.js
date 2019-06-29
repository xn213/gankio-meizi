import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/index.scss'

import infiniteScroll from 'vue-infinite-scroll'
import VueLazyload from 'vue-lazyload' // 图片懒加载

Vue.config.productionTip = false

Vue.use(infiniteScroll)
Vue.use(VueLazyload, {
  err: require('./assets/404.png'),
  loading: require('./assets/loading.gif'),
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
