<template>
  <div>
    <el-button type="primary" @click="functionA">点击我执行A方法</el-button>
    <br>
    <br>
    <div>{{fadeA}}</div>
    <br>
    <br>
  </div>
</template>

<script>
  export default {
    data() {
          return {
            fadeA: '我是A的数据',
          };
    },
    methods: {
        functionA() {
          alert('执行成功！')
        }
    }
  }
</script>
