<template>
  <van-tabbar route :z-index="100">
    <van-tabbar-item to="/home">
      <span>首页</span>
      <template #icon="props">
        <van-icon :name="props.active ? 'wap-home' : 'wap-home-o'" />
      </template>
    </van-tabbar-item>

    <van-tabbar-item to="/message">
      <span>消息</span>
      <template #icon="props">
        <van-icon :name="props.active ? 'chat' : 'chat-o'" />
      </template>
    </van-tabbar-item>

    <van-tabbar-item to="/cart" icon="cart" :badge="cartLen">
      <span>购物车</span>
      <template #icon="props">
        <van-icon :name="props.active ? 'cart' : 'cart-o'" />
      </template>
    </van-tabbar-item>

    <van-tabbar-item to="/profile" icon="manager">
      <span>我的</span>
      <template #icon="props">
        <van-icon :name="props.active ? 'manager' : 'manager-o'" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'MainTabBar',

  computed: {
    cartLen () {
      return this.$store.state.cartList.length || null
    }
  }
}
</script>

<style></style>
