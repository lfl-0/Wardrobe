<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar v-show="isShow" />
  </div>
</template>

<script>
import MainTabBar from '@/components/content/main-tab-bar/MainTabBar'

export default {
  components: {
    MainTabBar
  },
  computed: {
    isShow () {
      return ['home', 'message', 'cart', 'profile'].includes(this.$route.name)
    }
  }
}
</script>

<style></style>
