import axios from 'axios'
import type { AxiosInstance} from 'axios'
import type{ WDRequestConfig } from './type'

class WDRequest {
    instance: AxiosInstance

    constructor(config: WDRequestConfig) {
        // 创建axios实例
        this.instance = axios.create(config)
        // 添加全局请求拦截器
        this.instance.interceptors.request.use(config => {
            console.log('全局请求拦截器🔼')
            return config
        },error=>{
            console.log('全局请求拦截器错误',error)
            return error    
        })
        this.instance.interceptors.response.use(response => {
            console.log('全局响应拦截器🔽')
            return response.data
        },error=>{
            console.log('全局响应拦截器错误',error)
            return error
        })

        // 添加自定义拦截器
        this.instance.interceptors.request.use(
            config.interceptors?.requestSuccessFn,
            config.interceptors?.requestErrorFn
        )
        this.instance.interceptors.response.use(
            config.interceptors?.responseSuccessFn,
            config.interceptors?.responseErrorFn
        )
    }

    request<T = any>(config: WDRequestConfig<T>){
        // 单次请求拦截
        if (config.interceptors?.requestSuccessFn){
            config = config.interceptors.requestSuccessFn(config as any)
        }
        return new Promise<T>((resolve,reject)=>{
            // 发送axios请求
            this.instance.request<any,T>(config).then(res=>{
                // 单次响应拦截
                if (config.interceptors?.responseSuccessFn){
                    res = config.interceptors.responseSuccessFn(res)
                }
                resolve(res)
            }).catch(err=>{
                // 单次响应拦截
                if (config.interceptors?.responseErrorFn){
                    err = config.interceptors.responseErrorFn(err)
                }
                reject(err)
            })
        })
    }

    get<T = any>(config: WDRequestConfig<T>){
       return this.request<T>({...config, method: 'GET'})
    }

    post<T = any>(config: WDRequestConfig<T>){
        return this.request<T>({...config, method: 'POST'})
    }

    delete<T = any>(config: WDRequestConfig<T>){
        return this.request<T>({...config, method: 'DELETE'})
    }
 
    patch<T = any>(config: WDRequestConfig<T>){
         return this.request<T>({...config, method: 'PATCH'})
    }


}

export default WDRequest