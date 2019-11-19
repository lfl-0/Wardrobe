<template>
	<div class="goods-item" @click="toDetail">
		<van-image class="item-img" :src="goodsItem.show.img" alt></van-image>
		<div class="item-title">{{goodsItem.title}}</div>
		<div class="item-info">
			<div class="price">{{goodsItem.price}}</div>
			<div class="cellect">
				<van-icon name="star-o" />
				<span>{{goodsItem.cfav}}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		goodsItem: {
			type: Object,
			default: function() {
				return {};
			}
		}
	},
	methods: {
		toDetail() {
			this.$router.push({
				name: "detail",
				params: { goods_id: this.goodsItem.iid }
			});
		}
	}
};
</script>

<style>
.goods-item {
	width: 48%;
	margin-bottom: 10px;
	padding-bottom: 10px;
	background-color: #fff;
	border-radius: 5px;
	overflow: hidden;
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