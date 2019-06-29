<template>
  <div class="home" v-infinite-scroll='loadMore' infinite-scroll-disabled='loading' infinite-scroll-distance='10'>
    <div class="welfare">
      <figure v-show='leftData.length > 0' v-for="(data,index) in leftData" :key="index" >
        <v-img :imgUrl='data.url'></v-img>
      </figure>
    </div>
    <div class="welfare">
      <figure v-show='rightData.length > 0' v-for="(data,index) in rightData" :key="index" >
        <v-img :imgUrl='data.url'></v-img>
      </figure>
    </div>
  </div>
</template>

<script>
import { getMM } from 'api'
import vImg from 'components/lazyimg'
export default {
  name: 'home',
  data(){
    return {
      page: 1,
      leftData: [],
      rightData: [],
      loading: false,
    }
  },
  components: {
    vImg
  },
  created(){
    this.getmm()
  },
  methods: {
    async getmm(){
      this.page = 2 // 部署到 github gh-pages 后跨域 只能请求 2
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
      this.loading = false
      console.log('page: ', this.page, 'data: ', data)
    },
    loadMore(){
      this.loading = true
      this.page > 2 ? this.page = 1 : this.page++
      this.getmm()
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
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
