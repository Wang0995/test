// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import '../node_modules/theme/index.css'
import routes from './router/routes'
import { guardRouter } from './router/methods'

Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
  routes,
  mode: 'history'
});

// Vue.config.productionTip = false;

//路由加载前调用
router.beforeEach((to, from, next) => {
  guardRouter(to, from, next);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
}).$mount('#app');

