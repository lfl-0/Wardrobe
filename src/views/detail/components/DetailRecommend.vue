<template>
  <div>
    <van-divider>看了又看</van-divider>
    <goods-list :goods-list="recommends" />
    <van-divider>已经到底了</van-divider>
  </div>
</template>

<script>
import GoodsList from '@/components/content/goods/GoodsList'
import { getRecommend } from '@/network/detail'

export default {
  data () {
    return {
      recommends: []
    }
  },

  created () {
    this.loadRecommend()
  },

  methods: {
    // 请求推荐数据
    loadRecommend () {
      getRecommend().then(res => {
        this.recommends = res.data.list
      })
    }
  },

  components: {
    GoodsList
  }
}
</script>

<style></style>
