<template>
  <van-list
    v-model="loading"
    :immediate-check="false"
    @load="$emit('load-more')"
  >
    <van-tabs
      :value="value"
      :offset-top="44"
      replace
      sticky
      animated
      swipeable
      title-active-color="var(--color)"
      color="var(--color)"
      @change="$emit('input', $event)"
    >
      <van-tab title="流行" name="pop">
        <goods-list :goods-list="goodsData.pop.list" />
      </van-tab>
      <van-tab title="新款" name="new">
        <goods-list :goods-list="goodsData.new.list" />
      </van-tab>
      <van-tab title="精选" name="sell">
        <goods-list :goods-list="goodsData.sell.list" />
      </van-tab>
    </van-tabs>
  </van-list>
</template>

<script>
import GoodsList from '@/components/content/goods/GoodsList.vue'

export default {
  props: {
    value: {
      type: String,
      required: true
    },
    goodsData: {
      type: Object,
      default: () => {}
    }
  },

  data () {
    return {
      loading: false
    }
  },

  components: {
    GoodsList
  }
}
</script>

<style></style>
