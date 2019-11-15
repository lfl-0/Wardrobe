<template>
	<div class="back-top">
		<van-icon name="arrow-up" />
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.back-top {
	position: fixed;
	right: 12px;
	bottom: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
	font-size: 25px;
  color: var(--color);
  border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 1px 1px 3px rgba(100, 100, 100, 0.3);
}
</style>