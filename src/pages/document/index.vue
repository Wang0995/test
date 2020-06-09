<template>
    <el-container>
      <el-aside width="auto">
        <IndexAside ref="broAside"></IndexAside>
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
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
