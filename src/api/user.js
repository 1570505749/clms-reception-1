import api from './index'
import request from '@/utils/request'

export function login(data) {
  return request({
    url: api.Login + `?username=` + data.username + '&password=' + data.password,
    method: 'post',
    transformResponse: [function(data) {
      return JSON.parse(data)
    }]
  })
}
export function smsLogin(data) {
  return request({
    url: 'authentication/mobile?' + `mobile=` + data.mobile + '&smsCode=' + data.smsCode,
    method: 'post',
    transformResponse: [function(data) {
      return JSON.parse(data)
    }]
  })
}
export function register(data) {
  return request({
    url: '/register?' + `mobile=re` + data.mobile + '&smsCode=' + data.smsCode,
    method: 'post',
    data: data
  })
}
export function getSmsCaptcha(parameter) {
  return request({
    url: api.SendSms,
    method: 'post',
    data: parameter
  })
}

export function getInfo(params) {
  return request({
    url: api.UserInfo,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params
  })
}
export function getUserById(id) {
  return request({
    url: '/getUserById/' + id,
    method: 'get'
  })
}

export function SmsCaptcha(mobile) {
  return request({
    url: '/code/sms?mobile=' + mobile + '',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

export function isLogin() {
  return request({
    url: '/isLogin',
    method: 'post'
  })
}
