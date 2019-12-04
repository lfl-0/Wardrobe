<template>
	<div class="all-order">
		<div class="all">
			<span>全部订单</span>
		</div>
		<div class="list">
			<div class="item">
				<div class="icon">
					<img src="~@/assets/img/profile/待付款.png" alt />
				</div>
				<div class="title">待付款</div>
			</div>
			<div class="item">
				<div class="icon">
					<img src="@/assets/img/profile/待发货.png" alt />
				</div>
				<div class="title">待发货</div>
			</div>
			<div class="item">
				<div class="icon">
					<img src="~@/assets/img/profile/待收货.png" alt />
				</div>
				<div class="title">待收货</div>
			</div>
			<div class="item">
				<div class="icon">
					<img src="~@/assets/img/profile/退货.png" alt />
				</div>
				<div class="title">退货</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.all-order {
	margin: 15px 15px;
}
.all {
  position: relative;
  padding-left: 12px;
	color: #b7b7b7;
	font-size: 18px;
}
.all::before {
	content: " ";
  position: absolute;
  left: 0;
  top: 0;
	height: 16px;
	width: 5px;
  border-radius: 25%;
	background-color: var(--color);
}
.list {
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
	padding: 0 5px;
}
.item {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.title {
	margin-top: 5px;
	color: var(--text-color-dark);
}
.icon {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 45px;
	height: 45px;
	background-color: var(--color);
	border-radius: 50%;
}
.icon img {
	width: 55%;
}
</style>