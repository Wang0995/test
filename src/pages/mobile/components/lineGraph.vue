<template>
  <div class="lineGraphCss">
    <div class="title">隐患详情</div>
    <div class="divider"></div>
    <div class="lineGraph" ref="lineGraph"></div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
      }
    },
    mounted() {
      this.drawECharts();
    },

    methods: {
      drawECharts() {
        const myCharts = this.$echarts.init(this.$refs.lineGraph);
        let option = {
          title: {
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            top: 10,
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
          },
          grid: {
            left: '0%',
            right: '4%',
            bottom: '2%',
            containLabel: true
          },
          toolbox: {

          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        };

        myCharts.setOption(option);
      }
    }
  }
</script>

<style lang="scss">
  .lineGraphCss {
    background: #ffffff;
    margin: 0 8px 8px 8px;
    border-radius: 15px;
    color: #33495E;
    height: fit-content;
    box-shadow: 0 8px 12px #ebedf0;
    padding: 0 10px;

    .title {
      font-weight: bold;
      font-size: 18px;
      padding: 10px 10px 0px 0px;
    }

    .divider {
      box-sizing: border-box;
      height: 2px;
      width: 50%;
      background: linear-gradient(to right, #33495E, #FFFFFF);
    }

    .lineGraph {
      width: 100%;
      height: 320px;
    }
  }
</style>
