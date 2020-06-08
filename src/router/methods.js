
//设置路由守护
export const guardRouter = (to, from, next) => {
  if (to.path == '/param') {
    alert('路由守护生效！')
    console.log(to,from)
    next();
  } else {
    next();
  }
};

