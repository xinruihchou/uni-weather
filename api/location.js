// 引入 request.js 模块
import {
	request
  } from './request.js'
  
  // 定义 getGeodecode 方法，接受经度和纬度两个参数
  export function getGeodecode(longitude, latitude) {
	// 返回一个 Promise 对象，回调函数接受 resolve 和 reject 参数
	return new Promise((resolve, reject) => {
	  // 请求服务器接口，获取地理位置信息
	  request({
		url: '/location/geodecode', // 请求地址
		data: { // 请求参数
		  longitude, // 经度
		  latitude, // 纬度
		  APPKEY: 'NSSFSUUR3R9T' // APPKEY，用于鉴权
		}
	  }).then((data) => { // 请求成功回调函数
		resolve(data) // 将获取到的地理位置信息传入 resolve 函数
	  }).catch((e) => { // 请求失败回调函数
		reject(e) // 将错误信息传入 reject 函数
	  })
	})
  }
  