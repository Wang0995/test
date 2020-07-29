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
      <router-link v-bind:to="'/body/home'">Home</router-link>
      <router-link v-bind:to="'/body/document'">Document</router-link>
      <router-link v-bind:to="'/mobile'">Mobile</router-link>
    </div>
    <div class="rightFunction">
      <div><i class="el-icon-message-solid"></i></div>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar :src="require('../../assets/images/head.jpeg')"></el-avatar><i
          class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided command="logout">注&nbsp;&nbsp;&nbsp;&nbsp;销</el-dropdown-item>
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

      };
    },
    computed: {},
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleCommand(command) {
        const _this = this;
        if (command === 'logout') {
          this.$confirm('您确认退出系统吗？',{
            type: 'error',
          }).then(_ => {
            this.$router.push({path: '/'})
          }).catch(_ => {
            console.log('取消注销')
          });
        }
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  .homeHeader {

    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;

    .leftFunction {
      display: flex;
      align-items: center;

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
    }

    .linkPart {
      a {
        text-decoration: none;
        color: #b3b3b3;
        font-weight: 600;
        transition: all 0.5s;
      }

      a:hover {
        color: #f13a2f;
      }

      a:not(:last-child) {
        margin-right: 20px;
      }

      .router-link-active {
        color: #F13A2F;
      }
    }

    .rightFunction {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 330px;

      i {
        margin-right: 20px;
        font-size: 20px;
      }

      .el-dropdown-link {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: #f13a2f;

        .el-icon-arrow-down {
          font-size: 14px;
        }
      }
    }
  }


</style>
