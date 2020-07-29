<template>
  <div style="height: 100%">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#fafafa"
      text-color="#808080"
      active-text-color="#f13a2f"
      :default-active="$route.path"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      router>
      <el-menu-item class="open-close" @click="controlCollapse">
        <i :class="iconName"></i>
      </el-menu-item>
      <el-menu-item index="/body/document">
        <i class="el-icon-s-promotion"></i>
        <span slot="title">欢迎</span>
      </el-menu-item>
      <el-menu-item index="/body/document/start">
        <i class="el-icon-s-platform"></i>
        <span slot="title">开始</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">学习</span>
        </template>
        <el-menu-item index="/body/document/router">vue-router</el-menu-item>
        <el-menu-item index="/body/document/store">Vuex</el-menu-item>
        <el-menu-item index="/body/document/vuex">Vuex-test</el-menu-item>
        <el-submenu index="2-1">
          <span slot="title">组件通信方法</span>
          <el-menu-item index="/body/document/refs">$refs方法</el-menu-item>
          <el-menu-item index="/body/document/center">中间事件总线</el-menu-item>
          <el-menu-item index="/body/document/whole">全局EventBus</el-menu-item>
          <el-menu-item index="/body/document/father-child">父子组件通信</el-menu-item>
        </el-submenu>
        <el-menu-item index="/body/document/echarts">Echarts</el-menu-item>
        <el-submenu index="2-2">
          <span slot="title">Avue</span>
          <el-menu-item index="/body/document/summary">总结</el-menu-item>
          <el-menu-item index="/body/document/test">测试</el-menu-item>
          <el-menu-item index="/body/document/avueForm">Avue-Form</el-menu-item>
          <el-menu-item index="/body/document/avueTable">Avue-Table</el-menu-item>
        </el-submenu>
        <el-menu-item index="/body/document/computed">计算属性和监听器</el-menu-item>
        <el-menu-item index="/body/document/style">Class与Style绑定</el-menu-item>
        <el-menu-item index="/body/document/render">条件渲染</el-menu-item>
        <el-menu-item index="/body/document/listRender">列表渲染</el-menu-item>
        <el-menu-item index="/body/document/event">事件处理</el-menu-item>
        <el-menu-item index="/body/document/form">表单输入绑定</el-menu-item>
      </el-submenu>
      <el-menu-item index="/body/document/computed">
        <i class="el-icon-menu"></i>
        <span slot="title">更多</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
    export default {
        name: 'indexAside',
        data() {
            return {
              isCollapse: false,
              iconName: "el-icon-caret-left"
            };
        },
        methods: {
            controlCollapse() {
              if (this.isCollapse) {
                this.isCollapse = false;
                this.iconName = "el-icon-caret-left";
              } else {
                this.isCollapse = true;
                this.iconName= "el-icon-caret-right";
              }
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
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
</style>
