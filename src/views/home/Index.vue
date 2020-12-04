<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-navbar">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>

    <div class="container" ref="wrapper">
      <!-- 轮播图 -->
      <swipe :banners="banners" />

      <!-- 推荐 -->
      <recommend :recommends="recommends" />

      <!-- 商品列表 -->
      <goods-show
        ref="goodsShow"
        v-model="activeTab"
        :goods-data="typesGoods"
        @load-more="loadMoreGoodsData"
      />
    </div>

    <back-top v-show="backTopShow" @click.native="backTop" />
  </div>
</template>

<script>
import NavBar from '@/components/common/nav-bar/NavBar'
import BackTop from '@/components/content/backtop/BackTop'
import Swipe from './components/Swipe'
import Recommend from './components/Recommend'
import GoodsShow from './components/GoodsShow'

import { getHomeMultiData, getHomeGoodsData } from '@/network/home'
import { backTopMixin } from '@/common/mixin'
import { debounce } from '@/common/utils'

export default {
  nmae: 'Home',

  mixins: [backTopMixin],

  data () {
    return {
      banners: [],
      recommends: [],
      typesGoods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      activeTab: 'pop'
    }
  },

  watch: {
    // 菜单切换，回到之前的位置
    activeTab (newTab, oldTab) {
      if (this.scrollTop[oldTab] >= 340) {
        const newScroll = this.scrollTop[newTab]
        this.$refs.wrapper.scrollTop = newScroll > 340 ? newScroll : 340
      }
      this.scrollTop[newTab] = this.$refs.wrapper.scrollTop
    }
  },

  created () {
    this.loadHomeMultiData()
    this.loadHomeGoodsData('pop')
    this.loadHomeGoodsData('new')
    this.loadHomeGoodsData('sell')
  },

  mounted () {
    this.scrolling()

    // 各菜单滑动的距离，非响应式
    this.scrollTop = Object.create(null)
  },

  activated () {
    // 进入时回到上次的位置
    this.$refs.wrapper.scrollTop = this.scrollTop[this.activeTab]
  },

  methods: {
    // 请求首页banner及推荐数据
    loadHomeMultiData () {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    // 请求首页商品数据
    loadHomeGoodsData (type) {
      const page = this.typesGoods[type].page + 1
      return getHomeGoodsData(type, page).then(res => {
        this.typesGoods[type].list.push(...res.data.list)
        this.typesGoods[type].page++
      })
    },
    // 上拉加载更多
    loadMoreGoodsData () {
      this.loadHomeGoodsData(this.activeTab).then(() => {
        this.$refs.goodsShow.loading = false
      })
    },
    // 监听滚动
    scrolling () {
      const wrapper = this.$refs.wrapper
      wrapper.onscroll = debounce(() => {
        this.scrollTop[this.activeTab] = wrapper.scrollTop
        this.backTopIsShow()
      }, 20)
    }
  },

  components: {
    NavBar,
    BackTop,
    Swipe,
    Recommend,
    GoodsShow
  }
}
</script>

<style scoped>
#home {
  position: relative;
  background-color: var(--background-color);
}

.home-navbar {
  position: fixed;
  top: 0;
  color: #fff;
  background-color: var(--color);
  letter-spacing: 3px;
  z-index: 10;
}

.container {
  position: absolute;
  top: 44px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
  overflow-y: scroll;
}
</style>
