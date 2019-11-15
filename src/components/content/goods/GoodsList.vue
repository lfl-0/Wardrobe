<template>
	<div class="goods-list">
		<goods-item v-for="(item, index) in goodsList" :goods-item="item" :key="index" />
	</div>
</template>

<script>
import GoodsItem from "./GoodsItem.vue";

export default {
	props: {
		goodsList: {
			type: Array,
			default: function() {
				return [];
			}
		}
	},
	components: {
		GoodsItem
	}
};
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: var(--background-color);
}
</style>