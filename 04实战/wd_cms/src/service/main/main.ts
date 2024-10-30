import wdRequest from '@/service'

export function entireRolesRequest() {
  return wdRequest.post({
    url: '/role/list'
  })
}

export function entireDepartmentsRequest() {
  return wdRequest.post({
    url: '/department/list'
  })
}
