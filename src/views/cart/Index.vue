<template>
  <div id="cart" class="wrapper">
    <nav-bar class="cart-nav">
      <template #center>
        <div class="title">购物车{{ cartLen > 0 ? `(${cartLen})` : '' }}</div>
      </template>
    </nav-bar>

    <div v-if="cartList.length" class="cart-list">
      <goods-card
        v-for="(goods, index) in cartList"
        :goods="goods"
        :key="goods.xdSkuId"
        @check="updateChecked({ index })"
        @num-change="handleNumChange(index, $event)"
      />
    </div>
    <cart-empty v-else />

    <van-submit-bar
      v-if="cartList.length"
      :price="totalPrice"
      button-text="提交订单"
    >
      <van-checkbox v-model="isCheckedAll" checked-color="var(--color)"
        >全选</van-checkbox
      >
    </van-submit-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/nav-bar/NavBar'
import GoodsCard from './components/GoodsCard'
import CartEmpty from './components/CartEmpty'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Cart',

  computed: {
    ...mapState(['cartList']),
    cartLen () {
      return this.cartList.length
    },
    totalPrice () {
      if (this.cartList.length) {
        const totalPrice = this.cartList.reduce((total, goods) => {
          if (!goods.checked) return total
          return total + goods.nowprice * goods.num
        }, 0)
        return totalPrice
      }
      return 0
    },
    isCheckedAll: {
      get () {
        return this.cartList.every(goods => goods.checked)
      },
      set (newValue) {
        this.cartList.forEach((goods, index) => {
          if (goods.checked !== newValue) {
            this.updateChecked({ index, newValue })
          }
        })
      }
    }
  },

  methods: {
    // 购物车相关 Vuex
    ...mapMutations(['updateChecked', 'updateNum', 'removeGoods']),
    handleNumChange (index, newNum) {
      if (newNum === 0) {
        this.removeGoods(index)
      } else {
        this.updateNum({ index, newNum })
      }
    }
  },

  components: {
    NavBar,
    GoodsCard,
    CartEmpty
  }
}
</script>

<style lang="less" scoped>
.title {
  font-weight: 600;
  color: var(--text-color-dark);
}
#cart {
  padding-top: 44px;
  background-color: var(--background-color);
}
.cart-nav {
  background-color: #fff;
  color: var(--text-color-dark);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.cart-list {
  position: absolute;
  top: 44px;
  bottom: 100px;
  left: 0;
  right: 0;
  padding-bottom: 5px;
  overflow-y: scroll;

  .checkbox {
    margin-left: 10px;
    width: 30px;
  }
  .van-card {
    background-color: #fff;
    border-radius: 5px;
  }
  .tags {
    line-height: 20px;
  }
  .van-tag {
    line-height: 15px;
    margin-right: 5px;
  }
}

.van-submit-bar {
  border-top: 1px solid #f1f1f1;
  bottom: 50px;
}
</style>
