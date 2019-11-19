import { request } from "./request"

function getDetail(goodsId) {
  return request({
    url: '/detail',
    params: {
      iid: goodsId
    }
  })
}

class GoodsInfoData {
  constructor(goods) {
    this.title = goods.itemInfo.title
    this.lowPrice = goods.itemInfo.lowPrice
    this.lowNowPrice = goods.itemInfo.lowNowPrice
    this.columns = goods.columns
    this.services = goods.shopInfo.services
  }
}

export { getDetail, GoodsInfoData }