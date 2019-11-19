<template>
	<div>
		<div class="container">
			<span class="detail-price">{{ goodsInfo.lowNowPrice }}</span>
			<span class="detail-old-price">{{ goodsInfo.lowPrice }}</span>
			<div class="title">{{ goodsInfo.title }}</div>
			<div class="columns">
				<div class="column" v-for="(item, index) in goodsInfo.columns" :key="index">{{ item }}</div>
			</div>
		</div>
		<div class="container card">
			<span class="card-title">服务</span>
			<div class="card-text">
				<span class="service" v-for="(item, index) in goodsInfo.services" :key="index">{{ item.name }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		goodsInfo: {
			type: Object,
			default() {
				return {};
			}
		}
	}
};
</script>

<style scoped>
.container {
	padding: 10px 10px;
	margin-bottom: 10px;
	background-color: #fff;
}
.detail-price {
	color: var(--color);
	font-size: 24px;
}
.detail-price::before {
	content: "￥";
	font-size: 12px;
}
.detail-old-price {
	margin-left: 5px;
	color: var(--text-color);
	font-size: 14px;
	text-decoration-line: line-through;
}
.detail-old-price::before {
	content: "￥";
	font-size: 14px;
	text-decoration: none;
}
.title {
	margin-top: 5px;
	line-height: 20px;
	font-weight: 600;
	color: #444;
}
.columns {
	display: flex;
	justify-content: center;
	margin-top: 8px;
}
.column {
	flex: 1;
	text-align: center;
	font-size: 13px;
	color: var(--text-color);
}
.card {
	display: flex;
  align-items: center;
}
.card-title {
  width: 13%;
	padding-right: 10px;
	font-size: 14px;
	color: var(--text-color);
}
.card-text {
  width: 87%;
	font-size: 13px;
  color: #333;
  line-height: 18px;
}
.service:not(:last-child)::after {
	content: "·";
}
</style>