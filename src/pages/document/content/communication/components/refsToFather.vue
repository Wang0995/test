<template>
  <div>
    <h1>子组件</h1>
    <el-button type="primary" @click="sendToFather">子组件给父组件传值</el-button>
  </div>
</template>

<script>
    export default {
        name: 'childToFather',
        data() {
            return {
                childMsg: '我是你儿子'
            }
        },
        methods: {
            sendToFather: function() {
                this.$emit('getChildValue', this.childMsg); // 参数1 getChildValue作为中间状态，参数2 this.childMsg即为传递给父组件的数据
            }
        }
    }
</script>
