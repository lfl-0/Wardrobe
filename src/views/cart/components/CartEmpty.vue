<template>
  <div class="cart-empty">
    <div class="img">
      <img src="~@/assets/img/cart/cart_empty.png" alt />
    </div>
    <button class="btn-gradient" @click="$router.push('/home')">去逛逛</button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.cart-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: #fff;
}
.img {
  margin-top: 25%;
  width: 100%;
}
.img img {
  width: 100%;
}
</style>
