import wdRequest from '@/service'

export function entireRolesRequest(data?: any) {
  return wdRequest.post({
    url: '/role/list',
    data
  })
}

export function entireDepartmentsRequest(data?: any) {
  return wdRequest.post({
    url: '/department/list',
    data
  })
}

export function entireMenuListRequest(data?: any) {
  return wdRequest.post({
    url: '/menu/list',
    data
  })
}
