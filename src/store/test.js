import Vue from 'vue'
import Vuex from 'vuex'
import {count} from "echarts/src/component/dataZoom/history";

Vue.use(Vuex)

const state = {
  count: 55,
}

//所有state的数据改变都需要通过mutations以提交方式改变,不支持异步操作，一般用来改变状态
const mutations = {
  //不带参数
  increaseCount (state) {
    state.count++;
  },
  //带参数
  reduceCount (state, params) {
    state.count -= params.val;
  }
}

//通过提交mutations来改变数据，支持异步操作，业务逻辑一般写在这里
const actions = {
  //可以通过context.state.count来访问状态

  //不带参数
  _increaseCount (context) {
    setTimeout(() => {
      context.commit('increaseCount')
    },1000)
  },
  //带参数
  _reduceCount (context, params) {
    setTimeout(() => {
      context.commit('reduceCount', params)
    },1000)
  }
}

const getters = {
  //不带参数
  watchCount (state) {
    let prefix = ''
    if (state.count === 60) {
      prefix = '我已经到'
      alert('我给你的爱不能够再多了~')
    }
    return prefix + state.count;
  },
  //带参数
  watchCountWithParams: (state) => (params) => {
    let prefix = ''
    if (state.count === 65) {
      prefix = params
    }
    return prefix + state.count;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
