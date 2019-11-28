<template>
	<div class="sku">
		<van-sku
			v-model="show"
			:sku="sku"
			:goods="goods"
			@add-cart="itemClick"
			:close-on-click-overlay="true"
		/>
	</div>
</template>

<script>
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
		goods: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	methods: {
		itemClick(goods) {
			this.$store.commit({
				type: "addToCart",
				goods
			});
		}
	}
};
</script>

<style scoped>
</style>