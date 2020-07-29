// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import store from "./store/index";
import storeTest from './store/test'
// import 'element-ui/lib/theme-chalk/index.css';
import './theme/index.css'
import routes from './router/routes'
import { guardRouter } from './router/methods'
import echarts from 'echarts'
import 'echarts/theme/shine'
import 'echarts/theme/macarons2'
import common from './common/methods'
import axios from 'axios'
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import $ from 'jquery'
import '../src/mock/index'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Avue);
Vue.use(Vant);

//解决vue-router在版本3.0以上点击重复路由报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
};

//EventBus全局
var EventBus = new Vue();

Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  }
});

Vue.prototype.$echarts = echarts;
Vue.prototype.common = common;
Vue.prototype.$axios = axios;

const router = new VueRouter({
  routes,
  mode: 'history'
});

//Vue.config.productionTip = false;

//路由加载前调用
router.beforeEach((to, from, next) => {
  guardRouter(to, from, next);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store: storeTest,
}).$mount('#app');

