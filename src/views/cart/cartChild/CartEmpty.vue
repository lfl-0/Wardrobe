<template>
	<div class="cart-empty">
		<div class="img">
			<img src="~@/assets/img/cart/cart_empty.png" alt />
		</div>
		<button class="btn" @click="toHome">去逛逛</button>
	</div>
</template>

<script>
export default {
	methods: {
		toHome() {
			this.$router.push("/home");
		}
	}
};
</script>

<style scoped>
.cart-empty {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	background-color: #fff;
}
.img {
	margin-top: 25%;
	width: 100%;
}
.img img {
	width: 100%;
}
.btn {
	background: linear-gradient(to right, #fc6ca1, #eb2c73);
	color: #fff;
	padding: 7px 23px;
	border-radius: 5px;
	border: none;
	box-shadow: none;
}
</style>