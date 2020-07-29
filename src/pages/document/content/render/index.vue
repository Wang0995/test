<template>
  <div class="documentRenderCss">
    <el-divider content-position="left">v-if</el-divider>
    <el-button @click="handleChange">点点我！</el-button>
    <div v-if="render01">你能看到我吗？</div>
    <div v-else>我不能看到你😢</div>
    <el-divider content-position="left">v-else-if</el-divider>
    <el-button @click="changeType">来点我！</el-button>
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
    <p style="color: rebeccapurple">注意: v-else，v-else-if 必须紧跟在带 v-if 或者 v-else-if 的元素之后。</p>
    <el-divider content-position="left">用key管理可复用元素</el-divider>
    <el-button @click="changeLoginType">改变登录方式</el-button>
    <div v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input"></input>
    </div>
    <div v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="username-input"></input>
    </div>
    <span>若if和else里的标签一样，则会复用，例如label标签，input输入框如果key值一样，则切换不会重新渲染</span>
    <el-divider content-position="left">v-show</el-divider>
    <h1 v-show="ok">Hello!</h1>
    <span>与v-if不同，v-show是直接渲染在DOM上的，只是实现css的display切换，而v-if才会实现组件的创建和销毁，且花销很大。</span>
  </div>
</template>

<script>
  let i = 0;

 export default {
   data() {
     return {
       render01: false,
       type: '',
       array: ['A', 'B', 'C'],
       username: '',
       loginType: 'username',
       email: '',
       ok: true
     }
   },

   methods: {
     handleChange() {
       this.render01 = !this.render01;
     },
     changeType() {
       this.type = this.array[i];
       i++;
       if (i === 3) i = 0;
     },
     changeLoginType() {
       if (this.loginType === 'username') this.loginType = 'email'
       else this.loginType = 'username'
     }
   }
 }
</script>

<style lang="scss">
  .documentRenderCss {
    padding: 10px;

    .title {
      font-size: 25px;
      font-weight: bold;
      color: #3498db;
    }
  }
</style>
