<template>
	<div id="tab-bar">
    <slot></slot>
	</div>
</template>

<script>
export default {
  name: 'TabBar'
};
</script>

<style>
#tab-bar {
	display: flex;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;

	height: 60px;
	background-color: #fff;
	box-shadow: 0 -5px 10px rgba(210, 210, 210, 0.3);
}
</style>