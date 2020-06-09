<template>
  <div class="homeHeader">
    <div class="operation" @click="operationMenu">
      <i class="el-icon-s-fold"></i>
    </div>
    <div class="logo">
    </div>
    <div class="searchInput">
      <i class="el-icon-search"></i>
      <input placeholder="Search..."/>
    </div>
    <div class="linkPart">
      <router-link v-bind:to="'/'">Home</router-link>
      <router-link v-bind:to="'/document'">Document</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'indexHeader',
    methods: {
        operationMenu() {
            this.$emit('operation');
        }
    }
  }
</script>

<style>
  .homeHeader {
    display: flex;
    align-items: center;
  }
  .operation {
    font-size: 22px;
    line-height: 60px;
    cursor: pointer;
    transition: all 0.5s;
  }
  .operation:hover {
    color: #f13a2f;
  }
  .logo {
    border: 5px solid #f13a2f;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    margin-left: 20px;
  }
  .searchInput {
    display: flex;
    align-items: center;
    margin-left: 40px;
  }
  .searchInput input {
    border: none;
    outline: none;
    color: #7c7c7c;
    margin-left: 10px;
  }
  .searchInput input::-webkit-input-placeholder {
    color: #a6a6a6;
  }
  .searchInput input::-moz-placeholder {
    color: #a6a6a6;
  }
  .searchInput input::-moz-placeholder {
    color: #a6a6a6;
  }
  .searchInput input::-ms-input-placeholder {
    color: #a6a6a6;
  }
</style>
