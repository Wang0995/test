<template>
  <div class="dataBox">
    <van-nav-bar title="设备巡检卡" left-text="" left-arrow style="background: black;">
      <template #right>
        <van-icon name="ellipsis" size="18" />
      </template>
    </van-nav-bar>
    <div class="content">
      <div class="photo" style="margin-bottom: 10px">
        <div class="tt">产品照片</div>
        <div class="divider"></div>
        <van-swipe class="my-swipe" :autoplay="1000000" indicator-color="white">
          <van-swipe-item>
            <van-image height="280" fit="cover" :src="require('../../assets/images/ma1.jpg')"/>
          </van-swipe-item>
          <van-swipe-item>
            <van-image height="280" fit="cover" :src="require('../../assets/images/ma2.jpg')"/>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div>
        <div class="table">
          <div class="tt">产品信息</div>
          <div class="divider"></div>
          <div>
            <div><span>名称：</span><span style="color: #666666">自动化切割机</span></div>
            <div><span>产地：</span><span style="color: #666666">上海市普陀区金星路552号</span></div>
            <div><span>生产日期：</span><span style="color: #666666">2020-04-08 17:53:23</span></div>
            <div style="display: flex"><span>产品质量：</span>
              <el-rate
                class="star"
                v-model="value"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
            </div>
            <div><span>供应商：</span><span style="color: #666666">阿里巴巴集团</span></div>
            <div><span>设备编号：</span><span style="color: #666666">AD63-43DS-8D8D</span></div>
            <div><span>部门：</span><span style="color: #666666">制造一部</span></div>
            <div><span>科室：</span><span style="color: #666666">现场检查室</span></div>
            <div><span>固定资产号：</span><span style="color: #666666">#453AF4C45D4F5C</span></div>
            <div><span>类别：</span><span style="color: #666666">小型零部件</span></div>
          </div>
        </div>
      </div>
      <div class="fade-button" @click="selectShow = true">添加记录</div>
    </div>
    <div
      style="position: absolute; bottom: 0; background: black; width: 100%; text-align: center; font-size: 12px; height: 30px; line-height: 30px; color: #666666">
      2020-12-09 Copy Right@上海外高桥公司所有
    </div>
    <van-action-sheet
      v-model="selectShow"
      :actions="actions"
      cancel-text="取消"
      description="请选择记录模板"
      close-on-click-action
      @select="moduleShow = true"
    />
    <van-popup v-model="moduleShow" position="top"
               close-icon-position="top-right" :style="{ height: '100%' }">
      <van-nav-bar title="设备巡检卡" left-text="" left-arrow style="background: black;">
        <template #right>
          <van-icon name="ellipsis" size="18" />
        </template>
      </van-nav-bar>
      <van-divider>记录结果填写</van-divider>
      <van-field
        readonly
        clickable
        name="picker"
        :value="value1"
        label="巡更总结"
        placeholder="点击选择结果"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns1"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
      <van-divider>记录内容填写</van-divider>
      <van-field
        readonly
        clickable
        name="calendar"
        :value="value2"
        label="日历"
        placeholder="点击选择日期"
        @click="showCalendar = true"
      />
      <van-calendar v-model="showCalendar" @confirm="onConfirm2"/>
      <van-field
        readonly
        clickable
        name="picker"
        :value="value3"
        label="设备状态"
        placeholder="点击选择状态"
        @click="showState = true"
      />
      <van-popup v-model="showState" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns3"
          @confirm="onConfirm3"
          @cancel="showState = false"
        />
      </van-popup>
      <van-field
        v-model="message"
        rows="2"
        autosize
        label="维护情况说明"
        type="textarea"
        maxlength="50"
        placeholder="请输入说明情况"
        show-word-limit
      />
      <van-field name="uploader" label="文件上传">
        <template #input>
          <van-uploader v-model="uploader"/>
        </template>
      </van-field>
      <van-field
        readonly
        clickable
        name="picker"
        :value="value4"
        label="地点定位"
        placeholder="点击选择状态"
        @click="showLocation = true"
      />
      <van-popup v-model="showLocation" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns4"
          @confirm="onConfirm4"
          @cancel="showLocation = false"
        />
      </van-popup>
      <div class="box">
      <div class="confirmButton">提交记录</div>
      </div>

    </van-popup>
    <!--    <NavBar></NavBar>-->
    <!--    <van-sticky>-->
    <!--      <Search></Search>-->
    <!--    </van-sticky>-->
    <!--    <van-pull-refresh-->
    <!--      v-model="isLoading"-->
    <!--      success-text="刷新成功"-->
    <!--      @refresh="onRefresh"-->
    <!--    >-->
    <!--&lt;!&ndash;      <div style="font-weight: bold; font-size: 20px; margin: 8px">船厂风采</div>&ndash;&gt;-->
    <!--      <Swipe></Swipe>-->
    <!--      <NoticeBar></NoticeBar>-->
    <!--      <Menu></Menu>-->
    <!--      <Mainmenu></Mainmenu>-->
    <!--      <Tabs></Tabs>-->
    <!--      <News></News>-->
    <!--      <BarGraph></BarGraph>-->
    <!--      <LineGraph></LineGraph>-->
    <!--    </van-pull-refresh>-->
    <!--    <Tabbar></Tabbar>-->
    <!--    <div style="height: 50px; width: 100%"></div>-->
  </div>
</template>

<script>
  import Search from './components/search'
  import Swipe from './components/swipe'
  import Tabs from './components/tabs'
  import NewTabs from './components/newTabs'
  import NoticeBar from './components/noticeBar'
  import Mainmenu from './components/mainmenu'
  import NavBar from './components/navBar'
  import Tabbar from './components/tabbar'
  import Menu from './components/menu'
  import News from './components/news'
  import BarGraph from './components/barGraph'
  import LineGraph from './components/lineGraph'

  export default {
    data() {
      return {
        isLoading: false,
        value: 4.0,
        selectShow: false,
        actions: [
          {name: '设备故障报修记录'},
          {name: '设备维护记录'},
          {name: '设备使用记录'},
        ],
        moduleShow: false,
        columns1: ['检查正常', '危险警告'],
        columns3: ['运行中', '维护中'],
        showPicker: false,
        value1: '',
        value2: '',
        showCalendar: false,
        showState: false,
        value3: '',
        message: '',
        columns4: ['165.15E/125.57E', '463.31E/313.05E'],
        showLocation: false,
        value4: '',
        uploader: [{url: require('../../assets/images/ma2.jpg')}]
      }
    },
    components: {
      NavBar,
      Search,
      Swipe,
      NoticeBar,
      Mainmenu,
      Tabs,
      NewTabs,
      Tabbar,
      Menu,
      News,
      BarGraph,
      LineGraph
    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      },
      onConfirm(value) {
        this.value1 = value;
        this.showPicker = false;
      },
      onConfirm2(date) {
        this.value2 = `${date.getFullYear()}年 ${date.getMonth() + 1}月 ${date.getDate()}日`;
        this.showCalendar = false;
      },
      onConfirm3(value) {
        this.value3 = value;
        this.showState = false;
      },
      onConfirm4(value) {
        this.value4 = value;
        this.showLocation = false;
      },
    }
  }
</script>

<style lang="scss">
  .dataBox {
    background: #eaeaea;
    min-height: 100%;
    height: fit-content;
    width: 100%;

    .van-nav-bar {
      height: 50px;
      .van-nav-bar__text {
        color: white;
      }

      .van-nav-bar__title {
        color: white;
        font-weight: bold;
        font-size: 20px;
        letter-spacing: 10px;
      }

      i {
        color: white;
      }
    }

    .content {
      padding: 10px;

      .photo {
        background: #efefef;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1), 3px 5px 20px rgba(0, 0, 0, 0.2);
        padding: 10px;
        border-radius: 7px;

        .my-swipe {

        }
      }

      .table {
        background: #efefef;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1), 3px 5px 20px rgba(0, 0, 0, 0.2);
        padding: 10px;
        border-radius: 7px;

        .star {
          margin-top: 3px;
        }
      }

      .fade-button {
        height: 40px;
        background: #5daf34;
        margin: 10px 0;
        line-height: 40px;
        text-align: center;
        font-weight: bold;
        border-radius: 7px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1), 3px 5px 20px rgba(0, 0, 0, 0.2);
      }


    }

    .title {
      background: black;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1), 3px 5px 20px rgba(0, 0, 0, 0.1);

      .title-text {
        color: white;
        font-weight: bold;
        font-size: 20px;
        letter-spacing: 10px;
      }
    }

    .confirmButton {
      box-sizing: border-box;
      margin: 10px;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #5daf34;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-weight: bold;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1), 3px 5px 20px rgba(0, 0, 0, 0.2);
    }

  }

  .tt {
    color: black;
    font-weight: bold;
  }

  .divider {
    height: 2px;
    width: 100%;
    background: linear-gradient(to right, black, #eaeaea);
    margin: 0px 0px 10px 0px;
  }
</style>
