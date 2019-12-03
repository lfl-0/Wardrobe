<template>
	<div>
		<goods-card
			v-for="(goods, index) in cartList"
			:goods="goods"
			@check-click="changeChecked(index)"
			@increase="increase(index)"
			@decrease="decrease(index)"
			:key="index"
		/>
	</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import GoodsCard from "./GoodsCard";

export default {
	computed: {
		...mapState(["cartList"])
	},
	methods: {
		...mapMutations(["increase", "decrease", 'changeChecked'])
	},
	components: {
		GoodsCard
	}
};
</script>

<style scoped>
.checkbox {
	margin-left: 10px;
	width: 30px;
}
.van-card {
	background-color: #fff;
	border-radius: 5px;
}
.tags {
	line-height: 20px;
}
.van-tag {
	line-height: 15px;
	margin-right: 5px;
}
</style>