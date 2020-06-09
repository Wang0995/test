<template>
  <div id="app">
    <BodyPage></BodyPage>
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
</style>
