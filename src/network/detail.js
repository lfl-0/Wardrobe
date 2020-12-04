import { request } from './request'

function getDetail (goodsId) {
  return request({
    url: '/detail',
    params: {
      iid: goodsId
    }
  })
}

function getRecommend () {
  return request({
    url: '/recommend'
  })
}

class GoodsInfoData {
  // 商品基本信息
  constructor (goods) {
    this.title = goods.itemInfo.title
    this.lowPrice = goods.itemInfo.lowPrice
    this.lowNowPrice = goods.itemInfo.lowNowPrice
    this.columns = goods.columns
    this.services = goods.shopInfo.services
  }
}

class Sku {
  // 商品sku信息
  constructor (skuInfo) {
    this.tree = []
    this.list = []
    this.price = skuInfo.defaultPrice.replace(/¥/g, '')
    this.stock_num = skuInfo.totalStock
    this.collection_id = skuInfo.skus[0].xdSkuId
    this.none_sku = false
    this.hide_stock = false
    this.message = [
      {
        // 商品留言
        datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
        multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
        name: '留言', // 留言名称
        type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
        required: '0', // 是否必填 '1' 表示必填
        placeholder: '' // 可选值，占位文本
      }
    ]

    for (const prop of skuInfo.props) {
      const temp = {
        // 临时储存一个规格类型对象
        k: '',
        v: [],
        k_s: ''
      }
      temp.k = prop.label.replace(':', '')
      temp.k_s = prop.list[0].type
      for (const item of prop.list) {
        temp.v.push({
          id: item.index,
          name: item.name
        })
      }
      this.tree.push(temp)
    }

    for (const item of skuInfo.skus) {
      this.list.push({
        id: item.xdSkuId,
        price: item.nowprice,
        [this.tree[0].k_s]: item[this.tree[0].k_s + 'Id'],
        [this.tree[1].k_s]: item[this.tree[1].k_s + 'Id'],
        s3: '0',
        stock_num: item.stock
      })
    }
  }
}

export { getDetail, GoodsInfoData, getRecommend, Sku }
