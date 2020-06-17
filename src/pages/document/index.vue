<template>
    <el-container>
      <el-aside width="auto">
        <IndexAside ref="broAside"></IndexAside>
      </el-aside>
      <el-container>
        <el-main><IndexMain></IndexMain></el-main>
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

<style>
</style>
