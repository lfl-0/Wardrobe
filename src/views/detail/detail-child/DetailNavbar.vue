<template>
	<div>
		<nav-bar class="detail-navbar">
			<div slot="left">
				<div class="back-icon" @click="back">
					<van-icon name="arrow-left" />
				</div>
			</div>
			<div slot="center">
				<div class="title">
					<div
						class="title-item"
						:class="{'title-actvie': currentIndex == index}"
						@click="titleClick(index)"
						v-for="(item, index) in titles"
						:key="index"
					>{{item}}</div>
				</div>
			</div>
		</nav-bar>
	</div>
</template>

<script>
const NavBar = () => import("@/components/common/nav-bar/Nav-Bar");

export default {
	data() {
		return {
			titles: ["商品", "参数", "评论", "推荐"],
			currentIndex: 0
		};
	},
	methods: {
		back() {
			this.$router.back();
		},
		titleClick(index) {
			this.currentIndex = index;
		}
	},
	components: {
		NavBar
	}
};
</script>

<style scoped>
<<<<<<< HEAD
.detail-navbar {
	z-index: 10;
	background-color: #fff;
=======
.detail-navbar{
  z-index: 10;
  background-color: #fff;
>>>>>>> 6bc3c4d101a1acc816401b9f53ddcf367404ce9e
}
.title {
	display: flex;
	font-size: 13px;
	color: var(--text-color);
}
.title-item {
	flex: 1;
}
.back-icon {
	color: var(--text-color);
	font-size: 24px;
}
.back-icon i {
	position: relative;
	top: 4px;
}
.title-actvie {
  position: relative;
	color: var(--color);
}
.title-actvie::after {
  content: "";
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 32px;
  height: 2px;
  background-color: var(--color);
}
</style>