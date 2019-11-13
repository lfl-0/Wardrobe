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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
	box-shadow: 0 4px 10px rgba(210, 210, 210, 0.3);
}
.left, .right{
  width: 60px;
}
.center{
  flex: 1;
}
</style>