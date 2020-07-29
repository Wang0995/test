<template>
  <div class="searchCss">
    <van-search
      v-model="value"
      shape="round"
      background="#f7f8fa"
      input-align="center"
      placeholder="你想找什么呢？"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      }
    }
  }
</script>

<style lang="scss">
  .searchCss {
    .van-search__content {
      background: white;

      .van-icon-search::before {
        font-weight: bold;
        color: #33495E;
      }
    }
  }
</style>
