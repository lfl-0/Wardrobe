import Vue from 'vue'
import Vuex from 'vuex'
import storage from '@/utils/local-storage'

Vue.use(Vuex)

const state = {
  cartList: storage.getItem('cartList') || [],
  user: {
    name: '会飞的键盘',
    avatar: require('@/assets/img/profile/avatar.gif'),
    vip: '普通会员',
    collection: 12,
    coupon: 5,
    points: 666
  }
}

const store = new Vuex.Store({
  state,
  mutations: {
    addGoods ({ cartList }, goods) {
      cartList.push(goods)
      storage.setItem('cartList', cartList)
    },
    removeGoods ({ cartList }, index) {
      cartList.splice(index, 1)
      storage.setItem('cartList', cartList)
    },
    updateChecked ({ cartList }, { index, newValue = null }) {
      const goods = cartList[index]
      goods.checked = newValue || !goods.checked
      storage.setItem('cartList', cartList)
    },
    updateNum ({ cartList }, { index, newNum }) {
      cartList[index].num = newNum
      storage.setItem('cartList', cartList)
    }
  },
  actions: {
    addToCart ({ commit, state }, goods) {
      return new Promise(resolve => {
        const oldIndex = state.cartList.findIndex(
          item => item.xdSkuId === goods.xdSkuId
        )
        if (oldIndex !== -1) {
          // 已有该商品，增加数量
          const newNum = state.cartList[oldIndex].num + goods.num
          commit('updateNum', { index: oldIndex, newNum })
          resolve()
        } else {
          // 新加入商品
          commit('addGoods', goods)
          resolve()
        }
      })
    }
  }
})

export default store
