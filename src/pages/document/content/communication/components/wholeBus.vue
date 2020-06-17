<template>

</template>

<script>
  export default {
      data() {
        return {

        }
      },
      created() {
          this.$bus.$on('nameVal', function(value) {
              console.log(value); // 我是web秀
          });
      },
      destroyed() {
          console.log('清除Event事件');
          this.$bus.$off('nameVal')
      }
  }
</script>
