<!--src\components\Param.vue-->
<template>
  <div class="param">
    <el-input></el-input>
    <input type="text" placeholder="a" size="30" v-model="UserInput" />
    <input type="button" value="Go to route" @click="GoToRoute()" />
  </div>
</template>

<script>
    export default {
        name: 'Param',
        data () {
            return {
                UserInput :''
            }
        },
        methods:{
            GoToRoute : function(){
                this.$router.push({ name: 'Paramdetails', params: { id: this.UserInput }})
            }
        }
    }
</script>
