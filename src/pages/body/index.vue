<template>
  <el-container>
    <el-header>
      <IndexHeader></IndexHeader>
    </el-header>
    <el-container>
      <router-view></router-view>
    </el-container>
    <el-footer style="height: 30px">
      <span>Copyright 2020.06.09 @香香甜甜小喵力 All rights Reserved.</span>
    </el-footer>
    <el-popover
      style="z-index: 9999;"
      placement="bottom"
      title="微信二维码"
      trigger="click">
      <el-image
        style="width: 175px"
        :src="require('../../assets/images/微信二维码.jpg')"
        fit="contain"></el-image>
      <el-button class="connection" slot="reference"><i class="el-icon-phone"></i></el-button>
    </el-popover>
  </el-container>
</template>

<script>
  import IndexHeader from './indexHeader'

  export default {
      name: 'BodyPage',
      components: {
          IndexHeader,
      },
      methods: {
      }
  }
</script>

<style>
  .el-container {
    height: 100%;
  }

  .el-header {
    background: #fff;
    color: #b3b3b3;
    border-bottom: 1px solid #efefef;
  }

  .el-footer {
    background: #ffffff;
    border-top: 1px solid #efefef;
    font-size: 10px;
    line-height: 30px;
    text-align: center;
    color: #b3b3b3;
  }

  .el-aside {
    background: #fafafa;
    color: #333;
    overflow-x: hidden;
    height: 100%;
    border-right: 1px solid #efefef;
    /*height: calc(100vh - 60px);*/
  }
  .connection {
    position: fixed;
    box-shadow: 1px 3px 8px -1px rgba(0, 0, 0, 0.5);
    height: 50px;
    width: 50px;
    padding: 0;
    font-size: 30px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    bottom: 50px;
    right: 20px;
    background: #ffffff;
    z-index: 9999;
  }
</style>
