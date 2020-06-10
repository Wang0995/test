const state = ({      //state里面存放的是变量，如果你要注册全局变量，写这里
  isCollapse: false,
});

/*const getters = {                //getters相当于是state的计算属性，如果你需要将变量的值进行计算，然后输出，写这里

  include: (state) => (val) => {

    return state.list.indexOf(val) > -1;

  }

}

;*/

const actions = {            //actions提交的是mutations，相当于就是改变变量的方法的重写，但是，actions是可以进行异步操作的，即相当于promise中的then和catch
  set_isCollapse({commit,state}) {
    let status = state.isCollapse;
    commit('set_isCollapse', !status);
  }
};

const mutations = {       //修改store中的变量的方法，如果你要改变变量的值，就写这里
  set_isCollapse(state, status) {
    state.isCollapse = status;
  }
};



export default {

  // namespaced:true,            //命名空间

  state,            //这里你用到了哪几个属性就写哪几个，不需要的可以注释掉

  // getters,

 actions,

  mutations

};
