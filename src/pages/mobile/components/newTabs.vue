<template>
  <div class="tabsCss">
    <div class="tab-wrap">

      <!-- active tab on page load gets checked attribute -->
      <input type="radio" id="tab1" name="tabGroup1" class="tab" checked>
      <label for="tab1">出勤</label>

      <input type="radio" id="tab2" name="tabGroup1" class="tab">
      <label for="tab2">账户</label>

      <input type="radio" id="tab3" name="tabGroup1" class="tab">
      <label for="tab3">个人</label>

      <div class="tab__content">
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
        <div class="attendance" ref="attendancePie" :style="{width: '300px', height: '300px'}"></div>
        <div class="timeRemaining">
          <span>调休假剩余：24小时</span><span>年休假剩余：8小时</span>
        </div>
      </div>

      <div class="tab__content">
        <div class="account">
          <div class="main">
            <div>
              <span style="color: #5c5c5c; font-weight: bold; font-size: 30px;">13<span style="font-size: 20px">￥</span></span>
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
              <span style="color: #5c5c5c; font-weight: bold; font-size: 30px">15<span style="font-size: 20px">￥</span></span>
              <br>
              <span>今日消费</span>
            </div>
          </div>
          <div style="margin-top: 20px;">
            <span>剩余代取：<span style="font-size: 20px">255￥</span></span>
          </div>
        </div>
      </div>

      <div class="tab__content">
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
      </div>

    </div>

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
            radius: ['60%', '80%'],
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
</script>

<style lang="scss">
  $max-tab-count: 5;
  $tab-wrap-border-radius: 15px;

  .tabsCss {
    margin: 8px 8px 0 8px;

    .tab-wrap {
      transition: 0.3s box-shadow ease;
      border-radius: $tab-wrap-border-radius;
      max-width: 100%;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      list-style: none;
      background-color: #fff;
      //box-shadow: 0 5px 15px rgba(0, 0, 0, 0.22), 0 3px 6px rgba(0, 0, 0, 0.24);
    }

    .tab {
      display: none;
      @for $i from 1 through $max-tab-count {
        &:checked:nth-of-type(#{$i}) ~ .tab__content:nth-of-type(#{$i}) {
          opacity: 1;
          transition: 0.5s opacity ease-in, 0.8s transform ease;
          position: relative;
          top: 0;
          z-index: 100;
          transform: translateY(0px);
          text-shadow: 0 0 0;
        }
      }

      &:first-of-type:not(:last-of-type) + label {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      &:not(:first-of-type):not(:last-of-type) + label {
        border-radius: 0;
      }

      &:last-of-type:not(:first-of-type) + label {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      &:checked + label {
        background-color: #fff;
        box-shadow: 0 -1px 0 #fff inset;
        cursor: default;
      }

      + label {
        box-shadow: 0 -1px 0 #eee inset;
        border-radius: $tab-wrap-border-radius $tab-wrap-border-radius 0 0;
        cursor: pointer;
        display: block;
        text-decoration: none;
        color: #333;
        flex-grow: 3;
        text-align: center;
        background-color: #ecedef;
        user-select: none;
        transition: 0.3s background-color ease, 0.3s box-shadow ease;
        height: 50px;
        box-sizing: border-box;
        padding: 15px;
        font-weight: bold;
      }

      &__content {
        height: 440px;
        box-sizing: border-box;
        padding: 10px 25px;
        background-color: transparent;
        position: absolute;
        width: 100%;
        z-index: -1;
        opacity: 0;
        left: 0;
        transform: translateY(-3px);
        border-radius: $tab-wrap-border-radius;

        .tag {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
        }

        .attendance {
          margin: 20px auto 0 auto;
        }

        .timeRemaining {
          display: flex;
          justify-content: space-around;
        }

        .account {
          /*height: 100%;*/
          text-align: center;

          .main {
            display: flex;
            justify-content: space-around;
            align-items: flex-end;
            margin-top: 40%;

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
          //box-shadow: 0 0 3rem -1rem rgba(0,0,0,0.5);
          text-align: center;
        }
      }
    }
  }

</style>
