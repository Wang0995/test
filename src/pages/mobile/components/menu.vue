<template>
  <div class="menuCss">
    <div class="title">
      <span>常用应用</span>
    </div>
    <div class="apps">
      <div class="scroll">
        <van-icon name="goods-collect"/>
        <van-icon name="photograph"/>
        <van-icon name="printer"/>
        <van-icon name="setting"/>
        <van-icon name="service"/>
        <van-icon name="alipay"/>
        <van-icon name="graphic"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
  }
</script>

<style lang="scss">
  .menuCss {
    margin: 8px;

    .title {
      color: #33495E;
      font-weight: bold;
      font-size: 20px;
    }

    .apps {
      width: 100%;
      overflow: auto;
      margin: 10px 0 10px 0;

      .scroll {
        white-space: nowrap;

        i:not(:last-child) {
          margin-right: 10px;
        }

        .van-icon {
          background: #33495E;
          color: white;
          height: 55px;
          width: 55px;
          border-radius: 15px;
        }

        .van-icon::before {
          font-size: 35px;
          line-height: 55px;
          display: flex;
          justify-content: center;
        }
      }
    }

    ::-webkit-scrollbar {
      display: none;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: #F13A2F;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      background: #ededed;
      border-radius: 5px;

    }
  }
</style>
