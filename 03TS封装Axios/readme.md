
## 封装思路
1.基础请求封装 WDRequest
2.针对不同的BASE_URL的request实例，添加请求实例的拦截器
3.针对不同请求path，添加单次请求拦截器
4.返回结果类型使用泛型


封装的核心代码在src/service/request中，其他项目需要拷贝该目录下的文件即可


## 使用步骤

### 1.创建WDRequest实例

```javascript
// 一般一个域名对应一个WDRequest实例
const wdRequest2 = new WDRequest({
    baseURL: "http://codercba.com:1888/airbnb/api",
    timeout: 3000,

    // 可选，添加请求拦截器，针对所有通过该实例发起的请求
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
```

### 2.发起请求

```javascript

// 定义返回数据类型，相当于模型数据
interface IRoomListData {
    errcode: number,
    list: any[],
    totalCount: number
}


wdRequest2.request<IRoomListData>({
    url: "/entire/list",
    params: {
      offset: 0,
      size: 20
    },
    // 可选的，针对不同的Path添加单次请求拦截器
    interceptors: {
        requestSuccessFn: (config) => {
            console.log("单次请求拦截成功🔼")
            return config
        },
        responseSuccessFn: (response) => {
            console.log("单次响应拦截成功🔽=",response)
            return response
        },
    }
  }).then(res => {
    console.log("IRoomListData=",res.list)
  })
  
  ```