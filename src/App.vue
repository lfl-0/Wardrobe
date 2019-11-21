<template>
	<div id="app">
		<keep-alive exclude="Detail">
			<router-view />
		</keep-alive>
		<main-tab-bar v-show="isShow" />
	</div>
</template>

<script>
import MainTabBar from "@/components/content/main-tab-bar/Main-Tab-Bar";

export default {
	components: {
		MainTabBar
	},
	computed: {
		isShow() {
			return this.$route.name !== "detail";
		}
	}
};
</script>

<style>
@import url("~@/assets/css/base.css");
</style>
