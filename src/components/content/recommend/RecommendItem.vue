<template>
	<div class="goods-item">
		<a :href="recommend.item_url">
			<van-image class="item-img" :src="recommend.image" alt></van-image>
			<div class="item-title">{{ recommend.title }}</div>
			<div class="item-info">
				<div class="price">{{recommend.price}}</div>
				<div class="cellect">
					<van-icon name="star-o" />
					<span>{{recommend.cfav}}</span>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	props: {
		recommend: {
			type: Object,
			default() {
				return {};
			}
		}
	}
};
</script>

<style scoped>
.goods-item {
	width: 48%;
	margin-bottom: 10px;
	padding-bottom: 10px;
	background-color: #fff;
	border-radius: 5px;
	overflow: hidden;
}
.goods-item a {
	color: var(--text-color-dark);
}
.item-img {
	width: 100%;
	margin-bottom: 3px;
}
.item-img {
	width: 100%;
}

.price,
.price::before {
	color: var(--color);
}

.item-info {
	display: flex;
	align-items: flex-end;
	padding: 5px;
}

.price::before {
	content: "￥";
	font-size: 12px;
}

.cellect {
	margin-left: 10px;
	font-size: 14px;
}

.item-title {
	width: 100%;
	padding: 0 5px;
	font-size: 13px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>