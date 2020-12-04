<template>
  <div class="detail-info">
    <van-divider>商品详情</van-divider>
    <div
      class="detail-image"
      v-for="(images, index) in detailInfoData.detailImage"
      :key="index"
    >
      <van-image
        v-for="(item, i) in images.list"
        :key="i"
        :src="'http:' + item"
        fit="contain"
        @load="$emit('img-load')"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfoData: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.title {
  text-align: center;
}
.desc {
  font-size: 13px;
  color: var(--text-color-dark);
}
.detail-image {
  margin-top: 20px;
}
</style>
