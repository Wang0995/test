import request from '../router/request'

export const getWeather = (params) => {
  return request({
    url: 'https://www.tianqiapi.com/api',
    method: 'get',
    params: params
  })
}


