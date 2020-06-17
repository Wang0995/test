<template>
  <div class="first-vue-box">
    <p>this is firstChild vue</p>
    <el-button type="primary" @click="sendMsg">发送</el-button>
  </div>
</template>
<script>
    import EventBus from './../../../../../tools/center'
    export default {
        data () {
            return {}
        },
        methods: {
            sendMsg () {
                EventBus.$emit('firstChildMsg', 'this is firstChild Msg')
            },
            firstFunction() {
                alert('我是第一个组件的方法！');
            }
        },
        mounted () {
            EventBus.$on('firstFunction', this.firstFunction);
        }
    }
</script>
<style>
  .first-vue-box {
    border: 1px solid blue;
  }
</style>
