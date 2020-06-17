<template>
  <div class="document-echarts-scss">
    <div>
      <span>Vue项目中使用Echarts</span><br>
      <span>1、全局引用或按需引用</span><br>
      <span>2、需要在生命周期函数mounted中实例化，防止组件未被挂载报错</span><br>
      <span>3、主题可以更换</span>
      <span></span>
    </div>
    <div class="echarts-part">
      <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
      <div id="myCharts" ref="myCharts" :style="{width: '300px', height: '300px'}"></div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted() {
            this.drawLine();
            //以下三步即可完成echarts的初始化使用,代码注释的详解别忘了看看
            const myCharts = this.$echarts.init(this.$refs.myCharts, 'shine');
            let options = {
                title: {
                    text: '未来一周气温变化',   //图表顶部的标题
                    subtext: '纯属虚构',    //副标题
                    paddingBottom: 20,
                },
                tooltip: {   //鼠标悬浮框的提示文字
                    trigger: 'axis'
                },
                legend: {
                    data: ['最高气温', '最低气温'],
                    top: 40,
                },
                xAxis: [{  //x轴坐标数据
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }],
                yAxis: [{   //y轴坐标数据
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                }],
                series: [  //驱动图表生成的数据内容数组，几条折现，数组中就会有几个对应对象，来表示对应的折线
                    {
                        name: "最高气温",
                        type: "line",  //pie->饼状图  line->折线图  bar->柱状图
                        data: [11, 11, 15, 13, 12, 13, 10],
                    },
                    {
                        name: "最低气温",
                        type: "line",  //pie->饼状图  line->折线图  bar->柱状图
                        data: [1, -2, 2, 5, 3, 2, 0],
                    }
                ]
            };
            myCharts.setOption(options);
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'), 'shine')
                // 绘制图表
                myChart.setOption({
                    title: {text: '销量'},
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
            }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
  .document-echarts-scss {
    .echarts-part {
      display: flex;
    }
  }
</style>
