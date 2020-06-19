export default {
  dateToEn: function (a) {

  },
  //日期格式化
  dateIssue: function () {
    let date = new Date();
    const Y = date.getFullYear() + '-';
    const M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    const D = date.getDate();
    return Y+M+D;
  }
}
