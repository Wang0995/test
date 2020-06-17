<template>
  <div class="second-child">
    <h1>非父子通讯(BUS)</h1>
    <h4>this is second child vue</h4>
    <p>从first.vue获取同级组件传递过来的信息：{{message}}</p>
    <el-button type="primary" @click="useFirst">调用第一个组件的方法</el-button>
  </div>
</template>
<script>
    import EventBus from './../../../../../tools/center'
    export default {
        data () {
            return {
                message: '默认值'
            }
        },
        methods: {
          useFirst() {
              EventBus.$emit('firstFunction');
          }
        },
        mounted () {
            let _this = this;
            EventBus.$on('firstChildMsg',  (msg) => {
                _this.message = msg
            });
        }
    }
</script>
