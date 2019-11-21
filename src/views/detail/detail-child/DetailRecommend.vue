<template>
	<div>
		<van-divider>看了又看</van-divider>
		<recommend-list :recommends="recommends" />
		<van-divider>已经到底了</van-divider>
	</div>
</template>

<script>
import RecommendList from "@/components/content/recommend/RecommendList";

export default {
	props: {
		recommends: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	components: {
		RecommendList
	}
};
</script>

<style>
</style>