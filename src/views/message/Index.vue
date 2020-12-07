<template>
  <div id="message" class="wrapper">
    <nav-bar>
      <template #center>
        <div class="title">消息中心</div>
      </template>
    </nav-bar>
    <div class="card">
      <msg-card v-for="(item, index) in msg" :msg="item" :key="index" />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/nav-bar/NavBar'
import MsgCard from './components/MsgCard'

export default {
  name: 'message',
  data () {
    return {
      msg: [
        {
          user: '东风快递',
          avatar: '',
          text: '您的东风-26已发货，请注意查收！欢迎再次光临！',
          date: '刚刚'
        },
        {
          user: 'Mr.马',
          avatar: '',
          text: '氪不氪以？',
          date: '昨天'
        },
        {
          user: 'Dad.马',
          avatar: '',
          text: '996是福报！',
          date: '2019/01/03'
        },
        {
          user: '老子',
          avatar: '',
          text: '祸兮，福之所倚；福兮，祸之所伏。',
          date: '2019/01/03'
        }
      ]
    }
  },
  components: {
    NavBar,
    MsgCard
  }
}
</script>

<style scoped>
#message {
  padding-top: 44px;
  padding-bottom: 50px;
  background-color: #fff;
}
.title {
  font-weight: 600;
  color: var(--text-color-dark);
}
</style>
