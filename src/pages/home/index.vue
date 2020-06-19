<template>
  <div class="home-css">
    <div class="box">
      <el-row :gutter="0">
        <el-col :span="12">
          <div class="content">
            <div class="textbox">
              <span style="font-size: 45px">{{time.hours}} <span style="font-size: 25px">: {{time.minutes}}</span><span
                style="font-size: 25px">: {{time.seconds}}</span></span>
              <br>
              <span>{{date}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="content">
            <div class="textbox">
              <span style="font-size: 45px"><i class="el-icon-headset"></i></span>
              <br>
              <span>Rising Hope - Tev (prod.by Lisa)</span>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="content pure">
            <div class="textbox">
              <span style="font-size: 45px">16 <span style="font-size: 25px">: 24</span></span>
              <br>
              <span></span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="6">
          <div class="content">
            <div class="textbox">
              <span style="font-size: 45px">{{weather.tem}}&deg;</span>
              <br>
              <span>天气：{{weather.wea}}，空气质量：{{weather.air_level}}，湿度：{{weather.humidity}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="content">
            <div class="textbox">
              <span style="font-size: 45px"><i class="el-icon-location"></i></span>
              <br>
              <span>{{weather.country}} {{weather.city}}，{{weather.countryEn}} {{weather.cityEn}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="content pure">

          </div>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="6">
          <div class="content">
            <div class="textbox">
              <span style="font-size: 25px; line-height: 50px">{{oldHL.yL}}</span>
              <br>
              <span>宜：{{oldHL.yI}}，忌：{{oldHL.jI}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="content">
            <div class="textbox">
              <span style="font-size: 45px">16 <span style="font-size: 25px">%</span></span>
              <br>
              <span>Fat Percentage</span>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="content pure">
            <div class="textbox">
              <span style="font-size: 45px"><i class="el-icon-s-promotion"></i></span>
              <br>
              <span>新闻：
                <a :href="news.firstUrl" target="_blank">{{news.firstTitle}}</a>
                <el-popover
                  placement="right-end"
                  width="400"
                  trigger="click">
                  <div class="newsList">
                    <a v-for="item in newsList" :href="item.url" target="_blank">
                      {{item.title}}
                    </a>
                  </div>
                  <a href="#" slot="reference">更多...</a>
                </el-popover>
              </span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="12">
          <div class="content pure"></div>
        </el-col>
        <el-col :span="6">
          <div class="content pure"></div>
        </el-col>
        <el-col :span="6">
          <div class="content pure"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        date: '',
        time: '',
        weather: '',
        news: {
          firstTitle: '',
          firstUrl: '',
        },
        newsList: '',
        oldHL: {
          yL: '',
          jI: '',
          yI: '',
        }
      }
    },
    created() {

    },
    mounted() {
      const _this = this;        //声明一个变量指向Vue实例this，保证作用域一致
      this.getDate();
      this.timer = setInterval(function () {
        _this.getTime();
      }, 1000);
      this.getWeather();
      //this.getSportsNews();
      //this.getHL();
      this.getStock();
    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
    methods: {
      getDate() {
        this.date = new Date();
      },
      getTime() {
        let time = new Date();
        this.time = {
          hours: time.getHours(),
          minutes: time.getMinutes(),
          seconds: time.getSeconds(),
        };
      },
      getWeather() {
        const _this = this;
        this.$axios.get('https://www.tianqiapi.com/api/?version=v6&appid=89736532&appsecret=HNw4pM0K').then(function (reponse) {
          _this.weather = reponse.data;
        }).catch(() => {
        });
      },
      getSportsNews() {
        const _this = this;
        //跨域解决方案
        this.$axios.get('http://v.juhe.cn/toutiao/index?type=tiyu&key=949553d21151a1fd24e1f98e75bbc7f6').then(function (reponse) {
          console.log(list)
          const list = reponse.data.result.data;
          _this.news.firstTitle = list[0].title;
          _this.news.firstUrl = list[0].url;
          _this.newsList = list;
        }).catch((err) => {
          console.log(err)
        })
      },
      getHL() {
        const _this = this;
        //公共方法
        const date = _this.common.dateIssue();
        this.$axios.get('/api/laohuangli/d?date='+date+'&key=f18482aa4ab46f3e35a4484e25505b65').then(function (reponse) {
          const oldDate = reponse.data.result;
          _this.oldHL.yL = oldDate.yinli;
          _this.oldHL.yI = oldDate.yi;
          _this.oldHL.jI = oldDate.ji;
        }).catch((err) => {
          console.log(err)
        })
      },
      getStock() {
        const _this = this;

        this.$axios.get('/stock/ActNews/Query?key=7318bd1e40734bb0bf290666b6d40bf8&keyword=奥巴马').then(function (reponse) {
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  .home-css {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 100%;
    background: url("./images/penhui.png") no-repeat;
    background-size: 100% 100%;
    overflow-x: hidden;

    .box {
      border: 10px solid #ffffff;

      .el-row {
        margin-bottom: 0px;

        &:last-child {
          margin-bottom: 0;
        }

        .el-col {
          box-sizing: border-box;
          border: 6px solid #ffffff;
          height: calc(25vh);

          .content {
            box-sizing: border-box;
            height: 100%;
            width: 100%;
            border: 1px solid #ffffff;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: #ffffff;
            transition: all 0.7s;
          }

          .pure {
            background: #340010;
          }

          .pure:hover {
            border: 7px solid #ffffff;
            background: #2D000E;
          }

          .content:not(.pure):hover {
            border: 7px solid #ffffff;
            background: rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
    a {
      color: #ffffff;
      transition: all 0.5s;
    }

    a:hover {
      color: #f13a2f;
    }

    a:not(:last-child) {
      margin-right: 20px;
    }

    .router-link-active {
      color: #F13A2F;
    }
  }
  .newsList {
    width: auto;
    max-height: 200px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    a {
      color: #9c9c9c;
      transition: all 0.5s;
    }

    a:hover {
      color: #f13a2f;
    }

    a:not(:last-child) {
      margin-right: 20px;
    }

    .router-link-active {
      color: #F13A2F;
    }
  }

</style>
