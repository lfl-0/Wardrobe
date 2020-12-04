<template>
  <van-swipe class="swipe" :autoplay="3000" indicator-color="#fff">
    <van-swipe-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" />
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
.swipe,
.swipe img {
  width: 100%;
  background-color: #fff;
}
</style>
