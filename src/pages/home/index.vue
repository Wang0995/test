<template>
  <div>
    <el-button type="primary" @click="countAdd('add')">增加</el-button>
    <el-button type="primary" @click="countDec">减少</el-button>
    <el-button type="warning" @click="addAsync">异步增加</el-button>
    <h1>{{count}}</h1>
    <h1>{{EvenOrOdd}}</h1>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
      computed: mapGetters([
         'count',
          'EvenOrOdd',
      ]),
      methods: mapActions([
         'countAdd',
          'countDec',
          'addAsync',
      ]),
  }
</script>

<style>
  .xxxx {
    content: 'X';
    font-weight: bold;
    color: #f13a2f;
    font-size: 40px;
  }
</style>
