<template>
	<nav-bar class="home-navbar">
		<div slot="center">购物街</div>
	</nav-bar>
</template>

<script>
const NavBar = () => import("@/components/common/nav-bar/Nav-Bar");
import { getHomeMultiData } from "@/network/home";

export default {
	data() {
		return {
			banner: [],
			dKeyword: [],
			recommend: []
		};
	},
	created() {
		getHomeMultiData().then(res => {
			this.banner = res.data.banner.list;
			this.dKeyword = res.data.dKeyword.list;
			this.recommend = res.data.recommend.list;
		});
	},
	components: {
		NavBar
	}
};
</script>

<style>
.home-navbar {
	background-color: var(--color);
	color: #fff;
	letter-spacing: 3px;
}
</style>