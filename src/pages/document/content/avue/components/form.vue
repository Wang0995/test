<template>
  <div style="width: 90%; padding: 20px">
    <avue-form
      :option="option"
      v-model="obj"
      @submit="submit"
      @reset-change="resetForm"
      @error="error"
      :upload-preview="uploadPreview"
      :upload-delete="uploadDelete"
      :upload-before="uploadBefore"
    >
      <template slot="group1Header">
        <h4>自定义表头</h4>
      </template>
    </avue-form>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
  import {getSexData, getCascader1} from "../../../../../api/mockApi";

  let id = 0;
  let baseUrl = 'https://cli.avuejs.com/api/area';
  const dic = [{
    value: 'zhinan',
    label: '指南',
    children: [{
      value: 'shejiyuanze',
      label: '设计原则',
      children: [{
        value: 'yizhi',
        label: '一致'
      }, {
        value: 'fankui',
        label: '反馈'
      }]
    }]
  }]

  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        obj: {
          //在这里可以设置默认值，其他option中的组件的prop值都默认在obj里，可以参考重复输入密码框的校验
          name: '张三',
          sex: 'nan',
          right: 1,
          //需转换格式，否则提交格式不对（此处为未转换格式）
          datetimerange: [new Date(2000, 10, 10, 10, 10, 55), new Date(2000, 10, 11, 10, 10)],
          cascader: ["3"],
          imgUrl: [{
            label: "avue@226d5c1a_image.png",
            value: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
          },]
        },
        allData: {
          sexData: '',
          interests: [{
            label: 'Vue.js',
            value: 'v'
          }, {
            label: 'React.js',
            value: 'r'
          }, {
            label: 'Angular.js',
            value: 'a'
          }],
          right: [{
            label: '正确',
            value: 1
          }, {
            label: '错误',
            value: 0
          }],
          cascader: '',
          cascader1: [{
            label: '二级1',
            value: '1.1',
            leaf: true,
          }, {
            label: '二级2',
            value: '2.1',
            leaf: true,
          }, {
            label: '二级3',
            value: '3.1',
            leaf: true,
          }],
        },
      };
    },

    computed: {
      option() {
        //自定义校验规则
        const validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            callback();
          }
        };
        const validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.obj.password) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };

        return {
          tabs: true,
          size: "mini",
          group: [
            {
              icon: 'el-icon-info',
              label: '分组1',
              prop: 'group1',
              column: [{
                label: '内容1',
                prop: 'text1',
              }]
            }, {
              icon: 'el-icon-info',
              label: '分组2',
              prop: 'group2',
              column: [{
                label: '选项卡2',
                prop: 'text2',
              }, {
                label: '选项卡3',
                prop: 'text3',
              }]
            }
          ],
          column: [
            {
              label: '姓名',
              prop: 'name',
              rules: [{
                required: true,
                message: "请输入姓名",
                trigger: "change"
              }]
            },
            {
              label: '别名',
              prop: 'otherName',
              tip:'我是一个左边提示语',
              tipPlacement:'left',
            },
            {
              label: '密码',
              prop: 'password',
              type: 'password',
              tip:'我是一个左边提示语',
              tipPlacement:'left',
              rules: [{required: true, validator: validatePass, trigger: 'blur'}]
            },
            {
              label: '确认密码',
              prop: 'oldpassword',
              type: 'password',
              rules: [{validator: validatePass2, trigger: 'blur'}]
            },
            {
              label: "性别",
              prop: 'sex',
              type: "select",
              props: {
                label: 'sex',
                value: 'id',
                children: 'code',
              },
              dicData: this.allData.sexData,
              change: ({value, column}) => {
                //console.log(value, column)
              },
              click: () => {
                console.log('aaa')
              }
            },
            {
              label: "兴趣",
              prop: "interests",
              type: "checkbox",
              dicData: this.allData.interests,
            },
            {
              label: "是否正确",
              prop: "right",
              type: "radio",
              dicData: this.allData.right,
              // change: ({value, column}) => {
              //   console.log(value, column)
              //   this.$message.success('change')
              // }
            },
            {
              label: '自定义评分',
              prop: 'score',
              type: 'rate',
              showText: true,
              texts: ['极差', '失望', '一般', '满意', '惊喜'],
              colors: ['#006bff', '#ffb400', '#ff0000']
            },
            {
              label: "日期范围",
              prop: "daterange",
              type: "daterange",
              startPlaceholder: '日期开始范围自定义',
              endPlaceholder: '日期结束范围自定义',
              pickerOptions: {
                disabledDate(time) {
                  //不能选择今天和之后的日期
                  return time.getTime() > Date.now() - 8.64e7;
                }
              }
            },
            {
              label: "时间日期范围",
              prop: 'datetimerange',
              type: 'datetimerange',
              startPlaceholder: '时间日期开始范围自定义',
              endPlaceholder: '时间日期结束范围自定义',
              pickerOptions: {
                disabledDate(time) {
                  //不能选择今天之前的日期
                  return time.getTime() < Date.now() - 8.64e7;
                }
              },
              format: "yyyy-MM-dd hh:mm:ss",
              valueFormat: "yyyy-MM-dd hh:mm:ss",
            },
            {
              label: '任意一级',
              prop: 'cascader',
              type: "cascader",
              checkStrictly: true,
              props: {
                expandTrigger: 'click',
                lazy: true,
                //箭头函数可以解决一些this问题
                lazyLoad: (node, resolve) => {
                  let level = node.level;
                  console.log(level)
                  if (level === 0) {
                    setTimeout(() => {
                      const nodes = this.allData.cascader;
                      // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                      resolve(nodes);
                    }, 500);
                  }
                  if (level === 1) {
                    setTimeout(() => {
                      console.log(node)
                      this.$message.success('选项的value为' + node.data.value)
                      const nodes = this.allData.cascader1;
                      // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                      resolve(nodes);
                    }, 500);
                  }
                  if (level === 2) {
                    setTimeout(() => {
                      // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                      resolve();
                    }, 500);
                  }
                }
              },
            },
            {
              label: '测试',
              prop: 'cascadertest',
              type: "cascader",
              //dicData: this.allData.cascader,
              checkStrictly: true,
              props: {
                expandTrigger: 'click',
                lazy: true,
                //箭头函数可以解决一些this问题
                lazyLoad: (node, resolve) => {
                  const {level} = node;
                  setTimeout(() => {
                    const nodes = Array.from({length: level + 1})
                      .map(item => ({
                        value: ++id,
                        label: `选项${id}`,
                        leaf: level >= 2
                      }));
                    // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                    resolve(nodes);
                  }, 1000);
                }
              },
            },
            {
              label: '',
              labelWidth: 40,
              prop: 'divider',
              component: 'elDivider',
              span: 24,
              params: {
                html: '<h2 style="color:red">EL分割线</h2>',
                contentPosition: "center",
              }
            },
            {
              label: '多文本框',
              span: 24,
              prop: 'textarea',
              type: 'textarea',
              minRows: 4,
              placeholder: '哈哈哈哈',
              maxlength: 200,
              showWordLimit: true
            },
            {
              label: '搜索内容',
              prop: 'search',
              type: 'search',
              appendClick: () => {
                this.$message.success('搜索回调' + this.obj.search);
              }
            },
            {
              label: '分组',
              prop: 'selectGroup',
              type: 'select',
              group: true,
              dicData: [{
                label: '热门城市',
                groups: [{
                  value: 'Shanghai',
                  label: '上海'
                }, {
                  value: 'Beijing',
                  label: '北京'
                }]
              }, {
                label: '城市名',
                groups: [{
                  value: 'Chengdu',
                  label: '成都'
                }, {
                  value: 'Shenzhen',
                  label: '深圳'
                }, {
                  value: 'Guangzhou',
                  label: '广州'
                }, {
                  value: 'Dalian',
                  label: '大连'
                }]
              }]
            },
            {
              label: '照片墙',
              prop: 'imgUrl',
              type: 'upload',
              span: 24,
              listType: 'picture-card',
              tip: '只能上传jpg/png文件，且不超过500kb',
              propsHttp: {
                res: 'data'
              },
              action: '/imgupload'
            },
            {
              label: '',
              labelWidth: 40,
              prop: 'divider1',
              component: 'elDivider',
              span: 24,
              params: {
                html: '<h2 style="color:red">信息联动</h2>',
                contentPosition: "center",
              }
            },
            {
              label: '省份',
              prop: 'department',
              type: 'select',
              props: {
                label: 'name',
                value: 'code'
              },
              cascaderItem: ['city', 'area'],
              dicUrl: `${baseUrl}/getProvince`,
              dicFormatter:(res)=>{
                return res.data;//返回字典的层级结构
              },
              rules: [
                {
                  required: true,
                  message: '请选择省份',
                  trigger: 'blur'
                }
              ]
            },
          ],

        }
      },
    },

    created() {
      //调用接口
      this.init();
    },

    methods: {
      async init() {
        const sexData = await getSexData();
        if (sexData.data.success) {
          this.allData.sexData = sexData.data.data;
        } else {
          console.log("接口调用失败")
        }
        const cascader1 = await getCascader1();
        if (cascader1.data.success) {
          this.allData.cascader = cascader1.data.data;
          console.log(cascader1.data.data)
        } else {
          console.log("接口调用失败")
        }
      },

      submit(form, done) {
        //this.$message.success(JSON.stringify(form));
        console.log(form)
        //done()使loading动作停止，可以在成功后调用此函数
        setTimeout(function () {
          done();
        }, 1500)
      },

      resetForm(form, done) {
        this.$message.success('清空方法回调');
        done();
      },

      error(err) {
        this.$message.success('请查看控制台');
        console.log(err)
      },

      uploadDelete(column, file) {
        return this.$confirm(`是否删除该照片？`);
      },

      async uploadBefore(file, done, loading, column) {
        let picName = file.name;
        let picUrl = URL.createObjectURL(file);
        let bs64 = await this.getBase64(file);
        //这里的value可以用picUrl或者bs64赋值都可以
        this.obj.imgUrl.push({label: picName, value: picUrl});
        loading();
      },

      uploadPreview(file, column, done) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },


      getBase64(file) {
        return new Promise(function (resolve, reject) {
          let reader = new FileReader()
          let imgResult = ''
          reader.readAsDataURL(file)
          reader.onload = function () {
            imgResult = reader.result
          }
          reader.onerror = function (error) {
            reject(error)
          }
          reader.onloadend = function () {
            resolve(imgResult)
          }
        })
      },

    },

    watch: {
      //监听v-model双向绑定的prop的组件，可以在这里写值改变调用方法
      'obj.sex': function (value, lastValue) {
        console.log('value:' + value + '   lastValue:' + lastValue)
      },
    }
  }
</script>

<style lang="scss">
  .el-scrollbar__wrap {
    overflow: auto;
  }

  .el-rate__item {
    margin-top: -7px;
  }

  .el-rate__text {
    margin-top: -17px;
  }
</style>
