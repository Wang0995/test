<template>
  <div class="eventCss">
    <el-divider content-position="left">监听事件</el-divider>
    <el-button @click="counter += 1">Add +1</el-button>
    <span>你点击了{{counter}}次按钮！</span>
    <el-divider content-position="left">事件处理方法</el-divider>
    <el-button @click="view">查看</el-button>
    <el-button @click="param('i am params', $event)">传参</el-button>
    <br></br>
    <span style="color: #f13a2f">传参按钮不光传入了参数，还可以传入DOM事件通过$event。
      在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。
      event.preventDefault()为阻止默认事件发生，event.stopPropagation()为阻止事件冒泡到父组件上。
    </span>
    <el-divider content-position="left">事件修饰符</el-divider>
    <span>
      为了解决这个问题，Vue.js 为 v-on 提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。
      <li>.stop</li>
      <li>.capture</li>
      <li>.self</li>
      <li>.once</li>
      <li>.passive</li>
      <li>.prevent</li>
      <img :src="require('./images/1595918692(1).png')" style="width: 500px"/>
    </span>
    <el-divider content-position="left">按键修饰符</el-divider>
    <input  v-on:keyup.13="pressEnter" placeholder="输入文字按下回车试试...."></input>
    <el-divider content-position="left">系统修饰键</el-divider>
    <span>支持按键组合：</span>
    <br>
    <span>keyup.alt.67 表示 Alt + C</span>
    <br>
    <span>click.ctrl 表示 Ctrl + 鼠标点击</span>
    <br>
    <!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
    <button v-on:click.ctrl="exact">A</button>

    <!-- 有且只有 Ctrl 被按下的时候才触发 -->
    <button v-on:click.ctrl.exact="exact">A</button>

    <!-- 没有任何系统修饰符被按下的时候才触发 -->
    <button v-on:click.exact="exact">A</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0,
        name: 'Vue.js',
      }
    },
    methods: {
      view(event) {
        alert('我爱' + this.name)
        if (event) {
          alert(event.target.tagName)
        }
      },
      param (params, event) {
        alert(params)
        alert(event.target.tagName)
      },
      pressEnter() {
        alert('你按下了回车')
      },
      exact() {
        alert('查看代码')
      }
    }
  }
</script>

<style lang="scss">
  .eventCss {
    padding: 10px;
  }
</style>
