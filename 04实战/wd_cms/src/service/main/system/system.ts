import wdRequest from '@/service'

// 针对用户管理的crud
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

//针对通用页面的crud

export function pageListRequest(pageName: string, queryInfo: any) {
  return wdRequest.post({
    url: `/${pageName}/list`,
    data: {
      ...queryInfo
    }
  })
}

export function deletePageById(pageName: string, id: number) {
  return wdRequest.delete({
    url: `/${pageName}/${id}`
  })
}

export function newPageDataRequest(pageName: string, userInfo: any) {
  return wdRequest.post({
    url: `/${pageName}`,
    data: userInfo
  })
}

export function updatePageDataRequest(pageName: string, uid: number, userInfo: any) {
  return wdRequest.patch({
    url: `/${pageName}/${uid}`,
    data: userInfo
  })
}
