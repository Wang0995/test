<template>
  <div>
    <span>$refs方法用于拥有共同父组件的兄弟组件互相通信（也可用于父子组件传值），思路主要是子传父，父传子，用于小型项目。大型项目请用VUEX！</span>
    <div><span>请打开控制台...</span></div>
    <h1>一、同级组件，父组件调用方法，传参</h1>
    <div class="docRefs">
      <RefsA ref="bridge"></RefsA>
      <RefsB @operation="operation"></RefsB>
      <div>
        <el-button type="primary" @click="functionFather">点击我执行调用A组件方法</el-button>
      </div>
    </div>
    <h1>二、通过props父组件给子组件传值</h1>
    <div>父组件</div>
    <RefsChild :sendMsg="fatherMsg"></RefsChild>
    <h1>三、子组件给父组件传值</h1>
    <RefsToFather v-on:getChildValue="getChild"></RefsToFather>
    <span>这是来自子组件的数据：{{childValue}}</span>
  </div>
</template>

<script>
  import RefsA from './components/refsA'
  import RefsB from './components/refsB'
  import RefsChild from './components/refsChild'
  import RefsToFather from './components/refsToFather'

  export default {
      components: {
          RefsA,
          RefsB,
          RefsChild,
          RefsToFather,
      },
      data() {
          return {
            fatherMsg: '嗨，儿子',
              childValue: '',
          }
      },
      methods: {
          operation() {
              this.$refs.bridge.functionA();
          },
          functionFather() {
              console.log('我是父组件，我调用了A组件的方法，取到了A组件的参数,且我修改了它的值：' + this.$refs.bridge.fadeA);
              this.$refs.bridge.fadeA ='被修改后的值';
              this.operation();
          },
          getChild: function(data) { // 此时的参数data为子组件传递的值，即this.$emit()的第二个参数
              this.childValue = data;
          },
      }
  }
</script>

<style xml:lang="scss">
  .docRefs {
    display: flex;
    justify-content: space-around;
  }
</style>
