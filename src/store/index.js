import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  cartList: []
}

const store  = new Vuex.Store ({
  state,
  mutations: {
    addToCart(state, payload) {
      state.cartList.push(payload.goods)
    }
  }
})

export default store