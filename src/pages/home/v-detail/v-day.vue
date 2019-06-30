<template>
  <div class="day" rel='dom'>
    <h1>{{ data.title }}</h1>
    <div class="day-content" v-html="data.content"></div>
  </div>
</template>

<script>
import vImg from 'components/lazyimg'
export default {
  name: 'v-day',
  props: {
    data: Object
  },
  components: { vImg },
  created(){
    this.clearStyle()
  },
  methods: {
    clearStyle(){
      this.$nextTick(() => {
        let tags = this.$el.getElementsByTagName('img')
        for( let i = 0, len = tags.length; i < len; i++) {
          tags[i].removeAttribute('style')
        }
      })
    }
  }
}
</script>

<style lang="scss">
.day ul img,
.day h2,
.day p:nth-last-child(2),
.day p:nth-last-child(1),
.day [target=_blank] img,
.day embed {
  display: none;
}
.day {
  padding: 10px;
  h1 {
    color: #b45dea;
    line-height: 21px;
    margin:3px 0 13px;
  }
  &-content {
    // img {
    //   width: 70vw;
    // }
    p {
      img {
        width: 100%;
      }
    }
    h1{
      text-align: left;
      font-weight: 700;
      font-size: 16px;
      line-height: 32px;
      margin: 10px 0;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
      white-space: normal !important;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    h3 {
      color: #000000;
      text-align: left;
      padding: 10px 0;
      font-size: 16px;
      font-weight: 700;
    }
    ul {
      color: #000000;
      text-align: left;
      padding-left: 10px;
      font-size: 14px;
      font-weight: 400;
      li{
        line-height: 20px;
        padding: 5px 0;
        -webkit-animation-name: bounceInRight;
        animation-name: bounceInRight;
      }
    }
  }
}
</style>