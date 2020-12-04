import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/index.less'

import {
  Cell,
  Checkbox,
  CheckboxGroup,
  Card,
  Divider,
  Empty,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Image as VanImage,
  Icon,
  Lazyload,
  List,
  Rate,
  Stepper,
  Swipe,
  SwipeItem,
  SubmitBar,
  Sku,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  Tag
} from 'vant'

Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Cell)
Vue.use(Card)
Vue.use(Divider)
Vue.use(Empty)
Vue.use(GoodsAction)
Vue.use(GoodsActionButton)
Vue.use(GoodsActionIcon)
Vue.use(Icon)
Vue.use(Lazyload)
Vue.use(List)
Vue.use(Rate)
Vue.use(Stepper)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(SubmitBar)
Vue.use(Sku)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Tag)
Vue.use(VanImage)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
