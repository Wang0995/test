<template>
  <div id="app">
    <HomePage></HomePage>
<!--    <router-link v-bind:to="'/'">Home</router-link>-->
<!--    <router-link v-bind:to="'/about'">About</router-link>-->
<!--    <router-link v-bind:to="'/param'">Param Link</router-link>-->
<!--    &lt;!&ndash;路由管道标签，任何符合某一路由(route)信息的组件都会在这个标签内展示出来 &ndash;&gt;-->
<!--    <router-view></router-view>-->
  </div>
</template>

<script>
  import HomePage from './pages/homePage/index'
    export default {
        name: 'app',
        components: {
            HomePage
        }
    }
</script>
<!-- css格式 -->
<style>
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
