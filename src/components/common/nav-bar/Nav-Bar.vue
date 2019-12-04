<template>
	<div class="nav-bar">
		<div class="left">
			<slot name="left"></slot>
		</div>
		<div class="center">
			<slot name="center"></slot>
		</div>
		<div class="right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
.nav-bar {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  border-bottom: 1px solid rgba(233, 233, 233, 0.3);
}
.left, .right{
  width: 60px;
}
.center{
  flex: 1;
}
</style>