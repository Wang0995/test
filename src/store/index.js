import Vue from 'vue'
import Vuex from 'vuex'

import body from './modules/body'
Vue.use(Vuex);

import getters from "./getters";
import actions from "./actions";
import home from "./modules/home";
export default new Vuex.Store({
  getters,
  actions,
  modules:{
    home,
  }
})



// var state = {
//   count: 6,
// };
//
// var getters = {
//   count(state) {
//     return state.count;
//   },
//   EvenOrOdd(state) {
//     return state.count%2 == 0 ? '偶数' : '奇数';
//   }
// };
//
// const actions = {
//   countAdd({commit,state}) {
//     commit('countAdd')
//   },
//   conutDec({commit,state}) {
//     if (state.count > 5) {
//       commit('countDec')
//     }
//   },
//   addAsync({commit,state}) {
//     var  a = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve();
//       },3000)
//     })
//     a.then(() => {
//       commit('countAdd')
//     }).catch(() => {
//       console.log('异步失败')
//     })
//   }
// };
//
// const mutations = {
//   countAdd(state) {
//     state.count++;
//   },
//   countDec(state) {
//     state.count--;
//   }
// };
//
// const store = () => new Vuex.Store ({
//   state,
//   getters,
//   actions,
//   mutations,
//   modules: {
//     body,
//   }
// });
//
// export default store;
