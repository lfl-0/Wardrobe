<template>
	<div class="detail">
		<detail-navbar />
		<detail-swiper :top-images="topImages" />
		<goods-info :goods-info="goodsInfo" />
	</div>
</template>

<script>
const DetailNavbar = () => import("./detail-child/DetailNavbar");
const DetailSwiper = () => import("./detail-child/DetailSwiper");
const GoodsInfo = () => import("./detail-child/GoodsInfo");

import { getDetail } from "@/network/detail";
import { GoodsInfoData } from "@/network/detail";

export default {
	name: "Detail",
	data() {
		return {
			goodsId: null,
			goods: {},
			topImages: [],
			goodsInfo: {}
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
		});
	},
	components: {
		DetailNavbar,
		DetailSwiper,
		GoodsInfo
	}
};
</script>

<style scoped>
.detail {
  padding-top: 44px;
  height: 100vh;
	background-color: #f8f8f8;
}
</style>