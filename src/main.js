import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'

import Vant from 'vant'
import { Lazyload } from 'vant'
import 'vant/lib/index.less'

Vue.use(Vant)
Vue.use(Lazyload)

FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
