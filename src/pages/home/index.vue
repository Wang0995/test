<template>
  <div>
    <div>
      <el-button type="primary" @click="countAdd('add')">增加</el-button>
      <el-button type="primary" @click="countDec">减少</el-button>
      <el-button type="warning" @click="addAsync">异步增加</el-button>
      <h1>{{count}}</h1>
      <h1>{{EvenOrOdd}}</h1>
      <h1>{{this.$store.state}}</h1>
    </div>
    <div class="hello">
      <h3>Vuex状态树</h3>
      <div>{{this.$store.state}}</div>
      <h3>mapState</h3>
      <div>{{catName}} {{catAge}}</div>
      <div>{{dogName}} {{dogAge}}</div>
      <h3>mapGetters</h3>
      <div>{{catDesc}}</div>
      <div>{{dogDesc}}</div>
      <h3>mapMutations</h3>
      <button @click="catIncrement({num:1})">猫变化</button>
      <button @click="dogIncrement({num:1})">狗变化</button>
      <h3>mapActions</h3>
      <button @click="catGrow({num:1})">猫动作</button>
      <button @click="dogGrow({num:1})">狗动作</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'
  export default {
    computed: {
      ...mapState("cat", {
        catName: "name",
        catAge: "age"
      }),
      ...mapState("dog", {
        dogName: "name",
        dogAge: "age"
      }),
      ...mapGetters("cat", {
        catDesc: "desc"
      }),
      ...mapGetters("dog", {
        dogDesc: "desc"
      }),
      ...mapGetters([
        'count',
        'EvenOrOdd',
      ]),
    },
      methods: {
        ...mapMutations("cat", { catIncrement: "increment" }),
        ...mapMutations("dog", { dogIncrement: "increment" }),
        ...mapActions("cat", { catGrow: "grow" }),
        ...mapActions("dog", { dogGrow: "grow" }),
        ... mapActions([
          'countAdd',
          'countDec',
          'addAsync',
        ]),
      }
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
