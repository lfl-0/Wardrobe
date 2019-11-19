<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive">
			<slot name="item-icon">icon</slot>
		</div>
		<div v-else>
			<slot name="item-icon-active">icon-active</slot>
		</div>
		<div :style="activeStyle">
			<slot name="item-text">text</slot>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		isActive() {
			return this.$route.path.includes(this.path);
		},
		activeStyle() {
			return this.isActive ? { color: this.activeColor } : {};
		}
	},
	props: {
		path: String,
		activeColor: {
			type: String,
			default: "#ff8db7"
		}
	},
	methods: {
		itemClick() {
			if (!this.isActive) {
				this.$router.replace(this.path);
			}
		}
	}
};
</script>

<style >
.tab-bar-item {
	flex-grow: 1;

	text-align: center;
  font-size: 13px;
  line-height: 1.25;
	letter-spacing: 1px;
	color: #898989;
}
.tab-bar-item img {
	margin-top: 6px;
	height: 22px;
}
.active {
	color: #ff8db7;
}
</style>