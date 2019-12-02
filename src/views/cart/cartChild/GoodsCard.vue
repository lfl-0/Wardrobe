<template>
	<div class="goods-card">
		<div class="checkbox">
			<van-checkbox :value="goods.checked" @click.native="checkClick" checked-color="var(--color)" />
		</div>
		<div class="img">
			<van-image width="90px" height="90px" fit="cover" :src="goods.img" />
		</div>
		<div class="card">
			<div class="title">{{ goods.title }}</div>
			<div class="tags">
				<van-tag plain>{{ goods.style }}</van-tag>
				<van-tag plain>{{ goods.size }}</van-tag>
			</div>
			<div class="bottom">
				<div class="price">{{ goods.nowprice | formatPrice}}</div>
				<div class="control">
					<button @click="decrease" :disabled="goods.num <= 1">-</button>
					<div class="num">{{ goods.num }}</div>
					<button @click="increase">+</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		goods: {
			type: Object,
			default() {
				return {
					title: "",
					nowprice: 0,
					num: 1,
					checked: true,
					img: "",
					size: "L",
					style: "裤子"
				};
			}
		}
  },
  methods: {
    checkClick() {
      this.$emit('check-click')
    },
    increase() {
      this.$emit('increase')
    },
    decrease() {
      this.$emit('decrease')
    }
  },
	filters: {
		formatPrice(price) {
			return (price / 100).toFixed(2);
		}
	}
};
</script>

<style scoped>
.goods-card {
	display: flex;
	justify-content: center;
  height: 115px;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 10px;
}
.checkbox {
	display: flex;
	align-items: center;
	height: 100%;
	padding: 0 8px;
}
.img {
  margin-top: 10px;
}
.card {
	height: 100%;
	margin: 0 8px;
}
.title {
	max-height: 30px;
  line-height: 16px;
  margin-top: 10px;
	font-size: 13px;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	color: var(--text-color-dark);
}
.tags {
	margin-top: 8px;
}
.van-tag {
	line-height: 14px;
	margin-right: 5px;
}
.bottom {
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
	height: 20px;
}
.control {
	display: flex;
	justify-content: space-between;
}
.control button {
	height: 100%;
	line-height: 100%;
	border: none;
	box-shadow: none;
	background: none;
}
.control button:disabled {
	color: #dbdbdb;
}
.num {
	padding: 2px 3px;
	min-width: 35px;
	font-size: 14px;
	text-align: center;
	border-radius: 2px;
	background-color: #f0f0f0;
	color: var(--text-color-dark);
}
</style>