import wdRequest from '@/service'

export function goodAmountListRequest() {
  return wdRequest.get({
    url: '/goods/amount/list'
  })
}
