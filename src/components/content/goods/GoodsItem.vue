<template>
  <div class="goods-item">
    <van-image class="item-img" :src="showImg" fit="cover" lazy-load alt></van-image>
    <div class="item-info">
      <div class="item-title">{{ goodsItem.title }}</div>
      <div class="price-box">
        <div class="price">{{ goodsItem.price }}</div>
        <div class="cellect">
          <van-icon name="star-o" style="transform: translateY(1px)" />
          <span class="count">{{ goodsItem.cfav }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      required: true
    }
  },
  computed: {
    showImg () {
      // 判断是首页还是详情
      return this.goodsItem.image || this.goodsItem.show.img
    }
  }
}
</script>

<style lang="less" scoped>
.goods-item {
  width: 48%;
  margin-top: 9px;
  padding-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
}

.item-img {
  width: 100%;
  height: 180px;
}

.item-info {
  margin-top: 8px;
  padding: 0 5px;
}

.price-box {
  display: flex;
  align-items: flex-end;
  margin-top: 8px;
}

.item-title {
  width: 100%;
  height: 2.3rem;
  min-height: 0;
  line-height: 1.15rem;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.price,
.price::before {
  color: var(--color);
}

.price::before {
  content: '￥';
  font-size: 12px;
}

.cellect {
  margin-left: 12px;
  font-size: 14px;

  .count {
    padding: 0 2px;
  }
}
</style>
