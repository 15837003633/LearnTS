import wdRequest from '..'
import type { IAccount } from '@/type'
export function accountLoginRequest(data: IAccount) {
  return wdRequest.post({
    url: '/login',
    data: data
  })
}
