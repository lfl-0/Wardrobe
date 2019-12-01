import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  cartList: []
}

const store = new Vuex.Store({
  state,
  getters: {
    cartLen(state) {
      return state.cartList.length
    },
    cartList(state) {
      return state.cartList
    }
  },
  mutations: {
    addCart(state, payload) {
      state.cartList.push(payload.goods)
    },
    addNum(state, payload) {
      payload.oldGoods.num += payload.num
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
          goods.checked = true
          commit('addCart', { goods })
          resolve()
        }
      })
    }
  }
})

export default store