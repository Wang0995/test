<template>
  <div class="swipeCss">
    <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
      <van-swipe-item>
        <van-image height="200" fit="cover" :src="require('../../../assets/images/senlindahai.jpg')" style="border-radius: 20px"/>
      </van-swipe-item>
      <van-swipe-item>
        <van-image height="200" fit="cover" :src="require('../../../assets/images/shan.jpg')"/>
      </van-swipe-item>
      <van-swipe-item>
        <van-image height="200" fit="cover" :src="require('../../../assets/images/sea.jpg')"/>
      </van-swipe-item>
      <van-swipe-item>
        <van-image height="200" fit="cover" :src="require('../../../assets/images/bridge.jpg')"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style lang="scss">
  .swipeCss {
    margin: 8px;
    border-radius: 15px;
    overflow: hidden;

    .my-swipe .van-swipe-item {
      height: 200px;
      color: #fff;
    }
  }

</style>
