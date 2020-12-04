import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: 'home' */ '@/views/home/Index.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () =>
      import(/* webpackChunkName: 'message' */ '@/views/message/Index.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () =>
      import(/* webpackChunkName: 'cart' */ '@/views/cart/Index.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () =>
      import(/* webpackChunkName: 'profile' */ '@/views/profile/Index.vue')
  },
  {
    path: '/detail/:goodsId',
    name: 'detail',
    props: true,
    component: () =>
      import(/* webpackChunkName: 'detail' */ '@/views/detail/Index.vue')
  },
  {
    path: '*',
    name: 'error404',
    component: () =>
      import(/* webpackChunkName: '404' */ '@/views/error/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
