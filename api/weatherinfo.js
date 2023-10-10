// 导入request.js模块中的request函数
import {
    request
} from './request.js'

// 设置appkey
const APPKEY = "7X5ZZDY2MDRM"

// 封装获取天气预报信息的函数
export function getweatherinfoPre(keyword){
    // 返回一个Promise对象，使用resolve来返回成功的数据，使用reject来返回错误信息
    return new Promise((resolve,reject)=>{
        // 调用request函数，发送请求获取指定关键字的天气预报信息
        request({
            url:'/weather/weatherinfo/region',
            data:{
                keyword,
                appkey:APPKEY
            }
        }).then((data)=>{ // 请求成功的回调函数
            resolve(data) // 返回成功的数据
        }).catch((e)=>{ // 请求失败的回调函数
            reject(e) // 返回错误信息
        })
    })
}

// 封装获取未来天气预报信息的函数
export function getweatherinfo(code,days){
    // 返回一个Promise对象，使用resolve来返回成功的数据，使用reject来返回错误信息
    return new Promise((resolve,reject)=>{
        // 调用request函数，发送请求获取指定城市的天气预报信息
        request({
            url:'/weather/weatherinfo',
            data:{
                code,
                days,
                appkey:APPKEY
            }
        }).then((data)=>{ // 请求成功的回调函数
            resolve(data) // 返回成功的数据
        }).catch((e)=>{ // 请求失败的回调函数
            reject(e) // 返回错误信息
        })
    })
}
