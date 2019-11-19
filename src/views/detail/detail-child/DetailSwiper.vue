<template>
	<van-swipe class="swiper" :autoplay="3000" indicator-color="#fff">
		<van-swipe-item v-for="(item, index) in topImages" :key="index">
			<img :src="item" alt />
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
  height: 400px;
}
</style>