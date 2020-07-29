import axios from 'axios'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-urlencoded'
const http = axios.create()

axios.defaults.timeout = 3000

axios.interceptors.request.use(config => { // 请求拦截器配置 // 可不配置
  // do sth
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

axios.interceptors.response.use(response => { // 响应拦截器配置 // 可不配置
  // do something
  return response
}, error => {
  console.log(error)
  return Promise.reject(error)
})

export default axios;
