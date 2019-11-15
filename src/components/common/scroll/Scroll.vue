<template>
	<div ref="wrapper">
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
import BScroll from "@better-scroll/core";

export default {
	data() {
		return {
			scroll: null
		};
	},
	mounted() {
		this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    });
    setTimeout(() => {
      this.scroll.refresh()
    }, 500);
  },
  methods: {
    refresh() {
    setTimeout(() => {
      this.scroll.refresh()
      console.log(this.scroll.scrollerHeight)
    }, 1000);
    }
  }
};
</script>

<style scoped>
</style>