<template>
  <div id="app">
    <v-header></v-header>
    <loading :isLoadingShow="isLoadingShow"></loading>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import loading from 'components/loading'
import vHeader from 'components/header'
import { mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    loading,
    vHeader
  },
  computed: {
    ...mapState([
      'isLoadingShow'
    ])
  }
}
</script>

<style lang='scss'>
  @import url('./theme/reset.css');
  #app {
    width: 100%;
    .content {
      padding-top: 50px;
    }
  }
</style>
