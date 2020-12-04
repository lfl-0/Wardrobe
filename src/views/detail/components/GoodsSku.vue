<template>
  <div class="sku">
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      @add-cart="addToCart"
      @buy-clicked="addToCart"
      :close-on-click-overlay="true"
    >
      <!-- 自定义 sku actions -->
      <template #sku-actions="props">
        <div class="sku-actions">
          <!-- 直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调 -->
          <van-goods-action-button
            type="danger"
            text="立即购买"
            @click="props.skuEventBus.$emit('sku:buy')"
          >
            买买买
          </van-goods-action-button>
        </div>
      </template>
    </van-sku>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsSku',

  props: {
    sku: {
      type: Object,
      default () {
        return {}
      }
    },
    skus: {
      type: Array,
      default () {
        return []
      }
    },
    goods: {
      type: Object,
      default () {
        return {}
      }
    },
    goodsId: {
      type: [String],
      required: true
    }
  },

  data () {
    return {
      show: false
    }
  },

  methods: {
    addToCart (skuData) {
      const id = skuData.selectedSkuComb.id
      const goods = this.skus.find(item => item.xdSkuId === id)

      const cartGoods = {
        ...goods,
        goodsId: this.goodsId,
        title: this.goods.title,
        num: skuData.selectedNum,
        checked: true
      }
      this.$store.dispatch('addToCart', cartGoods).then(() => {
        this.show = false
        this.$toast('加入成功')
      })
    }
  }
}
</script>

<style scoped>
.sku-actions {
  display: flex;
  flex-shrink: 0;
  padding: 8px 16px;
}
</style>
