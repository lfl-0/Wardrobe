<template>
	<div id="cart">
		<nav-bar class="cart-nav">
			<template #center>
				<div class="title">购物车({{ cartLen }})</div>
			</template>
		</nav-bar>

		<cart-list v-if="cartLen" class="cart-list" />
		<cart-empty v-else />

		<van-submit-bar :price="totalPrice" button-text="提交订单">
			<van-checkbox :value="isSelectAll" @click="selectAll" checked-color="var(--color)">全选</van-checkbox>
		</van-submit-bar>
	</div>
</template>

<script>
import NavBar from "@/components/common/nav-bar/Nav-Bar";
import CartList from "./cartChild/CardList";
import CartEmpty from "./cartChild/CartEmpty";

import { mapGetters } from "vuex";

export default {
	name: "Cart",
	computed: {
		...mapGetters(["cartLen", "totalPrice", "isSelectAll"])
	},
	methods: {
		selectAll() {
			this.$store.commit("selectAll", this.isSelectAll);
		}
	},
	components: {
		NavBar,
		CartList,
		CartEmpty
	}
};
</script>

<style scoped>
.title {
	font-weight: 600;
	color: var(--text-color-dark);
}
#cart {
	height: 100vh;
	padding-top: 44px;
	padding-bottom: 55px;
	background-color: var(--background-color);
	overflow: hidden;
}
.cart-nav {
	background-color: #fff;
	color: var(--text-color-dark);
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
}
.cart-list {
	position: absolute;
	top: 44px;
	bottom: 105px;
	left: 0;
	right: 0;
	overflow-y: scroll;
}

.van-submit-bar {
	border-top: 1px solid rgb(241, 241, 241);
	bottom: 55px;
	padding-left: 10px;
}
</style>