<template>
	<div id="home">
		<nav-bar class="home-navbar">
			<div slot="center">购物街</div>
		</nav-bar>
		<swipe :banners="banners" />
		<recommend :recommends="recommends" />
		<goods-show :goods-data="goods" />
	</div>
</template>

<script>
import NavBar from "@/components/common/nav-bar/Nav-Bar";

import Swipe from "./home-child/Swipe";
import Recommend from "./home-child/Recommend";
import GoodsShow from "./home-child/GoodsShow"

import { getHomeMultiData, getHomeGoodsData } from "@/network/home";

export default {
	data() {
		return {
			banners: [],
			recommends: [],
			goods: {
				pop: { page: 0, list: [] },
				new: { page: 0, list: [] },
				sell: { page: 0, list: [] }
			}
		};
	},
	created() {
		this.getHomeMultiDataV();

		this.getHomeGoodsDataV("pop");
		this.getHomeGoodsDataV("new");
		this.getHomeGoodsDataV("sell");
	},
	methods: {
		// 请求首页banner及推荐数据
		getHomeMultiDataV() {
			getHomeMultiData().then(res => {
				this.banners = res.data.banner.list;
				this.recommends = res.data.recommend.list;
			});
    },
    
		// 请求首页商品数据
		getHomeGoodsDataV(type) {
			const page = this.goods[type].page + 1;
			getHomeGoodsData(type, page).then(res => {
				this.goods[type].list.push(...res.data.list);
				this.goods[type].page++;
			});
		}
	},
	components: {
		NavBar,
		Swipe,
		Recommend,
		GoodsShow
	}
};
</script>

<style>
#home {
	padding-top: 44px;
	padding-bottom: 60px;
}

.home-navbar {
	background-color: var(--color);
	color: #fff;
	letter-spacing: 3px;
	z-index: 10;
}
</style>