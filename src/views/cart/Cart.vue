<template>
	<div id="cart">
		<nav-bar class="cart-nav">
			<template #center>
				<div>购物车({{ cartLen }})</div>
			</template>
		</nav-bar>

    <cart-list class="cart-list" />

		<van-submit-bar :price="3050" button-text="提交订单">
			<van-checkbox>全选</van-checkbox>
		</van-submit-bar>
	</div>
</template>

<script>
import NavBar from "@/components/common/nav-bar/Nav-Bar";
import CartList from "./cartChild/cardList"

import { mapGetters } from "vuex";

export default {
	name: "Cart",
	computed: {
		...mapGetters(["cartLen"])
	},
	components: {
    NavBar,
    CartList
	}
};
</script>

<style scoped>
#cart {
	height: 100vh;
	padding-top: 44px;
	padding-bottom: 55px;
	background-color: var(--background-color);
}
.cart-nav {
	background-color: #fff;
	color: var(--text-color-dark);
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
}
.cart-list {
  margin-top: 10px;
}

.van-submit-bar {
	bottom: 55px;
	padding-left: 10px;
}
</style>