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
			<div class="card-text">{{ services }}</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			services: ""
		};
	},
	props: {
		goodsInfo: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	watch: {
		goodsInfo() {
			this.initServices();
		}
	},
	methods: {
		initServices() {
			this.services = this.goodsInfo.services.map(item => item.name).join("·");
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
	font-size: 15px;
	font-weight: 700;
	color: #444;
}
.title::before {
	content: "衣橱";
  position: relative;
  top: -1px;
	padding: 1px 5px;
  margin-right: 3px;
	background-color: var(--color-dark);
	color: #fff;
	border-radius: 18px;
  font-size: 12px;
}
.columns {
	display: flex;
	justify-content: space-between;
	margin-top: 8px;
}
.column {
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