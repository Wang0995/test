import Mock from 'mockjs'

function getSex() {
  const json = {code: 200, success: true, msg: '性别接口调用成功'};
  json.data = [{
    sex: '男',
    id: 'nan',
    code: 'MEN'
  }, {
    sex: '女',
    id: 'nv',
    code: 'WOMEN'
  }, {
    sex: '阴阳人',
    id: 'yinyang',
    code: 'SM'
  }];
  return json;
};

function getCascader1() {
  const json = {code: 200, success: true, msg: '级联选择器第一级调用成功'};
  json.data = [{
    label: '数学',
    value: '1'
  }, {
    label: '物理',
    value: '2'
  }, {
    label: '化学',
    value: '3',
    leaf: true,
  }];
  return json;
}


//Mock.mock('https://www.tianqiapi.com/api', 'get', getSex());

export default ({mock}) => {
  if (!mock) return;
  //需要带上参数才能成功拦截
  //Mock.mock('https://www.tianqiapi.com/api?version=v6&appid=89736532&appsecret=HNw4pM0K', 'get', getSex());
  Mock.mock('/api/sexData', 'get', getSex());
  Mock.mock('/api/cascader1', 'get', getCascader1());
}
