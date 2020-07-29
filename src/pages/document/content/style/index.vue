<template>
  <div class="documentStyleCss">
    <p style="font-size: 20px; font-weight: bold">打开控制台，发现下方的div的class为static和active</p>
    <div class="static"
         v-bind:class="{ active: isActive, 'text-danger': hasError }">
      太对了哥！哥太对！
    </div>
    <p style="font-size: 20px; font-weight: bold">class也可以绑定计算属性的对象</p>
    <el-button @click="controlClass">控制下方class</el-button>
    <div v-bind:class="classObj">查看控制台</div>
    <p style="font-size: 20px; font-weight: bold">数组语法#可使用三元表达式</p>
    <div v-bind:class="[arrClass1, arrClass2]">查看控制台可看到此class为style01 style02</div>
    <div v-bind:class="[param ? arrClass1 : '', arrClass2]">查看控制台可看到此class是考三元表达式控制</div>
    <p style="font-size: 20px; font-weight: bold">#对象语法的动态Style</p>
    <el-button @click="enlargeFont">放大下方字体</el-button>
    <div v-bind:style="{fontSize: number + 'px'}">我爱你张紫杭</div>
    <div v-bind:style="styleObj">这是直接绑定对象</div>
    <p style="font-size: 20px; font-weight: bold">#数组语法的动态Style</p>
    <div v-bind:style="[oneStyles, twoStyles]">你们好</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isActive: true,
        hasError: false,
        param: false,
        arrClass1: 'style01',
        arrClass2: 'style02',
        number: 10,
        styleObj: {
          color: 'red',
          fontWeight: "bold"
        },
        oneStyles: {
          color: 'red',
        },
        twoStyles: {
          fontWeight: "bold"
        }
      }
    },

    computed: {
      classObj: function () {
        return {
          style1: !this.param,
          style2: this.param,
        }
      }
    },

    methods: {
      controlClass() {
        this.param = !this.param;
        console.log(this.param)
      },
      enlargeFont() {
        this.number++;
      }
    }
  }
</script>

<style lang="scss">
  .documentStyleCss {
    .static {
      color: #cf9236;
    }

    .active {
      font-weight: bold;
    }

    .style1 {
      color: magenta;
    }

    .style2 {
      color: #5daf34;
    }
  }
</style>
