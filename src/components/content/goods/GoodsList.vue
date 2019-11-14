<template>
	<div class="goods-list">
		<goods-item v-for="(item, index) in goodsList" :goods-item="item" :key="index" />
	</div>
</template>

<script>
import GoodsItem from "./GoodsItem";

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
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-around; */
  column-count: 2;
  column-gap: 3%;
  padding: 0 5px;
  background-color: var(--background-color);
}
</style>