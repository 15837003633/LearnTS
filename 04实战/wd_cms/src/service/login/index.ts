import wdRequest from '..'
import type { IAccount } from '@/type'
export function accountLoginRequest(data: IAccount) {
  return wdRequest.post({
    url: '/login',
    data: data
  })
}

export function userInfoRequest(user_id: number) {
  return wdRequest.get({
    url: `/users/${user_id}`
  })
}

//查询角色菜单树
export function userMenuListRequest(user_id: number) {
  return wdRequest.get({
    url: `/role/${user_id}/menu`
  })
}
