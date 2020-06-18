<template>
  <div class="home-css">
    <div class="box">
      <el-row :gutter="0">
        <el-col :span="12">
          <div class="content">
            <div class="textbox">
              <span style="font-size: 45px">{{time.hours}} <span style="font-size: 25px">: {{time.minutes}}</span><span style="font-size: 25px">: {{time.seconds}}</span></span>
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
        </div></div></el-col>
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
        <el-col :span="12"><div class="content pure"></div></el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="6">
          <div class="content">
            <div class="textbox">
              <span style="font-size: 45px"><i class="el-icon-s-tools"></i></span>
              <br>
              <span>Setting Tools</span>
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
        <el-col :span="12"><div class="content pure"></div></el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="12"><div class="content pure"></div></el-col>
        <el-col :span="6"><div class="content pure"></div></el-col>
        <el-col :span="6"><div class="content pure"></div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
      data () {
          return {
              date: '',
              time: '',
              weather: '',
          }
      },
      created () {

      },
      mounted () {
          this.common.dateToEn('4444');
          const _this = this;        //声明一个变量指向Vue实例this，保证作用域一致
          this.getDate();
          this.timer = setInterval(function () {
            _this.getTime();
          }, 1000);
          this.getWeather();

      },
      beforeDestroy () {
        if (this.timer) {
            clearInterval(this.timer);
        }
      },
      methods: {
          getDate () {
              this.date = new Date();
          },
          getTime () {
              let time = new Date();
              this.time = {
                  hours: time.getHours(),
                  minutes: time.getMinutes(),
                  seconds: time.getSeconds(),
              };
          },
          getWeather () {
              const _this =  this;
              this.$axios.get('https://www.tianqiapi.com/api/?version=v6&appid=89736532&appsecret=HNw4pM0K').then(function(reponse){
                  _this.weather = reponse.data;
              }).catch(() => {});
              this.$axios.get('http://api.fanyi.baidu.com/api/trans/vip/translate?q=apple&from=en&to=zh&appid=20200618000499244&salt=ZNoatZULNvHbdyCBqc5M&sign=f89f9594663708c1605f3d736d01d2d4').then(function(reponse){
                  console.log(reponse)
              }).catch((err) => {console.log(err)})
          },
      }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  .home-css {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 100%;
    background: url("./images/penhui.png") no-repeat;
    background-size:100% 100%;
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
          border: 5px solid #ffffff;
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
  }

</style>
