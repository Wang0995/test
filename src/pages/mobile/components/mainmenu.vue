<template>
  <div class="mainmenuCss">
    <div class="title">
      <span>我的资讯</span>
      <a style="font-size: 15px; margin-top: 7px" @click="showEditMenu">编辑></a>
    </div>
    <van-popup
      v-model="show"
      position="right"
      :style="{ height: '100%', width: '100%' }"
      @open="beforeOpen"
      closeable
      close-icon="arrow"
      close-icon-position="top-right"
    >
      <div class="title" style="padding: 10px">自定义订阅</div>
      <div class="divider">我的</div>

    </van-popup>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
      }
    },
    methods: {
      showEditMenu() {
        this.show = true
      },
      beforeOpen() {
        this.$toast('弹出前调用');
      }
    }
  }
</script>

<style lang="scss">
  .mainmenuCss {
    margin: 16px 8px 0px 8px;

    .title {
      color: #33495E;
      font-weight: bold;
      font-size: 20px;
      display: flex;
      justify-content: space-between;
    }

    .divider {
      color: #c8c9cc;
    }
  }
</style>
