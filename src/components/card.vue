<template>
  <div class="card">
    <img class="img" v-lazy="data.images ? data.images[0]+'?imageView2/0/w/>200' : null">
    <div class="card-content">
      <div class="desc">{{ data.desc }}</div>
      <div class="card-content-bottom">
        <div class="who">{{ data.who }}</div>
        <div class="time">2113-21-13</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-card',
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 100%;
  max-height: 213px;
  overflow: hidden;
  margin-bottom: 23px;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(34, 25, 25, .4);
  .img {
    width: 100%;
    padding-bottom: 100%;
  }
  &-content {
    width: 100%;
    height: auto;
    padding: 10px 5%;
    box-sizing: border-box;
    color: #fff;
    background-color: #b45dea;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    .desc {
      width: 100%;
      height: auto;
      text-align: left;
      font-size: 16px;
      line-height: 16px;
      word-wrap: break-word;
    }
    &-bottom {
      width: 100%;
      font-size: 14px;
      line-height: 28px;
      display: flex;
      .who {
        flex: 1;
        text-align: left;
      }
      .time {
        flex: 1;
        text-align: right;
      }
    }
  }
}
</style>
