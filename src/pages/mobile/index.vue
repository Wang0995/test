<template>
  <div class="dataBox">
    <NavBar></NavBar>
    <van-sticky>
      <Search></Search>
    </van-sticky>
    <van-pull-refresh
      v-model="isLoading"
      success-text="刷新成功"
      @refresh="onRefresh"
    >
      <div style="font-weight: bold; font-size: 20px; margin: 8px">船厂风采</div>
      <Swipe></Swipe>
      <NoticeBar></NoticeBar>
      <Menu></Menu>
      <Mainmenu></Mainmenu>
      <Tabs></Tabs>
      <News></News>
      <BarGraph></BarGraph>
      <LineGraph></LineGraph>
    </van-pull-refresh>
    <Tabbar></Tabbar>
    <div style="height: 50px; width: 100%"></div>
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
    }
  }
</script>

<style lang="scss">
  .dataBox {
    background: #f7f8fa;
    min-height: 100%;
    height: fit-content;
    width: 100%;
  }
</style>
