<template>
  <div>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
    <el-input
      placeholder="请输入内容"
      v-model="input"
      :disabled="radio !== '1'">
    </el-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        radio: '1',
        input: ''
      }
    },
  }
</script>
