<template>
  <div>
    <el-button type="primary" @click="functionB">点击我调用A组件的方法</el-button>
  </div>
</template>

<script>
  export default {
      methods: {
          functionB() {
              this.$emit('operation');
          }
      },
  }
</script>
