import wdRequest from '@/service'

export function userListRequest(queryInfo: any) {
  return wdRequest.post({
    url: '/users/list',
    data: {
      ...queryInfo
    }
  })
}

export function deleteUserById(id: number) {
  return wdRequest.delete({
    url: `/users/${id}`
  })
}

export function newUserDataRequest(userInfo: any) {
  return wdRequest.post({
    url: '/users',
    data: userInfo
  })
}

export function updateUserDataRequest(uid: number, userInfo: any) {
  return wdRequest.patch({
    url: `/users/${uid}`,
    data: userInfo
  })
}
