<template>
	<div>
		<nav-bar>
			<div slot="left">
				<div class="back-icon" @click="back">
					<van-icon name="arrow-left" />
				</div>
			</div>
			<div slot="center">
				<div class="title">
					<div
						class="title-item"
						:class="{active: currentIndex == index}"
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
.actvie {
	color: var(--color);
}
</style>