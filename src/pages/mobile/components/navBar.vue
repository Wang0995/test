<template>
  <div class="navBarCss">
    <van-nav-bar>
      <template #left>
        <van-icon name="wap-nav" size="30" color="#33495E" style="font-weight: bold"/>
      </template>
      <template #right>
        <van-image
          round
          width="30px"
          height="30px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="info"></div>
      </template>
      <template #title>
        <span style="color: #33495E; font-size: 18px; font-weight: bold">CSSC | SWS</span>
      </template>
    </van-nav-bar>
  </div>
</template>

<style lang="scss">
  .navBarCss {

    .van-nav-bar {
      position: relative;
      top: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0);
      height: 60px;

      .info {
        width: 8px;
        height: 8px;
        background: red;
        position: absolute;
        top: 15px;
        right: 15px;
        border-radius: 50%;
      }
    }

  }
</style>
