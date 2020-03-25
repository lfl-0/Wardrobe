<template>
	<div id="home">
		<nav-bar class="home-navbar">
			<template #center>
				<div>购物街</div>
			</template>
		</nav-bar>
		<div class="wrapper" ref="wrapper">
			<swipe :banners="banners" />
			<recommend :recommends="recommends" />
			<goods-show :goods-data="goods" @load-more="loadMore" ref="goods" />
		</div>
		<back-top v-show="backTopShow" @click.native="backTop" />
	</div>
</template>

<script>
import NavBar from "@/components/common/nav-bar/Nav-Bar";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backtop/BackTop";

import Swipe from "./home-child/Swipe";
import Recommend from "./home-child/Recommend";
import GoodsShow from "./home-child/GoodsShow";

import { debounce } from "@/common/utils";
import { getHomeMultiData, getHomeGoodsData } from "@/network/home";
import { backTopMixin } from "@/common/mixin";

export default {
	data() {
		return {
			banners: [],
			recommends: [],
			goods: {
				pop: { page: 0, list: [] },
				new: { page: 0, list: [] },
				sell: { page: 0, list: [] }
			},
			scrollTop: 0 // 滚动的距离
		};
	},
	mixins: [backTopMixin],
	created() {
		this.getHomeMultiDataV();

		this.getHomeGoodsDataV("pop");
		this.getHomeGoodsDataV("new");
		this.getHomeGoodsDataV("sell");
	},
	mounted() {
		this.scrolling();
	},
	activated() {
		// 进入时回到上次的位置
		this.$refs.wrapper.scrollTop = this.scrollTop;
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
			return getHomeGoodsData(type, page).then(res => {
        console.log(res)
				this.goods[type].list.push(...res.data.list);
				this.goods[type].page++;
				return true;
			});
		},

		// 上拉加载更多
		loadMore(type) {
			if (this.getHomeGoodsDataV(type)) {
				setTimeout(() => {
					this.$refs.goods.loading = false;
				}, 500);
			}
		},

		// 监听滚动
		scrolling() {
			const v = this;
			const wrapper = this.$refs.wrapper;
			wrapper.onscroll = () => {
				v.scrollTop = wrapper.scrollTop;
				this.backTopIsShow();
			};
		}
	},
	components: {
		NavBar,
		Scroll,
		BackTop,
		Swipe,
		Recommend,
		GoodsShow
	}
};
</script>

<style scoped>
#home {
	position: relative;
	height: 100vh;
	padding-top: 44px;
	padding-bottom: 55px;
	background-color: var(--background-color);
}

.home-navbar {
	position: fixed;
	top: 0;
	color: #fff;
	background-color: var(--color);
	letter-spacing: 3px;
	z-index: 10;
}

.wrapper {
	position: absolute;
	top: 44px;
	bottom: 55px;
	left: 0;
	right: 0;
	overflow: hidden;
	overflow-y: scroll;
}
</style>