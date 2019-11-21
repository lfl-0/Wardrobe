<template>
	<div class="detail">
		<detail-navbar />
		<detail-swiper :top-images="topImages" />
		<goods-base-info :goods-info="goodsInfo" />
		<detail-rate :rate="rate" />
		<shop-info :shop-info="shopInfo" />
		<detail-info :detail-info-data="detailInfo" />
		<detail-recommend :recommends="recommends" />
	</div>
</template>

<script>
import DetailNavbar from "./detail-child/DetailNavbar";
import DetailSwiper from "./detail-child/DetailSwiper";
import GoodsBaseInfo from "./detail-child/GoodsBaseInfo";
import DetailRate from "./detail-child/DetailRate";
import ShopInfo from "./detail-child/ShopInfo";
import DetailInfo from "./detail-child/DetailInfo";
import DetailRecommend from "./detail-child/DetailRecommend";

import { getDetail, GoodsInfoData, getRecommend } from "@/network/detail";

export default {
	name: "Detail",
	data() {
		return {
			goodsId: null,
			goods: {},
			topImages: [],
			goodsInfo: {},
			rate: {},
			shopInfo: {},
			detailInfo: {},
			recommends: []
		};
	},
	created() {
		// 保存商品ID
		this.goodsId = this.$route.params.goods_id;

		// 请求商品详情数据
		getDetail(this.goodsId).then(res => {
			let result = res.result;
			this.goods = result;
			this.topImages = result.itemInfo.topImages;
			this.goodsInfo = new GoodsInfoData(result);
			this.rate = result.rate;
			this.shopInfo = result.shopInfo;
			this.detailInfo = result.detailInfo;
		});

		// 请求推荐数据
		getRecommend().then(res => {
			this.recommends = res.data.list;
		});
	},
	components: {
		DetailNavbar,
		DetailSwiper,
		GoodsBaseInfo,
		DetailRate,
		ShopInfo,
		DetailInfo,
		DetailRecommend
	}
};
</script>

<style scoped>
.detail {
	position: absolute;
	top: 44px;
	bottom: 55px;
	left: 0;
	right: 0;
	background-color: var(--background-color);
	overflow-y: scroll;
}
</style>