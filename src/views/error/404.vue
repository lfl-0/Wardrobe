<template>
  <div
    style="display: flex; align-items: center; justify-content: center; width: 100v; height: 100vh;"
  >
    <van-empty image="error" description="404 访问的页面不存在">
      <button class="btn-gradient" @click="$router.push('/home')">
        去首页
      </button>
    </van-empty>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
