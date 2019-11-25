<template>
	<van-goods-action class="shadow">
		<van-goods-action-icon icon="chat-o" text="客服" />
		<van-goods-action-icon icon="cart-o" text="购物车" />
		<van-goods-action-icon icon="shop-o" text="店铺" />
		<van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
		<van-goods-action-button type="danger" text="立即购买" @click="addCart" />
	</van-goods-action>
</template>

<script>
export default {
	methods: {
		addCart() {
			this.$emit("addCart");
		}
	}
};
</script>

<style scoped>
.shadow {
	box-shadow: 0 -3px 5px rgba(80, 80, 80, 0.034);
}
</style>