import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  cartList: []
}

const store = new Vuex.Store({
  state,
  getters: {
    cartLen({ cartList }) {
      return cartList.length
    },
    totalPrice({ cartList }) {
      if (cartList.length) {
        const reducer = (total, goods) => total + goods.nowprice * goods.num
        const totalPrice = cartList.filter(goods => goods.checked).reduce(reducer, 0)
        return totalPrice
      } return 0
    },
    isSelectAll({ cartList }) {
      return cartList.every(goods => goods.checked);
    }
  },
  mutations: {
    addCart(state, payload) {
      state.cartList.push(payload.goods)
    },
    addNum(state, payload) {
      payload.oldGoods.num += payload.num
    },
    changeChecked(state, index) {
      let goods = state.cartList[index]
      goods.checked = !goods.checked
    },
    increase({ cartList }, index) {
      cartList[index].num++
    },
    decrease({ cartList }, index) {
      cartList[index].num--
    },
    // 全选与反选
    selectAll({ cartList }, current) {
      cartList.forEach(goods => {
        goods.checked = !current
      });
    }
  },
  actions: {
    addToCart({ commit, state }, goods) {
      return new Promise((resolve, reject) => {
        const oldGoods = state.cartList.find(item => item.xdSkuId == goods.xdSkuId)
        if (oldGoods) {
          // 已有该商品，增加数量
          let num = goods.num
          commit('addNum', { oldGoods, num })
          resolve()
        } else {
          // 新加入商品
          commit('addCart', { goods })
          resolve()
        }
      })
    }
  }

})

export default store