import wdRequest from '@/service'
export function newStoryRequest(data: any) {
  return wdRequest.post({
    url: 'story',
    data
  })
}
