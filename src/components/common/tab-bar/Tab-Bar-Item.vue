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
		<div v-if="dotShow" class="dot">{{ info }}</div>
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
		},
		dotShow() {
			return this.dot !== undefined && this.info;
		}
	},
	props: {
		path: String,
		activeColor: {
			type: String,
			default: "#ff8db7"
		},
		dot: undefined,
		info: null
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
	position: relative;
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
.dot {
	position: absolute;
	top: 3px;
	left: 52%;

	width: 14px;
	height: 14px;
	line-height: 14px;
	border-radius: 50%;
	color: #fff;
	background-color: var(--color);

	font-size: 12px;
	text-align: center;
	transform: scale(0.9);
}
</style>