<template>
  <div class="my-parent">
    <h3>我是父组件，我想告诉我的子组件，我的年龄值是:{{parentAge}}</h3>
    <h3>我要通过v-bind(即简写":")语法糖绑定一个属性parentAge，告诉子组件我的年龄值是:{{parentAge}}</h3>
    <!-- 下面就是我的子组件 -->
    <my-child :deliverParentAge="parentAge"
              @differAge="handleDifferAge"
              @addParentAge="handleAddParentAge"></my-child>
    <h3>通过监听子组件提交的事件addParentAge，我知道到了自己的实际年龄应该是:{{parentAge+1}}，并通过方法handleAddParentAge，在控制台打印出我的真实年龄</h3>
    <h3>通过监听子组件提交的事件differAge，并通过方法handleDifferAge，在控制台打印出子组件的年龄</h3>

  </div>
</template>

<script>
    import MyChild from "./components/child";
    export default {
        components: { MyChild },
        data() {
            return {
                parentAge: 49
            };
        },
        methods: {
            handleAddParentAge(actualAge) {
                console.log("父组件的实际年龄是：", actualAge);
            },
            handleDifferAge(child) {
                console.log("我们的年龄差是：", this.parentAge + 1 - child);
            }
        }
    };
</script>

<style>
  .my-parent {
    text-align: left;
    text-indent: 1em;
    width: 1000px;
    height: 500px;
    border: 1px solid #555;
  }
</style>
