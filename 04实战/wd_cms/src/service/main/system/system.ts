import wdRequest from '@/service'

export function userListRequest() {
  return wdRequest.post({
    url: '/users/list',
    data: {
      offset: 0,
      size: 10
    }
  })
}
