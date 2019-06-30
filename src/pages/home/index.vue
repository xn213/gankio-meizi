<template>
  <div class="home" v-infinite-scroll='loadMore' infinite-scroll-disabled='infiniteLoading' infinite-scroll-distance='10'>
    <div class="welfare">
      <figure v-show='leftData.length > 0'
        v-for="(data,index) in leftData"
        @click="showDetail(data.createdAt)"
        :key="index">
        <v-img :imgUrl='data.url'></v-img>
      </figure>
    </div>
    <div class="welfare">
      <figure v-show='rightData.length > 0'
        v-for="(data,index) in rightData"
        @click="showDetail(data.createdAt)"
        :key="index">
        <v-img :imgUrl='data.url'></v-img>
      </figure>
    </div>
    <v-detail ref="detail" :time='time' :detailData='detailData'></v-detail>
  </div>
</template>

<script>
import { getMM, getDetail } from 'api'
import { objDate } from 'utils'
import vImg from 'components/lazyimg'
import vDetail from './v-detail'
export default {
  name: 'home',
  data(){
    return {
      page: 1,
      leftData: [],
      rightData: [],
      infiniteLoading: false,
      detailData: {},
      time: ''
    }
  },
  components: {
    vImg, vDetail
  },
  created(){
    this.getmm()
  },
  methods: {
    async getmm(){
      this.$store.commit('UPDATE_ISLOADINGSHOW', true)
      // this.page = 6 // 部署到 github gh-pages 后跨域 只能请求 2
      let mm = await getMM(this.page)
      let data = mm.data.results
      let left = data.filter((data, i) => {
        return (i + 1) % 2 === 1
      })
      let right = data.filter((data, i) => {
        return (i + 1) % 2 !== 1
      })
      this.leftData = this.leftData.concat(left)
      this.rightData = this.rightData.concat(right)
      this.infiniteLoading = false
      // $nextTick() 在 dom 重新渲染完成后执行
      this.$nextTick(() => {
        this.$store.commit('UPDATE_ISLOADINGSHOW', false)
      })
      console.log('page: ', this.page, 'data: ', data)
    },
    loadMore(){
      this.infiniteLoading = true
      this.page++
      // this.page > 2 ? this.page = 1 : this.page++
      this.getmm()
    },
    async showDetail(time){
      this.time = time
      this.$store.commit('UPDATE_ISLOADINGSHOW', true)
      let timeObj = objDate(this.time)
      let res = await getDetail(timeObj)
      // console.log(res);
      let data = res.data.results
      this.detailData = data[0]
      this.$refs.detail.show()
      this.$nextTick(() => {
        this.$store.commit('UPDATE_ISLOADINGSHOW', false)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    display: flex;
    .welfare {
      width: 50%;
      column-width: 200px;
      max-width: 1100px;
      figure {
        width: 95%;
        background: #fefefe;
        border: 2px solid #fcfcfc;
        box-shadow: 0 1px 2px rgba(34, 25, 25, .4);
        margin: 0 2px 15px;
        display: inline-block;
        -webkit-column-break-inside: avoid;
        z-index: 11;
        cursor: pointer;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
</style>
