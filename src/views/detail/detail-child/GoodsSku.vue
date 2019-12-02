<template>
	<div class="sku">
		<van-sku
			v-model="show"
			:sku="sku"
			:goods="goods"
			@add-cart="itemClick"
			@buy-clicked="itemClick"
			:close-on-click-overlay="true"
		/>
	</div>
</template>

<script>
import Vue from "vue"

export default {
	data() {
		return {
			show: false
		};
	},
	props: {
		sku: {
			type: Object,
			default() {
				return {};
			}
		},
		skus: {
			type: Array,
			default() {
				return [];
			}
		},
		goods: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	methods: {
		itemClick(skuData) {
			let id = skuData.selectedSkuComb.id;
			const goods = this.skus.find(item => item.xdSkuId === id);
      goods.title = this.goods.title;
      Vue.set(goods, 'num', skuData.selectedNum)
      Vue.set(goods, 'checked', true)
			this.$store.dispatch("addToCart", goods).then(() => {
				this.show = false;
				this.$toast("加入成功");
			});
		}
	}
};
</script>

<style scoped>
</style>