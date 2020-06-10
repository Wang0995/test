import Vue from 'vue'
import Vuex from 'vuex'

import body from './modules/body'

Vue.use(Vuex);

import getters from "./getters";
import actions from "./actions";
import home from "./modules/home";
import dog from "./modules/dog";
import cat from "./modules/cat";


export default new Vuex.Store({
  getters,
  actions,
  modules:{
    body,
    home,
    dog,
    cat,
  }
})

