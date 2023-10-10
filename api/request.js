// 定义常量 PRE_HTTP，表示接口的前缀
const PRE_HTTP = "https://api.gugudata.com"

// 定义request函数，接收一个对象作为参数，包括url、method、data三个属性
export function request({
	url,
	method = 'get',
	data
}) {
	return new Promise((resolve, reject) => {
		// 调用 uni.request 发送请求
		uni.request({
			// 拼接完整的请求地址
			url: PRE_HTTP + url,
			// 定义请求方法，默认为 GET
			method,
			// 定义请求参数
			data,
			// 请求成功回调函数
			success(data) {
				resolve(data)
			},
			// 请求失败回调函数
			fail(e){
				reject(e)
			}
		})
	})
} 
