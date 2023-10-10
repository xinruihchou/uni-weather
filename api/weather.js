// 导入封装好的request方法
import {create} from '@/utils/request.js'
const request = create();

/** 获取定位详情
 * @param {Object} data 请求参数，包含经纬度信息
 * @returns {Promise} 返回Promise对象
 */
const getLocationDetail= (data)=>{
	// 腾讯地图接口，获取经纬度对应的位置信息
	let url =`https://apis.map.qq.com/ws/geocoder/v1`
	return request.get(url,data)
}

/** 获取天气
 * @param {Object} data 请求参数，包含省市县信息
 * @returns {Promise} 返回Promise对象
 */
const getWeather= (data)=>{
	// 腾讯天气接口，获取指定地区的天气信息
	let url =`https://wis.qq.com/weather/common`
	return request.get(url,data)
}

// 导出两个函数，方便其他模块调用
export default {
	getWeather,
	getLocationDetail
} 
