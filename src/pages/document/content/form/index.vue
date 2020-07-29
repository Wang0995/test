<template>
  <div class="formCss">
    <el-divider content-position="left">基础用法</el-divider>
    <input v-model.lazy="text" placeholder="edit me">
    <p>Message is: {{ text }}</p>
    <textarea v-model="textarea" placeholder="add multiple lines"></textarea>
    <br>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ textarea }}</p>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <br>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
    <br>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>
    <br>
    <select v-model="selected">
      <option disabled value="">请选择</option>
      <option value="a">A</option>
      <option value="b">B</option>
      <option value="c">C</option>
    </select>
    <span>Selected: {{ selected }}</span>
    <p>v-model.lazy：在“change”时而非“input”时更新</p>
    <p>v-model.number：如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符</p>
    <p>v-model.trim：如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: '',
        textarea: '',
        checked: false,
        checkedNames: [],
        picked: '',
        selected: 'c'
      }
    },
    created() {
      //在这个生命周期函数里是页面渲染前就调用，一般是写在这里
      //this.getSomethingData();
    },
    mounted() {
      //在这个生命周期函数里是页面渲染完成后调用，如果你有什么需求是需要组件挂载完成后再进行的话就写在这里
      //this.getSomethingData();
    },
    methods: {
      getSomethingData() {
        //这里写调接口的地址
        this.$axios.get('/stock'+'?key=7318bd1e40734bb0bf290666b6d40bf8&keyword=奥巴马').then(function (reponse) {
          //console.log(reponse)
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="scss">
  .formCss {
    padding: 10px;
  }
</style>
