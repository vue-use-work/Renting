'use strict'

import axios from 'axios'

axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode (res) {
  // console.log("++++++++++++++++console.log(res) +++")
  // console.log(res)
  // if (res.code === '400') {
  //   //alert(res.msg)
  //   // this.$message(res.msg);
  //   return false
  // }
  return res.responsebody || res
}

export default {
  post (url, data) {
    return axios({
      method: 'post',
      baseURL: '',
      url,
      data: data,
      timeout: 10000,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },

  get (url, params) {
    return axios({
      method: 'get',
      url,
      data: {},
      params, // get 请求时带的参数
      timeout: 10000,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  },

  put (url, data) {
    return axios({
      url,
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data,
      timeout: 1000,
      withCredentials: false,
      responseType: 'json',
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  },

  delete (url, data) {
    return axios({
      url,
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data,
      timeout: 1000,
      withCredentials: false,
      responseType: 'json',
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  }

}
