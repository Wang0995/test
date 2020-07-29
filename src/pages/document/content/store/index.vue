<template>
  <div class="vuexTestCss">
    <el-divider><span>Store中的count值是：{{this.$store.state.count}}</span></el-divider>
    <div class="part">
      <span>Mutations：</span>
      <el-button type="primary" @click="increase">增加</el-button>
      <el-button type="primary" @click="reduce">减少</el-button>
      <span>Actions：</span>
      <el-button type="primary" @click="_increase">增加</el-button>
      <el-button type="primary" @click="_reduce">减少</el-button>
    </div>
    <el-divider><span>不带参数getters得到的数据：{{this.$store.getters.watchCount}}</span></el-divider>
    <el-divider><span>带参数getters得到的数据：{{this.$store.getters.watchCountWithParams('我是参数')}}</span></el-divider>
    <div>我是未被重命名：{{count}}，我被重命名：{{sws}}</div>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import { getSexData } from "../../../../api/mockApi";

  export default {
    data() {
      return {
        fadeCount: 5,
      }
    },

    created() {
      getSexData().then(res => {
        console.log(res)
      })
    },

    computed: {
      ...mapState({
        sws: 'count',
      }),
      ...mapState([
        'count'
      ]),
    },

    methods: {
      ...mapMutations([
        'increaseCount'
      ]),

      ...mapMutations({
        defined: 'increaseCount'
      }),

      increase() {
        //this.increaseCount()
        //this.defined()
        this.$store.commit('increaseCount')
      },
      reduce() {
        //载荷提交方式
        this.$store.commit('reduceCount', {
          val: this.fadeCount,
        })
        //对象提交方式
        // this.$store.commit({
        //   type: 'reduceCount',
        //   val: this.fadeCount,
        // })
      },
      _increase() {
        this.$store.dispatch('_increaseCount')
      },
      _reduce() {
        //载荷
        // this.$store.dispatch('_reduceCount', {
        //   val: this.fadeCount,
        // })
        //对象
        this.$store.dispatch({
          type: '_reduceCount',
          val: this.fadeCount,
        })
      },


    }
  }
</script>

<style lang="scss">
  .vuexTestCss {
    padding: 20px;

    .part {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .part > :not(:last-child) {
      margin-right: 20px;
    }
  }
</style>
