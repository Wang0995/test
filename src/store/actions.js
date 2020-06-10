import types from './types'

const actions= {
  addAsync({ commit, state }) {
    // 异步操作
    var p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 3000);
    });
    p.then(() => {
      commit(types.COUNTADD);
    }).catch(() => {
      console.log('异步操作');
    })
  }
}
// 最后导出
export default actions;
