<template>
  <div class="tools">
    <profile-cell>
      <template #icon>
        <img src="~@/assets/img/profile/钱包.png" alt />
      </template>
      <template #title>我的钱包</template>
    </profile-cell>
    <profile-cell>
      <template #icon>
        <img src="~@/assets/img/profile/每日签到.png" alt />
      </template>
      <template #title>每日签到</template>
    </profile-cell>
    <profile-cell>
      <template #icon>
        <img src="~@/assets/img/profile/收货地址.png" alt />
      </template>
      <template #title>收货地址</template>
    </profile-cell>
    <profile-cell>
      <template #icon>
        <img src="~@/assets/img/profile/服务中心.png" alt />
      </template>
      <template #title>服务中心</template>
    </profile-cell>
    <profile-cell>
      <template #icon>
        <img src="~@/assets/img/profile/客服电话.png" alt />
      </template>
      <template #title>
        <span>客服电话</span>
        <span style="float: right">028-12345678</span>
      </template>
    </profile-cell>
  </div>
</template>

<script>
import ProfileCell from './ProfileCell'

export default {
  components: {
    ProfileCell
  }
}
</script>

<style scoped>
.tools {
  margin-left: 15px;
}
</style>
