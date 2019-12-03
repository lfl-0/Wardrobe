<template>
	<div class="user-card">
		<div class="user">
			<div class="avatar">
				<img :src="user.avatar" alt />
			</div>
			<div class="msg">
				<div class="name">{{ user.name }}</div>
				<div class="vip">{{ user.vip }}</div>
			</div>
		</div>
		<div class="bottom">
			<div class="item">
				<div>{{ user.collection }}</div>
				<div class="title">收藏</div>
			</div>
			<div class="item">
				<div>{{ user.coupon }}</div>
				<div class="title">优惠券</div>
			</div>
			<div class="item">
				<div>{{ user.points }}</div>
				<div class="title">积分</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	computed: {
		...mapState(["user"])
	}
};
</script>
<style scoped>
.user-card {
	margin: 10px auto;
	padding: 15px;
	width: 92%;
	height: 150px;
	background-image: url("~@/assets/img/profile/card-bg.png");
	background-size: 100% 100%;
}
.user {
	display: flex;
	align-items: center;
}
.msg {
	margin-left: 10px;
	color: #fff;
}
.name {
	font-weight: 800;
}
.vip {
	margin-top: 5px;
	font-size: 14px;
}
.avatar {
	width: 60px;
	height: 60px;
	border-radius: 50%;
	overflow: hidden;
}
.avatar img {
	width: 100%;
	height: 100%;
}
.bottom {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 70%;
	margin: 0 auto;
	color: #fff;
	text-align: center;
}
.bottom .title {
	margin-top: 8px;
}
.bottom .item {
  margin-top: 15px;
}
</style>