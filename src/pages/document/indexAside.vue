<template>
  <div style="height: 100%">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      background-color="#fafafa"
      text-color="#808080"
      active-text-color="#f13a2f"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse">
      <el-menu-item class="open-close" @click="controlCollapse">
        <i class="el-icon-menu"></i>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
    export default {
        name: 'indexAside',
        data() {
            return {
                isCollapse: false
            };
        },
        methods: {
            controlCollapse() {
                this.isCollapse ? this.isCollapse = false : this.isCollapse = true;
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>
  .open-close {
    text-align: center;
    color: #282828;
  }
  .el-menu {
    border: none;
  }
  /*.el-submenu .el-menu-item, .el-menu-item, .el-submenu__title {*/
  /*  height: 30px;*/
  /*  line-height: 30px;*/
  /*  font-weight: 500;*/
  /*}*/
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
</style>
