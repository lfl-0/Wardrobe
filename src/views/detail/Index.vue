<template>
  <div class="detail" v-show="isShow">
    <detail-navbar v-model="currentNav" @change="changeNav" ref="navbar" />

    <div class="container" ref="wrapper">
      <detail-swiper :top-images="topImages" />
      <goods-base-info :goods-info="goodsInfo" />
      <goods-sku :goods-id="goodsId" :sku="sku" :skus="skus" :goods="goods" ref="goodsSKu" />
      <detail-rate :rate="rate" ref="rate" />
      <shop-info :shop-info="shopInfo" />
      <detail-info
        ref="detail"
        :detail-info-data="detailInfo"
        @img-load="getCompOffetTop"
      />
      <detail-recommend ref="recommends" />
    </div>

    <goods-action @addCart="addCart" />

    <back-top v-show="backTopShow" @click.native="backTop" />
  </div>
</template>

<script>
import DetailNavbar from './components/DetailNavbar'
import DetailSwiper from './components/DetailSwiper'
import GoodsBaseInfo from './components/GoodsBaseInfo'
import GoodsSku from './components/GoodsSku'
import DetailRate from './components/DetailRate'
import ShopInfo from './components/ShopInfo'
import DetailInfo from './components/DetailInfo'
import DetailRecommend from './components/DetailRecommend'
import GoodsAction from './components/GoodsAction'

import { getDetail, GoodsInfoData, Sku } from '@/network/detail'
import { debounce } from '@/common/utils'
import { backTopMixin } from '@/common/mixin'

export default {
  name: 'Detail',

  mixins: [backTopMixin],

  props: {
    goodsId: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      isShow: false,
      res: {},
      topImages: [],
      goodsInfo: {},
      rate: {},
      shopInfo: {},
      detailInfo: {},
      // 各板块距离顶部的距离
      compOffetTop: [0, 0, 0, 0],
      // 当前顶部导航栏活跃
      currentNav: 0,
      skus: [],
      sku: {},
      goods: {
        title: '',
        picture: ''
      }
    }
  },

  created () {
    this.loadGoodsDetail()
  },

  mounted () {
    this.scrolling()
  },

  methods: {
    // 请求商品数据
    loadGoodsDetail () {
      // 请求商品详情数据
      getDetail(this.goodsId).then(res => {
        const result = res.result
        this.res = res.result

        // 轮播图
        this.topImages = result.itemInfo.topImages
        // 基础信息
        this.goodsInfo = new GoodsInfoData(result)
        // 评论
        this.rate = result.rate
        // 店铺信息
        this.shopInfo = result.shopInfo
        // 详情图片信息
        this.detailInfo = result.detailInfo

        this.skus = result.skuInfo.skus

        // 规格用sku信息
        this.sku = new Sku(result.skuInfo)
        // 规格用goods信息
        this.goods.title = result.itemInfo.title
        this.goods.picture = result.itemInfo.topImages[0]

        this.isShow = true
      })
    },
    // 监听滚动
    scrolling () {
      const wrapper = this.$refs.wrapper
      wrapper.onscroll = debounce(() => {
        const compOffetTop = this.compOffetTop
        const scrollTop = wrapper.scrollTop

        // 是否显示回到顶部按钮
        this.backTopIsShow()

        // 已滚到最后一个板块
        if (scrollTop >= compOffetTop[3]) {
          this.currentNav = 3
          return
        }

        for (const i in compOffetTop) {
          if (
            scrollTop >= compOffetTop[+i] &&
            scrollTop < compOffetTop[+i + 1]
          ) {
            this.currentNav = +i
            break
          }
        }
      }, 30)
    },
    getCompOffetTop () {
      this.compOffetTop[1] = this.$refs.rate.$el.offsetTop - 44
      this.compOffetTop[2] = this.$refs.detail.$el.offsetTop - 44
      this.compOffetTop[3] = this.$refs.recommends.$el.offsetTop - 44
    },
    // 点击标题（商品、评论、详情、推荐）切换到相应位置
    changeNav (index) {
      this.$refs.wrapper.scrollTo(0, this.compOffetTop[index] + 2)
    },
    addCart () {
      this.$refs.goodsSKu.show = true
    }
  },
  components: {
    DetailNavbar,
    DetailSwiper,
    GoodsBaseInfo,
    GoodsSku,
    DetailRate,
    ShopInfo,
    DetailInfo,
    DetailRecommend,
    GoodsAction
  }
}
</script>

<style scoped>
.detail {
  position: relative;
  height: 100vh;
  width: 100vw;
  padding-top: 44px;
  padding-bottom: 50px;
  background-color: var(--background-color);
  overflow-x: hidden;
  overflow-y: scroll;
}
.container {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}
</style>
