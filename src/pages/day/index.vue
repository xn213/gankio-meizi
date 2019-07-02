<template>
  <div class="day-page">
    <swiper :options='swiperOption'>
      <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">
        <v-day :data='slide'></v-day>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getSwiperData } from 'api'
import vDay from 'components/v-day'
import { TAB_NAME } from 'const'
export default {
  name: 'day',
  components: {
    vDay,
    swiper,
    swiperSlide
  },
  data(){
    return {
      swiperSlides:[],
      TAB_NAME: [],
      playPageShow: false,
      blurBgShow: false,
      rankshow: true,
      routerViewAnimation: 'page-slide',
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationBulletRender(swiper, index, className) {
          return `<div class="${className} swiper-pagination-bullet-custom">${TAB_NAME[index]}</div>`
        }
      }
    }
  },
  created(){
    this.$store.commit('UPDATE_ISLOADINGSHOW', true)
    this.getSwiper()
  },
  methods: {
    async getSwiper(){
      let res = await getSwiperData()
      this.swiperSlides = res.data.results
      this.$nextTick(() => {
        this.$store.commit('UPDATE_ISLOADINGSHOW', false)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .swiper-item {
    height: 100%;
  }
  .swiper-pagination-bullet-custom {
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    text-align: center;
    line-height: 50px;
    color: #999;
    border-radius: 0 !important;
    background: #fff !important;
    opacity: 1 !important;
  }
  .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
    color: #03a9f4;
    background: #03a9f4;
    font-size: 20px

  }
  .swiper-pagination{
    top:0;
    height:50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width:100%;
  }
</style>
