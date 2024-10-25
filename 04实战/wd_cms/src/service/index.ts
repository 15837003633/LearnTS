import WDRequest from './request'
import { BASE_URL, TIME_OUT } from './config'

// 实例化两个可复用的请求对象
// 第一个请求对象是默认服务器的请求对象，
// 第二个请求对象是爱彼迎服务器的请求对象，所有通过这个对象发起的请求都会带有拦截器

const wdRequest = new WDRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default wdRequest
