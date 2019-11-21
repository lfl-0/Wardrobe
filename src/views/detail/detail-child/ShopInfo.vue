<template>
	<div class="shop-info">
		<div class="top">
			<div class="top-left">
				<div class="logo">
					<a :href="shopUrl">
						<img :src="shopLogo" alt />
					</a>
				</div>
				<div class="shop-name-level">
					<div class="shop-name">{{ shopName }}</div>
					<div class="shop-level">
						<span class="title">店铺等级</span>
						<van-rate v-model="level" :size="8" color="var(--color)" allow-half readonly />
					</div>
				</div>
			</div>
			<div class="top-right">
				<a :href="allGoodsUrl">
					<span class="all-goods">全部商品</span>
				</a>
				<a :href="shopUrl">
					<span class="in-shop">进店逛逛</span>
				</a>
			</div>
		</div>
		<div class="score">
			<div class="score-item" v-for="(item, index) in score" :key="index">
				<div>{{ item.name}}</div>
				<div>{{ item.score | scoreFormat }}</div>
				<div class="tag">{{ item.isBetter | highOrLow }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			shopName: "",
			shopLogo: "",
			level: 0,
			allGoodsUrl: "",
			shopUrl: "",
			score: []
		};
	},
	props: {
		shopInfo: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	watch: {
		shopInfo() {
			this.shopName = this.shopInfo.name;
			this.shopLogo = this.shopInfo.shopLogo;
			this.level = parseFloat(this.shopInfo.level);
			this.allGoodsUrl = this.shopInfo.allGoodsUrl;
			this.shopUrl = this.shopInfo.shopUrl;
			this.score = this.shopInfo.score;
		}
	},
	filters: {
		scoreFormat(value) {
			return Number.parseFloat(value).toFixed(1);
		},
		highOrLow(isBetter) {
			if (isBetter) return "高";
			return "低";
		}
	}
};
</script>

<style scpoed>
.shop-info {
	padding: 10px;
	background-color: #fff;
}
.top {
	display: flex;
	justify-content: space-between;
}
.top-left {
	display: flex;
	align-items: center;
}
.logo {
	width: 50px;
	height: 50px;
	border: 1px solid rgb(240, 240, 240);
	border-radius: 3px;
	overflow: hidden;
}
.logo img {
	width: 100%;
	height: 100%;
}
.top-right {
	display: flex;
	align-items: center;
}
.shop-name-level {
	margin-left: 8px;
}
.shop-name {
	font-size: 14px;
  letter-spacing: 1px;
}
.shop-level {
	margin-top: 2px;
	display: flex;
	align-items: center;
}
.shop-level .title {
	font-size: 12px;
  transform: scale(0.9);
	color: rgb(148, 148, 148);
}
.all-goods,
.in-shop {
	padding: 2px 6px;
	font-size: 12px;
	border: 1px solid var(--color);
	border-radius: 12px;
}
.all-goods {
	color: var(--color);
}
.in-shop {
	background-color: var(--color);
	color: #fff;
	margin-left: 8px;
}
.score {
	display: flex;
	justify-content: space-between;
	margin-top: 15px;
	font-size: 12px;
	color: rgb(156, 156, 156);
}
.score-item {
	display: flex;
	justify-content: space-around;
	width: 26%;
}
.tag {
	border-radius: 50%;
	background-color: rgb(235, 235, 235);
  padding: 2px;
	color: rgb(168, 168, 168);
	font-size: 12px;
  transform: scale(0.9) translateY(-3px);
}
</style>