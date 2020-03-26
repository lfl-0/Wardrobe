<template>
	<van-swipe class="swiper" :autoplay="3000" indicator-color="#fff">
		<van-swipe-item v-for="(item, index) in topImages" :key="index">
			<van-image height="300" fit="cover" :src="'http:' + item"/>
		</van-swipe-item>
	</van-swipe>
</template>

<script>
export default {
	props: {
		topImages: {
			type: Array,
			default() {
				return {};
			}
		}
	}
};
</script>

<style scoped>
.swiper {
	height: 300px;
	text-align: center;
}
</style>