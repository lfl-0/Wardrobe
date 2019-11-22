<template>
	<div class="detail" v-show="isShow">
		<detail-navbar @nav-click="navClick" ref="navbar" />
		<div class="wrapper" ref="wrapper">
			<detail-swiper :top-images="topImages" />
			<goods-base-info :goods-info="goodsInfo" />
			<detail-rate :rate="rate" ref="rate" />
			<shop-info :shop-info="shopInfo" />
			<detail-info :detail-info-data="detailInfo" ref="detail" @imgLoad="imgLoaded" />
			<detail-recommend :recommends="recommends" ref="racommends" />
		</div>
		<goods-action />
		<back-top v-show="backTopShow" @click.native="backTop" />
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
import GoodsAction from "./detail-child/GoodsAction";

import { getDetail, GoodsInfoData, getRecommend } from "@/network/detail";
import { debounce } from "@/common/utils";
import { backTopMixin } from "@/common/mixin";

export default {
	name: "Detail",
	data() {
		return {
			isShow: false,
			goodsId: null,
			goods: {},
			topImages: [],
			goodsInfo: {},
			rate: {},
			shopInfo: {},
			detailInfo: {},
			recommends: [],
			// 各板块距离顶部的距离
			compScrollTop: [0],
			getCompScrollTop: null
		};
	},
	mixins: [backTopMixin],
	created() {
		// 设置防抖函数
		this.getCompScrollTop = debounce(() => {
			this.compScrollTop[1] = this.$refs.rate.$el.offsetTop - 44;
			this.compScrollTop[2] = this.$refs.detail.$el.offsetTop - 44;
			this.compScrollTop[3] = this.$refs.racommends.$el.offsetTop - 44;
		});

		// 保存商品ID
		this.goodsId = this.$route.params.goods_id;

		// 请求商品详情数据
		getDetail(this.goodsId).then(res => {
			let result = res.result;
			this.goods = result;
			// 轮播图
			this.topImages = result.itemInfo.topImages;
			// 基础信息
			this.goodsInfo = new GoodsInfoData(result);
			// 评论
			this.rate = result.rate;
			// 店铺信息
			this.shopInfo = result.shopInfo;
			// 详情图片信息
			this.detailInfo = result.detailInfo;

			this.isShow = true;
		});

		// 请求推荐数据
		getRecommend().then(res => {
			this.recommends = res.data.list;
		});
	},
	mounted() {
		this.scrolling();
	},
	methods: {
		// 监听滚动
		scrolling() {
			const wrapper = this.$refs.wrapper;
			const comp = this.compScrollTop;
			wrapper.onscroll = () => {
				// 是否显示回到顶部按钮
				this.backTopIsShow();

				for (let i in this.compScrollTop) {
					if (
						wrapper.scrollTop >= comp[+i] &&
						wrapper.scrollTop < comp[+i + 1]
					) {
						this.$refs.navbar.currentIndex = +i;
						return;
					}
					this.$refs.navbar.currentIndex = +i;
				}
			};
		},

		// 图片加载完成时获取
		imgLoaded() {
			this.getCompScrollTop();
		},

		// 点击标题（商品、评论、详情、推荐）切换到相应位置
		navClick(index) {
			this.$refs.wrapper.scrollTo(0, this.compScrollTop[index]);
		}
	},
	components: {
		DetailNavbar,
		DetailSwiper,
		GoodsBaseInfo,
		DetailRate,
		ShopInfo,
		DetailInfo,
		DetailRecommend,
		GoodsAction
	}
};
</script>

<style scoped>
.detail {
	position: relative;
	height: 100vh;
	width: 100%;
	padding-top: 44px;
	padding-bottom: 50px;
	background-color: var(--background-color);
}
.wrapper {
	height: 100%;
	width: 100%;
	overflow-y: scroll;
}
</style>