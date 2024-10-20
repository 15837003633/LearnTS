import { wdRequest2 } from "../"

// 爱彼迎房间列表


//实例1：获取房间列表
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
    // 添加单次请求拦截器
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
  

//实例2：获取高评分房间
interface IHighScoreData {
    list: any[],
    subtitle: string,
    title: string
    type: string,
    _id: string
}

wdRequest2.get<IHighScoreData>({
    url: "/home/highscore",
    interceptors: {
      requestSuccessFn: (config) => {
        console.log("/home/highscore请求成功的拦截")
        return config
      },
      responseSuccessFn: (res) => {
        console.log("/home/highscore响应成功的拦截🔽=", res)
        return res
      }
    }
}).then(res => {
console.log("IHighScoreData=",res.list, res.subtitle, res.title)
})

  