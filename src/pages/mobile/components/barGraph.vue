<template>
  <div class="barGraphCss">
    <div class="title">隐患详情</div>
    <div class="divider"></div>
    <div class="barGraph" ref="barGraph"></div>
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
        const myCharts = this.$echarts.init(this.$refs.barGraph);
        let option = {
          legend: {
            top: 20,
          },
          grid : {
            left: '0%',
            right: '2%',
            bottom : '2%',
            containLabel : true     //grid 区域是否包含坐标轴的刻度标签
          },
          tooltip: {},
          dataset: {
            source: [
              ['product', '2015', '2016', '2017'],
              ['Matcha', 43.3, 85.8, 93.7],
              ['Milk', 83.1, 73.4, 55.1],
              ['Cheese', 86.4, 65.2, 82.5],
              ['Walnut', 72.4, 53.9, 39.1]
            ]
          },
          xAxis: {type: 'category'},
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'}
          ]
        };
        myCharts.setOption(option);
      }
    }
  }
</script>

<style lang="scss">
  .barGraphCss {
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

    .barGraph {
      width: 100%;
      height: 280px;
    }
  }
</style>
