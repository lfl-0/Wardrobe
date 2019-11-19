import { request } from "./request"

export function getDetail(goodsId) {
  return request({
    url: '/detail',
    params: {
      iid: goodsId
    }
  })
}