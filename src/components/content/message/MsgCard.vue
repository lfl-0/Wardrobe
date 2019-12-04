<template>
	<div class="msg-card">
		<div class="avatar">
			<img :src="msg.avatar" alt />
		</div>
		<div class="right">
			<div class="name-date">
				<div class="name">{{ msg.user }}</div>
				<div class="date">{{ msg.date }}</div>
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
			default() {
				return {
					user: "",
					avatar: "",
					text: "",
					date: ""
				};
			}
		}
	}
};
</script>

<style scoped>
.msg-card {
	display: flex;
	align-items: center;
	height: 75px;
	padding-left: 15px;
}
.avatar {
	width: 55px;
	height: 55px;
	border-radius: 10px;
	overflow: hidden;
	border: 1px solid rgb(238, 238, 238);
}
.avatar img {
	width: 100%;
	height: 100%;
}
.right {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: calc(100% - 65px);
	height: 100%;
	margin-left: 10px;
	border-bottom: 1px solid rgb(243, 243, 243);
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