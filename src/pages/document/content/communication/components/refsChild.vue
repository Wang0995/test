<template>
  <div>
    <h1>子组件</h1>
    <span>获取父组件传值:<span style="color: #f46159">{{sendMsg}}</span></span>
  </div>
</template>

<script>
    export default {
        name: 'child',
        data() {
            return {

            }
        },
        props: ['sendMsg'] // 拿到父组件绑定到sendMsg的值，然后在子组件下显示出来
    }
</script>
