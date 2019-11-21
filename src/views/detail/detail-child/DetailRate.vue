<template>
	<div class="rate-box">
		<div class="top">
			<div class="title">商品评价({{ rateNum }})</div>
			<div class="see-all">查看全部 ></div>
		</div>
		<div class="rate">
			<div class="user">
				<div class="avatar">
					<img :src="rateData.user.avatar" alt />
				</div>
				<div class="name">{{ rateData.user.uname }}</div>
			</div>
			<div class="content">{{ rateData.content }}</div>
			<div class="desc">{{ rateData.created | formatDate }}&nbsp;{{ rateData.style }}</div>
		</div>
	</div>
</template>

<script>
import { dateFormat } from "@/common/utils";

export default {
	data() {
		return {
			rateNum: 0,
			rateData: {
				user: {
					name: "",
					avatar: ""
				},
				content: "",
				style: "",
				created: ""
			}
		};
	},
	props: {
		rate: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	watch: {
		rate() {
			this.rateNum = this.rate.cRate;
			this.rateData = this.rate.list[0];
		}
	},
	filters: {
		formatDate(time) {
			const date = new Date(time * 1000);
			return dateFormat(date, "YYYY-mm-dd HH:MM");
		}
	}
};
</script>

<style scoped>
.rate-box {
	margin-bottom: 10px;
	padding: 10px;
	background-color: #fff;
}
.top {
	display: flex;
	justify-content: space-between;
}
.title {
	font-size: 14px;
}
.see-all {
	color: var(--color);
	font-size: 14px;
}
.rate {
	margin: 15px 0;
}
.user {
	display: flex;
	align-items: center;
}
.avatar {
	width: 20px;
	height: 20px;
	border-radius: 50%;
	overflow: hidden;
}
.avatar img {
	width: 100%;
	height: 100%;
}
.name {
	margin-left: 5px;
	font-size: 14px;
	color: var(--text-color);
}
.desc {
	margin: 4px 0;
	font-size: 12px;
	color: var(--text-color);
}
.content {
	margin-top: 5px;
	font-size: 13px;
	line-height: 1.2;
	color: var(--text-color-dark);
}
</style>>
