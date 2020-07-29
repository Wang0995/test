<template>
  <div class="newsCss">
    <div class="title">新闻中心</div>
    <div class="divider"></div>
    <div class="content">
      <ul>
        <li>法国船级社中国区新总裁葛思悦...<span style="letter-spacing: -2px; float: right">2020-07-27</span></li>
        <li>公司领导赴大船集团...<span style="letter-spacing: -2px; float: right">2020-07-27</span></li>
        <li>3D审图提效率，三化合一促发展...<span style="letter-spacing: -2px; float: right">2020-07-27</span></li>
        <li>公司举行大型邮轮分段涂装开工仪...<span style="letter-spacing: -2px; float: right">2020-07-27</span></li>
        <li>公司党委开展2020年基层...<span style="letter-spacing: -2px; float: right">2020-07-27</span></li>
        <li>外高桥海工单位/月完成9座...<span style="letter-spacing: -2px; float: right">2020-07-27</span></li>
        <li>更多...</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss">
  .newsCss {
    background: #ffffff;
    margin: 0 8px 8px 8px;
    border-radius: 15px ;
    color: #33495E;
    height: fit-content;
    box-shadow: 0 8px 12px #ebedf0;

    .title {
      font-weight: bold;
      font-size: 18px;
      padding: 10px 10px 0px 10px;
    }

    .divider {
      box-sizing: border-box;
      height: 2px;
      margin: 0 10px;
      width: 50%;
      background: linear-gradient(to right, #33495E, #FFFFFF);
    }

    .content {
      padding: 10px;
    }
  }
</style>
