import {wdRequest1} from "../"


interface IHomeData {
    data: any[],
    returnCode: string,
    success: boolean
}

wdRequest1.request<IHomeData>({
    url: '/home/multidata',
}).then(res => {
    console.log("IHomeData=",res)
})

