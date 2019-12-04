<template>
	<div class="cell">
		<div class="icon">
			<slot name="icon"></slot>
		</div>
		<div class="title">
			<slot name="title"></slot>
		</div>
		<van-icon class="right" name="arrow" color="#b7b7b7" />
	</div>
</template>

<script>
export default {
	props: {
		icon: {
			type: String,
			default() {
				return "";
			}
		}
	}
};
</script>

<style scoped>
.cell {
	display: flex;
	align-items: center;

	border-bottom: 1px solid rgb(243, 243, 243);
	height: 55px;
	font-size: 17px;
}
.icon {
	width: 30px;
  text-align: center;
}
.icon img {
	height: 25px;
  max-width: 30px;
}
.title {
	width: 80%;
  padding-left: 15px;
	color: #b7b7b7;
}
.right {
	width: 10%;
}
</style>