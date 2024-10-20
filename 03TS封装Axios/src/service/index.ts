import WDRequest from './request'
import { BASE_URL,TIME_OUT} from './config'

// 实例化两个可复用的请求对象
// 第一个请求对象是默认服务器的请求对象，
// 第二个请求对象是爱彼迎服务器的请求对象，所有通过这个对象发起的请求都会带有拦截器

const wdRequest1 = new WDRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
})


const wdRequest2 = new WDRequest({
    baseURL: "http://codercba.com:1888/airbnb/api",
    timeout: 3000,
    interceptors:{
        requestSuccessFn: (config) => {
            console.log('爱彼迎的请求拦截器成功🔼')
            return config
        },
        requestErrorFn: (error) => {
            console.log('爱彼迎的请求拦截器失败', error)
        },
        responseSuccessFn: (response) => {
            console.log('爱彼迎的响应拦截器成功🔽=',response)
            return response
        },
        responseErrorFn: (error) => {
            console.log('爱彼迎的响应拦截器失败', error)
        }
    }
})

export{
    wdRequest1,
    wdRequest2
}