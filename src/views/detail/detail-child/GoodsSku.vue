<template>
	<div class="sku">
		<van-sku v-model="show" :sku="sku" :goods="goods" :close-on-click-overlay="true">
			<template #sku-actions>
				<div class="van-sku-actions">
					<van-button square size="large" type="warning">确认</van-button>
				</div>
			</template>
		</van-sku>
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
	}
};
</script>

<style scoped>
</style>