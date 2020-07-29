
//设置路由守护
export const guardRouter = (to, from, next) => {
  if (to.path == '/body/document/router/protect') {
    alert('路由守护生效！打开控制面板可看到打印的from和to！');
    console.log(to, from);
    next();
  } else {
    next();
  }
};

