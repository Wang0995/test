<template>
  <div class="home-css">
    <el-row :gutter="15">
      <el-col :span="12"><div class="content"><span>dafnakjbf</span></div></el-col>
      <el-col :span="6"><div class="content" style="background: #cf1322"></div></el-col>
      <el-col :span="6"><div class="content" style="background: #cf1322"></div></el-col>
    </el-row>
    <el-row :gutter="15">
      <el-col :span="6"><div class="content" style="background: #cf1322"></div></el-col>
      <el-col :span="6"><div class="content" style="background: #cf1322"></div></el-col>
      <el-col :span="12"><div class="content"></div></el-col>
    </el-row>
    <el-row :gutter="15">
      <el-col :span="6"><div class="content" style="background: #cf1322"></div></el-col>
      <el-col :span="6"><div class="content" style="background: #cf1322"></div></el-col>
      <el-col :span="12"><div class="content"></div></el-col>
    </el-row>
    <el-row :gutter="15">
      <el-col :span="12"><div class="content"></div></el-col>
      <el-col :span="6"><div class="content" style="background: #cf1322"></div></el-col>
      <el-col :span="6"><div class="content" style="background: #cf1322"></div></el-col>
    </el-row>
  </div>
</template>

<style lang="scss" type="text/scss" scoped>
  .home-css {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 15px;
    background: url("./images/background.jpg") no-repeat;
    background-size:100% 100%;
    overflow-x: hidden;
    .el-row {
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0;
      }
      .el-col {
        height: calc(25vh);
        .content {
          box-sizing: border-box;
          height: 100%;
          width: 100%;
          border: 1px solid #ffffff;
          cursor: pointer;
          transition: all 0.7s;
        }
        .content:hover {
          border: 10px solid #ffffff;
          opacity: 0.7;
        }
      }
    }

  }

</style>
