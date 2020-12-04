<template>
  <van-goods-action class="shadow">
    <van-goods-action-icon icon="chat-o" text="客服" />
    <van-goods-action-icon
      icon="cart-o"
      text="购物车"
      :badge="cartLen"
      @click="cartClick"
    />
    <van-goods-action-icon icon="shop-o" text="店铺" />
    <van-goods-action-button
      type="warning"
      text="加入购物车"
      @click="addCart"
    />
    <van-goods-action-button type="danger" text="立即购买" @click="addCart" />
  </van-goods-action>
</template>

<script>
export default {
  name: 'DetailGoodsAction',

  computed: {
    cartLen () {
      return this.$store.state.cartList.length || null
    }
  },

  methods: {
    addCart () {
      this.$emit('addCart')
    },
    cartClick () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang="less" scoped>
.shadow {
  box-shadow: 0 -3px 5px rgba(80, 80, 80, 0.034);
}
::v-deep .van-badge--fixed {
  right: 5px;
}
</style>
