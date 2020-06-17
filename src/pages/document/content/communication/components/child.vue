<template>
  <div class="my-child">
    <h5>我是子组件，我可以通过属性props来接收父组件传过来的年龄值是:{{deliverParentAge}}，这是一个数字类型</h5>
    <h5>现在我要告诉父组件，我的年龄是{{childAge}},这样他就可以知道，我们<el-button size="mini" type="primary" @click="DiffAge">相差</el-button>多少岁</h5>
    <h5>并且，我要告诉他，他今年生日已经过了，所以他的年龄应该<el-button size="mini" type="primary" @click="AddAge">加1</el-button></h5>
    下面我要通过this.$emit方法提交一个事件addParentAge，告诉我的父组件，他的实际年龄
  </div>
</template>

<script>
    export default {
        data() {
            return {
                childAge: 27
            };
        },
        props: {
            deliverParentAge: Number
        },
        computed: {
            parentActualAge() {
                return this.deliverParentAge + 1;
            }
        },
        methods: {
            AddAge() {
                this.$emit("addParentAge", this.parentActualAge);
            },
            DiffAge() {
                this.$emit("differAge", this.childAge);
            }
        }
    };
</script>

<style>
  .my-child {
    margin: 20px;
    width: 760px;
    height: 200px;
    border: 1px solid red;
  }
</style>
