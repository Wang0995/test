<template>
  <div id="app">
    <router-view></router-view>
<!--    <BodyPage></BodyPage>-->
  </div>
</template>

<script>
  import BodyPage from './pages/body/index'
    export default {
        name: 'app',
        components: {
            BodyPage
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
    font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif,serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    width: 100%;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #F13A2F;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #ededed;
    border-radius: 5px;

  }
</style>
