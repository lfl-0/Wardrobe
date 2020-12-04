<template>
  <div class="goods-list">
    <goods-item
      v-for="goods in goodsList"
      :goods-item="goods"
      :key="goods.iid"
      @click.native="toDetail(goods.iid)"
    />
  </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue'

export default {
  props: {
    goodsList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },

  methods: {
    toDetail (goodsId) {
      goodsId && this.$router.push({
        name: 'detail',
        params: {
          goodsId
        }
      })
    }
  },

  components: {
    GoodsItem
  }
}
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 7.5px;
  background-color: var(--background-color);
}
</style>
