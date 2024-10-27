import WDRequest from './request'
import { BASE_URL, TIME_OUT } from './config'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/constants/login'

// 实例化两个可复用的请求对象
// 第一个请求对象是默认服务器的请求对象，
// 第二个请求对象是爱彼迎服务器的请求对象，所有通过这个对象发起的请求都会带有拦截器

const wdRequest = new WDRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // 添加请求拦截，token
    requestSuccessFn(config) {
      const token = localCache.get(LOGIN_TOKEN)
      // 添加判断，类型缩小
      if (config.headers && token) {
        config.headers.Authorization = 'Bearer ' + token
      }
      return config
    }
  }
})

export default wdRequest
