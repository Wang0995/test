<template>
  <div>
    <span>
      全局Event事件，打开控制面板....（全局定义的事件是不会跟随组件的生命周期函数进
      行状态改变的。切换路由时，如果不手动清除事件的话，它会注册多次，导致内部的函数也会被多次运行。）
    </span>
    <br>
    <el-button type="primary" @click="busEvent">打印</el-button>
    <Whole></Whole>
  </div>
</template>

<script>
  import Whole from './components/wholeBus'
  export default {
      data() {
        return {
            name: '大乐乐'
        }
      },
      components: {
        Whole,
      },
      created () {

      },
      methods: {
         busEvent () {
             this.$bus.$emit("nameVal", this.name);
          }
      }
  }
</script>
