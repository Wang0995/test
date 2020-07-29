import request from '../router/request'

export const getSexData = () => {
  return request({
    url: '/api/sexData',
    method: 'get',
  })
}

export const getCascader1 = () => {
  return request({
    url: '/api/cascader1',
    method: 'get',
  })
}

export const getProvince = () => {
  return request({
    url: '/api/province',
    methodL: 'get'
  })
}

export const getCity = () => {
  return request({
    url: '/api/city',
    methodL: 'get'
  })
}

export const getArea = () => {
  return request({
    url: '/api/area',
    methodL: 'get'
  })
}
