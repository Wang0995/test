<template>
  <div class="homeHeader">
    <div class="leftFunction">
      <div class="logoO"></div>
      <div class="searchInput">
        <i class="el-icon-search"></i>
        <input placeholder="Search..."/>
      </div>
    </div>
    <div class="linkPart">
      <router-link v-bind:to="'/'">Home</router-link>
      <router-link v-bind:to="'/document'">Document</router-link>
      <router-link v-bind:to="'/other'">Others</router-link>
    </div>
    <div class="rightFunction">
      <div><i class="el-icon-message-solid"></i></div>
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar :src="circleUrl"></el-avatar><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'indexHeader',
    data() {
      return {
        circleUrl: "../../assets/head.jpeg",
      };
    },
    computed: {

    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  }
</script>

<style>
  .homeHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
  }
  .leftFunction {
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
  .logoO {
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
  .linkPart {

  }
  .linkPart a {
    text-decoration: none;
    color: #b3b3b3;
    font-weight: 600;
    transition: all 0.5s;
  }
  .linkPart a:hover {
    color: #f13a2f;
  }
  .linkPart a:not(:last-child) {
    margin-right: 20px;
  }
  .rightFunction {
    display: flex;
    align-items: center;
  }
  .rightFunction div > i {
    margin-right: 20px;
    font-size: 20px;
  }
  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #f13a2f;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
