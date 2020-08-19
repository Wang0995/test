<template>
  <div class="menuCss">
    <div class="title">
      <span>常用应用</span>
    </div>
    <div class="apps">
      <div class="doubleRow">
        <div class="row">
          <div>
            <van-icon name="goods-collect"/>
            <span>个人日程</span>
          </div>
          <div>
            <van-icon name="photograph"/>
            <span>会议签到</span>
          </div>
          <div>
            <van-icon name="printer"/>
            <span>待办事项</span>
          </div>
          <div>
            <van-icon name="setting"/>
            <span>内部传阅</span>
          </div>
          <div>
            <van-icon name="phone-circle" />
            <span>消息通知</span>
          </div>
        </div>
        <div class="row" style="margin-top: 5px">
          <div>
            <van-icon name="photo" />
            <span>我的相机</span>
          </div>
          <div>
            <van-icon name="service"/>
            <span>社区服务</span>
          </div>
          <div>
            <van-icon name="alipay"/>
            <span>支付软件</span>
          </div>
          <div>
            <van-icon name="graphic"/>
            <span>我的任务</span>
          </div>
          <div>
            <van-icon name="more"/>
            <span>更多应用</span>
          </div>
        </div>
      </div>
      <!--      左右滚动效果        -->
      <!--      <div class="scroll">-->
      <!--        <van-icon name="goods-collect"/>-->
      <!--        <van-icon name="photograph"/>-->
      <!--        <van-icon name="printer"/>-->
      <!--        <van-icon name="setting"/>-->
      <!--        <van-icon name="service"/>-->
      <!--        <van-icon name="alipay"/>-->
      <!--        <van-icon name="graphic"/>-->
      <!--      </div>-->
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

      .doubleRow {
        .row {
          padding: 0 5px;
          display: flex;
          justify-content: space-between;

          >div {
            display: flex;
            flex-direction: column;
            align-items: center;

            span {
              color: #444444;
              font-weight: lighter;
              padding: 5px 0;
              font-size: 15px;
            }
          }
        }

        .van-icon {
          background: #33495E;
          color: white;
          height: 50px;
          width: 50px;
          border-radius: 50%;
        }

        .van-icon::before {
          font-size: 30px;
          line-height: 50px;
          display: flex;
          justify-content: center;
        }
      }

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
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: #ededed;
      border-radius: 5px;

    }
  }
</style>
