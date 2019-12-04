<template>
	<div id="message">
		<nav-bar>
			<template #center>
				<div class="title">消息中心</div>
			</template>
		</nav-bar>
		<div class="card">
			<msg-card v-for="(item, index) in msg" :msg="item" :key="index" />
		</div>
	</div>
</template>

<script>
import NavBar from "@/components/common/nav-bar/Nav-Bar";
import MsgCard from "@/components/content/message/MsgCard";

export default {
	name: "message",
	data() {
		return {
			msg: [
				{
					user: "东风快递",
					avatar: require("@/assets/img/message/DF.png"),
					text: "您的东风-26已发货，请注意查收！欢迎再次光临！",
					date: '刚刚'
				},
				{
					user: "Mr.马",
					avatar: require("@/assets/img/message/MHT.jpg"),
					text: "氪不氪以？",
					date: '昨天'
				},
				{
					user: "Dad.马",
					avatar: require("@/assets/img/message/MY.jpg"),
					text: "996是福报！",
					date: '2019/01/03'
				},
				{
					user: "老子",
					avatar: require("@/assets/img/message/LZ.jpg"),
					text: "祸兮，福之所倚；福兮，祸之所伏。",
					date: '2019/01/03'
				}
			]
		};
	},
	components: {
		NavBar,
		MsgCard
	}
};
</script>

<style scoped>
#message {
	height: 100vh;
	padding: 44px 0 55px;
  background-color: #fff;
}
.title {
	font-weight: 600;
	color: var(--text-color-dark);
}
</style>