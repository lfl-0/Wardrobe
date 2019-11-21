<template>
	<div class="goods-list">
		<recommend-item v-for="(item, index) in recommends" :recommend="item" :key="index" />
	</div>
</template>

<script>
import RecommendItem from "./RecommendItem";

export default {
	props: {
		recommends: {
			type: Array,
			default: function() {
				return [];
			}
		}
	},
	components: {
		RecommendItem
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