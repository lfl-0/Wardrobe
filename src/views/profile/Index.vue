<template>
  <div id="profile" class="wrapper">
    <nav-bar class="navbar">
      <template #center>
        <div class="title">个人中心</div>
      </template>
    </nav-bar>
    <message-card />
    <all-order />
    <profile-tools />
  </div>
</template>

<script>
import NavBar from '@/components/common/nav-bar/NavBar'
import MessageCard from './components/MessageCard'
import AllOrder from './components/AllOrder'
import ProfileTools from './components/Tools'

export default {
  name: 'profile',
  components: {
    NavBar,
    MessageCard,
    AllOrder,
    ProfileTools
  }
}
</script>

<style scoped>
.navbar {
  background-color: #fff;
}
#profile {
  background-color: #fff;
}
.title {
  font-weight: 600;
  color: var(--text-color-dark);
}
</style>
