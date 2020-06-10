import home from './modules/home'

const getters = {
  EvenOrOdd(state){
    // 注意数据是从 user.js 中获取的，所以写成 user.state.count
    return home.state.count % 2 == 0 ? "偶数" : "奇数"
  }
};
// 并导出
export default getters;
