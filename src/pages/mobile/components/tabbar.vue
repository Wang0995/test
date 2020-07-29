<template>
  <div class="tabbarCss">
    <van-tabbar v-model="active" active-color="#33495E" inactive-color="#c8c9cc">
      <van-tabbar-item name="data" icon="wap-home">数据</van-tabbar-item>
      <van-tabbar-item name="apps" icon="bag">应用</van-tabbar-item>
      <van-tabbar-item name="map" icon="map-marked">地图</van-tabbar-item>
      <van-tabbar-item name="mine" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 'data'
      }
    }
  }
</script>

<style lang="scss">
  .tabbarCss {
    .van-tabbar {
      background: rgba(255, 255, 255, 0.99);
    }
  }
</style>

