<template>
  <div class="tabsCss">
    <van-tabs
      color="#33495E"
      title-active-color="#33495E"
      title-inactive-color="#A8A8A8"
      swipeable
      animated
    >
      <van-tab title="出勤">
        <div class="tag">
          <van-tag round type="success" size="large">
            <van-icon name="success"/>
            上班已打卡
          </van-tag>
          <van-tag round type="danger" size="large">
            <van-icon name="cross"/>
            下班未打卡
          </van-tag>
        </div>
        <div class="attendance" ref="attendancePie" :style="{width: '300px', height: '220px'}"></div>
        <div class="timeRemaining">
          <span>调休假剩余：24小时</span><span>年休假剩余：8小时</span>
        </div>
      </van-tab>
      <van-tab title="账户">
        <div class="box">
          <div class="main">
            <div>
            <span style="color: #5c5c5c; font-weight: bold; font-size: 30px;">13<span
              style="font-size: 20px">￥</span></span>
              <br>
              <span>昨日消费</span>
            </div>
            <div>
              <span style="color: #000000; font-weight: bold; font-size: 40px; line-height: 40px">1025<span
                style="font-size: 25px">￥</span></span>
              <br>
              <span>余&nbsp;&nbsp;额</span>
            </div>
            <div>
            <span style="color: #5c5c5c; font-weight: bold; font-size: 30px">15<span
              style="font-size: 20px">￥</span></span>
              <br>
              <span>今日消费</span>
            </div>
          </div>
          <div style="margin-top: 20px; text-align: center">
            <span>剩余代取：<span style="font-size: 20px">255￥</span></span>
          </div>
        </div>
      </van-tab>
      <van-tab title="个人">
        <div class="infoCard">
          <van-image
            fit="cover"
            :src="url"
          />
          <span style="font-weight: bold; font-size: 20px; letter-spacing: 5px;">个人信息</span>
          <br>
          <span>工号：14184</span>
          <br>
          <span>部门：信息部</span>
          <br>
          <span>科室：工业互联室</span>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import imgURL from './../../../assets/images/jane-doe-500.jpg'

  export default {
    data() {
      return {
        url: imgURL,
      }
    },
    mounted() {
      setTimeout(() => {
        this.drawECharts();
      }, 1)
    },

    methods: {
      drawECharts() {
        const myCharts = this.$echarts.init(this.$refs.attendancePie);
        let options = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'horizontal',
            data: ['剩余', '正常', '异常', '请假']
          },
          series: [
            {
              name: '数据',
              type: 'pie',
              radius: ['40%', '60%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                {value: 335, name: '剩余'},
                {value: 310, name: '正常'},
                {value: 234, name: '异常'},
                {value: 135, name: '请假'},
              ]
            }
          ]
        };
        myCharts.setOption(options);
      }
    }
  }
</script>

<style lang="scss">
  .tabsCss {

    .van-tabs__nav {
      background: none;
      font-weight: bold;

      .van-tab {
        font-size: 16px;
      }

      .van-tab--active {
        font-weight: bold;
      }
    }

    .van-tabs__content--animated {
      padding: 8px;
      .van-tab__pane-wrapper {
        background: #FFFFFF;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 8px 12px #ebedf0;

        .tag {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
        }

        .attendance {
          margin: 15px auto 0 auto;
        }

        .timeRemaining {
          display: flex;
          justify-content: space-around;
          margin: -25px 0 10px 0;
        }

        .box {
          width: 100%;
          padding: 20px 10px 20px 10px;

          .main {
            display: flex;
            justify-content: space-around;
            align-items: flex-end;
            text-align: center;

            span:first-child {
              color: #3498db;
            }

            div {
              span:first-child {
                letter-spacing: -5px;
                color: #a82525;
              }
            }
          }
        }

        .infoCard {
          text-align: center;
        }
      }
    }


  }
</style>
