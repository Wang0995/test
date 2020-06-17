<template>
  <div class="detail-div">
    <span>首页详情</span>
    <first-child></first-child>
    <second-child></second-child>
  </div>
</template>
<script>
    import firstChild from './components/first'
    import secondChild from './components/second'
    export default {
        data () {
            return {}
        },
        components: {
            firstChild,
            secondChild
        },
        mounted () {
            // console.log('详情页面...')
        }
    }
</script>
