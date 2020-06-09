<template>
  <el-container>
    <el-header>
      <IndexHeader @operation="operation"></IndexHeader>
    </el-header>
    <router-view></router-view>
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
          operation() {
            alert('123')
          },
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
  }

  .el-aside {
    background: #fafafa;
    color: #333;
    overflow-x: hidden;
    height: 100%;
    border-right: 1px solid #efefef;
    /*height: calc(100vh - 60px);*/
  }

  .el-main {
    background-color: white;
    color: #333;
    text-align: center;
  }

</style>
