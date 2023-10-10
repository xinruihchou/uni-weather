import {
	request
} from './request.js'   // 引入request模块
export function getGeodecode(longitude, latitude) {   // 定义函数，获取经纬度对应的地理位置信息，传入经度和纬度两个参数
	return new Promise((resolve, reject) => {  // 返回一个Promise对象，用于异步处理数据，实现异步操作
		request({   // 调用request函数，发起请求
			url: '/location/geodecode',  // 请求地址，指向地理位置解码API接口
			data: {   // 请求参数，包括经度、纬度、以及APPKEY（应用密钥）
				longitude,
				latitude,
				APPKEY:'NSSFSUUR3R9T'
			}
		}).then((data) => {   // 请求成功时的回调函数，将返回的数据传递给resolve函数
			resolve(data)
		}).catch((e) => {  // 请求失败时的回调函数，将错误信息传递给reject函数
			reject(e)
		})
	})
}
