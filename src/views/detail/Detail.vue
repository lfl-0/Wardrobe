<template>
	<div class="detail">
		<detail-navbar />
		<detail-swiper :top-images="topImages" />
	</div>
</template>

<script>
const DetailNavbar = () => import("./detail-child/DetailNavbar");
const DetailSwiper = () => import("./detail-child/DetailSwiper");

import { getDetail } from "@/network/detail";

export default {
	name: "Detail",
	data() {
		return {
			goodsId: null,
			goods: {},
			topImages: []
		};
	},
	created() {
		// 保存商品ID
		this.goodsId = this.$route.params.goods_id;

		// 请求商品详情数据
		getDetail(this.goodsId).then(res => {
			this.goods = res.result;
			this.topImages = res.result.itemInfo.topImages;
		});
	},
	components: {
    DetailNavbar,
    DetailSwiper
	}
};
</script>

<style scoped>
.detail{
  padding-top: 44px;
}
</style>