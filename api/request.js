// 常量 PRE_HTTP 存储 API 的前缀
const PRE_HTTP = "https://api.gugudata.com"

// 定义 request 函数，接收一个请求对象作为参数，返回一个 Promise 对象
export function request({
	url, // 请求的 URL
	method = 'get', // 请求方法，默认为 GET
	data // 请求参数
}) {
	// 返回一个 Promise 对象
	return new Promise((resolve, reject) => {
		// 调用 uni.request 发起请求
		uni.request({
			url: PRE_HTTP + url, // 拼接请求的 URL
			method, // 请求方法
			data, // 请求参数
			success(data) { // 请求成功的回调函数
				resolve(data) // 将请求成功的数据传递给 Promise 的 resolve 函数
			},
			fail(e){ // 请求失败的回调函数
				reject(e) // 将请求失败的错误原因传递给 Promise 的 reject 函数
			}
		})
	})
}
