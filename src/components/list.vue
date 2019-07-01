<template>
  <div class="list" v-infinite-scroll='loadMore' infinite-scroll-disabled='busy' infinite-scroll-distance='100'>
    <a v-for='(data, index) in datas' :key="index" :href="data.url" target="view_window">
      <v-card :data='data'></v-card>
    </a>
  </div>
</template>

<script>
import vCard from './card'
import { getListData } from 'api'
export default {
  name: 'v-list',
  props: {
    type: String
  },
  data(){
    return {
      datas: [],
      page: 1,
      busy: false
    }
  },
  components: { vCard },
  methods: {
    async getLists(){
      this.$store.commit('UPDATE_ISLOADINGSHOW', true)
      let res = await getListData(this.type, this.page)
      this.datas= this.datas.concat(res.data.results)
      this.busy = false
      this.$nextTick(() => {
        this.$store.commit('UPDATE_ISLOADINGSHOW', false)
      })
    },
    loadMore(){
      this.busy = true
      this.getLists()
      this.page++
    }
  }
}
</script>
<style lang="scss" scoped>
.list {
  padding: 13px;
}
</style>

