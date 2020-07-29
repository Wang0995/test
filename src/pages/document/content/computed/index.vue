<template>
  <div>
    <div>
      <h3>计算属性缓存VS方法</h3>
      <p>原始文本：{{message}}</p>
      <p>通过计算属性得出的反向文本：{{reMessage}}</p>
      <p>通过方法属性得出的反向文本：{{reversedMessage()}}</p>
      <p style="color: red">
        区别：我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要
        message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。</p>
    </div>
    <div>
      <h3>计算属性VS侦听属性</h3>
      <el-input style="width: 100px" v-model="firstName" placeholder="姓..."></el-input>
      <el-input style="width: 100px" v-model="lastName" placeholder="名..."></el-input>
      <span>(计算属性)全名是:{{fullNameByComputed}}</span>
      <span>(侦听属性)全名是:{{fullName}}</span>
      <p style="color: red">查看代码发现计算属性有时候更简单</p>
    </div>
    <div>
      <h3>计算属性的set和get</h3>
      <p>data: {{ num }}</p>
      <p>计算属性: {{ newNum }}</p>
      <el-button @click="changeNum1">点击改变num1的值</el-button>
    </div>
    <div>
      <h3>侦听器</h3>
      <p>data: {{ num }}</p>
      <p>计算属性: {{ newNum }}</p>
      <el-button @click="changeNum1">点击改变num1的值</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'hello',
        firstName: '',
        lastName: '',
        fullName: '',
        num: 8,
      }
    },
    methods: {
      reversedMessage: function () {
        return this.message.split('').reverse().join('')
      },
      changeNum1: function () {
        this.newNum = 55;
      }
    },
    computed: {
      reMessage: function () {
        return this.message.split('').reverse().join('');
      },
      fullNameByComputed: function () {
        return this.firstName + this.lastName;
      },
      newNum: {
        get: function () {//必须有返回值，用来获取属性，称为get函数
          return this.num - 1;
        },
        set: function (val) {
          console.log(val);
          this.num = val;
        }
      }
    },
    watch: {
      firstName: function (val) {
        this.fullName = val + this.lastName;
      },
      lastName: function (val) {
        this.fullName = this.firstName + val;
      },
    }
  }
</script>
