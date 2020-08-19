<template>
  <div style="background: #f7f8fa; min-height: 100%; padding-top: 50px">
    <div class="ask-for-leave-div">
      <div class="data-picker" @click="showDatePicker = true">
        <span>{{year}}</span><span>年</span><span>{{month}}</span><span>月</span>
        <van-icon :style="{ transform: transform }" name="arrow-down"/>
      </div>
      <div class="eCharts-div">
        <div class="pie" id="clockDataCharts" :style="{width: '100%', height: '310px'}"></div>
      </div>
      <div class="data-div">
        <div class="mark">今日</div>
        <div class="details"><span>上班打卡时间</span><span>07:37</span></div>
        <div class="details"><span>下班打卡时间</span><span>19:24</span></div>
      </div>
      <div class="data-div">
        <div class="mark">假期余额</div>
        <div class="details"><span>额定年休</span><span>8天</span><span>可用年休</span><span>3天</span></div>
        <div class="details"><span>已用年休</span><span>5天</span><span>剩余调休</span><span>2天</span></div>
      </div>
    </div>
    <!--    日期选择框   -->
    <van-popup v-model="showDatePicker" position="bottom" style="height: fit-content">
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        title="选择年月"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @cancel="showDatePicker = false"
        @confirm="confirmDate"
      />
    </van-popup>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        minDate: new Date(2018, 0, 1),
        maxDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        currentDate: new Date(),
        showDatePicker: false,
        transform: 'rotate(0deg)',
        clockDataOptions: {
          title: {
            text: '当月出勤情况',
            left: 'center',
            top: 0,
            textStyle: {
              color: '#606266'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{c}天'
          },
          dataset: {
            source: [
              ['双未打卡', 1],
              ['单次打卡', 3],
              ['请假', 2],
              ['正常出勤', 15],
            ]
          },
          series: [{
            type: 'pie',
            radius: 100,
            top: 20,
            label: {
              fontWeight: 'bold',
              fontSize: '14'
            }
          }],
          color: [
            '#c12e34','#e6b600','#0098d9','#2b821d',
            '#005eaa','#339ca8','#cda819','#32a487'
          ],
          //color: ['rgb(230,179,61)', 'rgb(6,128,67)', 'rgb(161,23,21)', 'rgb(39,72,98)']
        }
      };
    },
    mounted() {
      this.drawClockData()
    },
    methods: {
      formatter(type, val) {
        if (type === 'year') {
          return `${val}年`;
        } else if (type === 'month') {
          return `${val}月`;
        }
        return val;
      },
      confirmDate(val) {
        this.year = val.getFullYear()
        this.month = val.getMonth() + 1
        this.showDatePicker = false
      },
      drawClockData(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('clockDataCharts'))
        // 绘制图表
        myChart.setOption(this.clockDataOptions);
      }
    },
    watch: {
      showDatePicker: function (val) {
        val ? this.transform = 'rotate(180deg)' : this.transform = 'rotate(0deg)'
      }
    }
  }
</script>

<style scoped>
  .ask-for-leave-div {
    color: #606266;
    position: relative;
    width: 100%;
    background: #f7f8fa;
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  }

  .data-picker {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    background: #ffffff;
    box-shadow: 0 8px 12px #ebedf0;
    margin: 0 20px;
    border-radius: 20px;
    border: 1px solid #e8e8e8;
    padding: 7px 0;
    transition: all 0.2s ease-in-out;
  }

  .data-picker:active {
    background: #efefef;
  }

  .data-picker > span:not(:last-child) {
    margin-right: 20px;
  }

  .data-picker .van-icon {
    position: absolute;
    right: 50px;
    transition: all 0.2s ease-in-out;
  }

  .eCharts-div {
    margin-top: 20px;
  }

  .data-div {
    padding: 0px 20px 20px 20px;
  }

  .mark {
    font-size: 16px;
    font-weight: bold;
    border-bottom: 1px solid #dddddd;
    padding-bottom: 10px;
    color: #606266;
  }

  .details {
    margin: 10px 0;
  }

  .details span:nth-child(2n-1) {
    color: #99a9bf;
    margin-right: 15px;
  }

  .details span:nth-child(2n) {
    color: #606266;
  }

  .details span:nth-child(2) {
    margin-right: 30px;
  }

</style>
