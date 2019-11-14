<template>
	<van-tabs sticky :offset-top="44" title-active-color="var(--color)" color="var(--color)">
		<van-tab title="流行">
			<goods-list :goods-list="goodsData.pop.list" />
		</van-tab>
		<van-tab title="新款">
			<goods-list :goods-list="goodsData.new.list" />
		</van-tab>
		<van-tab title="精选">
			<goods-list :goods-list="goodsData.sell.list" />
		</van-tab>
	</van-tabs>
</template>

<script>
import GoodsList from "@/components/content/goods/GoodsList.vue";

export default {
	props: {
		goodsData: {
			type: Object,
			default: function() {
				return {};
			}
		}
  },
  components: {
    GoodsList
  }
};
</script>

<style>
</style>