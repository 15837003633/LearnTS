import type {AxiosRequestConfig,InternalAxiosRequestConfig, AxiosResponse} from 'axios';

export interface WDInterceptors<T = AxiosResponse> {
    requestSuccessFn?: (config: InternalAxiosRequestConfig)=>InternalAxiosRequestConfig
    requestErrorFn?: (error:any)=>any
    responseSuccessFn?: (res: T)=>T
    responseErrorFn?: (error: any)=>any
}

export interface WDRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: WDInterceptors<T>;
}