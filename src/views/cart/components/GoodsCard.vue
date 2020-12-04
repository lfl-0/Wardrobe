<template>
  <div class="goods-card">
    <div class="checkbox">
      <van-checkbox
        :value="goods.checked"
        checked-color="var(--color)"
        @click.native="$emit('check')"
      />
    </div>
    <div class="img" @click="toDetailPage">
      <van-image
        width="90px"
        height="90px"
        fit="cover"
        :src="'http:' + goods.img"
      />
    </div>
    <div class="card">
      <div class="title" @click="toDetailPage">{{ goods.title }}</div>
      <div class="tags">
        <van-tag plain>{{ goods.style }}</van-tag>
        <van-tag plain>{{ goods.size }}</van-tag>
      </div>
      <div class="bottom">
        <div class="price">{{ goods.nowprice | formatPrice }}</div>
        <div class="control">
          <van-stepper
            :value="goods.num"
            :min="0"
            integer
            @change="$emit('num-change', $event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartGoodsCard',

  props: {
    goods: {
      type: Object,
      required: true
    }
  },

  methods: {
    toDetailPage () {
      this.$router.push({
        name: 'detail',
        params: {
          goodsId: this.goods.goodsId
        }
      })
    }
  },

  filters: {
    formatPrice (price) {
      return (price / 100).toFixed(2)
    }
  }
}
</script>

<style scoped>
.goods-card {
  display: flex;
  justify-content: center;
  height: 115px;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 10px;
}
.checkbox {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 8px;
}
.img {
  margin-top: 10px;
}
.card {
  height: 100%;
  margin: 0 8px;
}
.title {
  max-height: 30px;
  line-height: 16px;
  margin-top: 10px;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: var(--text-color-dark);
}
.tags {
  margin-top: 8px;
}
.van-tag {
  line-height: 14px;
  margin-right: 5px;
}
.bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  height: 20px;
}
</style>
