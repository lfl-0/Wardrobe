<template>
  <div class="msg-card">
    <van-image
      class="avatar"
      :width="55"
      :height="55"
      :radius="10"
      fit="covar"
      :src="msg.avatar"
    >
    </van-image>
    <div class="right">
      <div class="name-date">
        <span class="name">{{ msg.user }}</span>
        <span class="date">{{ msg.date }}</span>
      </div>
      <div class="text">{{ msg.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: Object,
      default () {
        return {
          user: '',
          avatar: '',
          text: '',
          date: ''
        }
      }
    }
  }
}
</script>

<style scoped>
.msg-card {
  display: flex;
  align-items: center;
  height: 75px;
  padding-left: 15px;
}
.avatar {
  border: 1px solid #eeeeee;
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 65px);
  height: 100%;
  margin-left: 10px;
  border-bottom: 1px solid #f3f3f3;
}
.name-date {
  display: flex;
  justify-content: space-between;
  padding-right: 6px;
}
.name {
  font-size: 16px;
  color: var(--text-color-dark);
}
.date {
  font-size: 13px;
  color: var(--text-color);
}
.text {
  width: 220px;
  margin-top: 5px;
  color: var(--text-color);
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
