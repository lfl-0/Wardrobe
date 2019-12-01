<template>
	<div>
		<div class="goods-card" v-for="goods in cartList" :key="goods.xdSkuId">
			<van-checkbox class="checkbox" v-model="goods.checked" checked-color="var(--color)" />
			<van-card
				:num="goods.num"
				:price="goods.nowprice | formatPrice"
				:title="goods.title"
				:thumb="goods.img"
			>
				<template #tags>
					<div class="tags">
						<van-tag plain>{{ goods.style }}</van-tag>
						<van-tag plain>{{ goods.size }}</van-tag>
					</div>
				</template>
			</van-card>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: {
		...mapGetters(["cartList"])
	},
	filters: {
		formatPrice(price) {
			return (price / 100).toFixed(2);
		}
	}
};
</script>

<style scoped>
.goods-card {
	display: flex;
	background-color: #fff;
}
.checkbox {
  margin-left: 10px;
	width: 40px;
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