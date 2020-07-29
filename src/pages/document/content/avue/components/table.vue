<template>
  <avue-crud
    :data="data"
    :option="option"
    v-model="form"
    :page.sync="page"
    @size-change="sizeChange"
    @current-change="currentChange"
    @on-load="onLoad"
    :before-open="beforeOpen"
  ></avue-crud>
</template>
<script>
  export default {
    data() {
      return {
        page: {
          pageSize: 10,
          pagerCount:5,
        },
        form: {},
        data: [
          {
            name: '张三',
            sex: '男',
            date: '1994-02-23 00:00:00'
          }, {
            name: '李四',
            sex: '女',
            date: '1994-02-23 00:00:00'
          }, {
            name: '王五',
            sex: '女',
            date: '1994-02-23 00:00:00'
          }, {
            name: '赵六',
            sex: '男',
            date: '1994-02-23 00:00:00'
          }
        ],
        option: {
          title: '表格的标题',
          page: true,
          align: 'center',
          menuAlign: 'center',
          border: true,
          selection: true,
          size: 'mini',
          column: [
            {
              label: '姓名',
              prop: 'name'
            },
            {
              label: '性别',
              prop: 'sex'
            }, {
              label: "日期",
              prop: "date",
              type: "date",
              format: "yyyy-MM-dd hh:mm:ss",
              valueFormat: "yyyy-MM-dd hh:mm:ss",
            }
          ]
        }
      }
    },
    methods: {
      //弹出表单前的操作
      beforeOpen(done,type){
        this.$alert(`我是${type}`, {
          confirmButtonText: '确定',
          callback: action => {
            if(['views','edit'].includes(type)){
              // 查看和编辑逻辑
            }else{
              //新增逻辑
              //一定要用setTimeout包裹，由于form组件底层一些机制的设计
              setTimeout(()=>{
                this.form.name='初始化赋值'
              },0)
            }
            done();
          }
        });
      },
      onLoad(page) {
        console.log(page)
        this.$message.success('分页信息:' + JSON.stringify(page))
        this.page.total = 40
        //模拟分页
        if (this.page.currentPage === 2) {
          this.data = [
            {
              name: '张三',
              sex: '男'
            },{
              name: '李四',
              sex: '女'
            }
          ]
        } else if (this.page.currentPage === 3) {
          this.data = [
            {
              name: '王五',
              sex: '女'
            },{
              name: '赵六',
              sex: '女'
            }
          ]
        }
      },
      //改变页码
      sizeChange(val) {
        this.page.pageSize = val
        this.$message.success('行数' + val)
      },
      //改变页数
      currentChange(val) {
        this.$message.success('页码' + val)
      }
    }
  }
</script>

<style>
</style>
