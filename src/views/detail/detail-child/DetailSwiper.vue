<template>
	<van-swipe class="swiper" :autoplay="3000" indicator-color="#fff">
		<van-swipe-item v-for="(item, index) in topImages" :key="index">
<<<<<<< HEAD
			<van-image height="300" fit="cover" :src="item"/>
=======
			<img :src="item"/>
>>>>>>> 6bc3c4d101a1acc816401b9f53ddcf367404ce9e
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
<<<<<<< HEAD
=======
	background-color: var(--color);
}
.swiper img{
  max-width: 100%;
  height: 300px;
  overflow: hidden;
>>>>>>> 6bc3c4d101a1acc816401b9f53ddcf367404ce9e
}
</style>