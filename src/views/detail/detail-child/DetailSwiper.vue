<template>
	<van-swipe class="swiper" :autoplay="3000" indicator-color="#fff">
		<van-swipe-item v-for="(item, index) in topImages" :key="index">
			<img :src="item"/>
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
	background-color: var(--color);
}
.swiper img{
  max-width: 100%;
  height: 300px;
  overflow: hidden;
}
</style>