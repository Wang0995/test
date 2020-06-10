<template>
    <el-container>
      <el-aside width="auto">
        <IndexAside ref="broAside"></IndexAside>
      </el-aside>
      <el-container>
        <router-view name="content"></router-view>
        <el-main style="text-align: center; margin: auto"><img src="../../assets/logo.png" ALT="加载失败"></el-main>
      </el-container>
    </el-container>
</template>

<script>
  import IndexAside from './indexAside'
  import IndexMain from './indexMain'

  export default {
      name: 'DocumentPage',
      components: {
          IndexAside,
          IndexMain
      }
  }
</script>
