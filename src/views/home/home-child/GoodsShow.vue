<template>
	<van-list v-model="loading" @load="loadMore" :immediate-check="false">
		<van-tabs
			v-model="activeName"
			:offset-top="44"
			replace
			sticky
			animated
			swipeable
			title-active-color="var(--color)"
			color="var(--color)"
		>
			<van-tab title="流行" name="pop">
				<goods-list :goods-list="goodsData.pop.list" />
			</van-tab>
			<van-tab title="新款" name="new">
				<goods-list :goods-list="goodsData.new.list" />
			</van-tab>
			<van-tab title="精选" name="sell">
				<goods-list :goods-list="goodsData.sell.list" />
			</van-tab>
		</van-tabs>
	</van-list>
</template>

<script>
import GoodsList from "@/components/content/goods/GoodsList.vue";

export default {
	data() {
		return {
			activeName: "pop",
			loading: false,
			finished: false
		};
	},
	props: {
		goodsData: {
			type: Object,
			default: () => new Object()
		}
	},
	methods: {
		loadMore() {
			this.$emit("load-more", this.activeName);
		}
	},
	components: {
		GoodsList
	}
};
</script>

<style>
</style>