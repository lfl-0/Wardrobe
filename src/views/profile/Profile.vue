<template>
	<div class="profile">
		<nav-bar>
			<template #center>
				<div class="title">个人中心</div>
			</template>
		</nav-bar>
		<message-card />
    <all-order />
		<tools />
	</div>
</template>

<script>
import NavBar from "@/components/common/nav-bar/Nav-Bar";
import MessageCard from "./profile-child/MessageCard";
import AllOrder from "./profile-child/AllOrder"
import Tools from "./profile-child/Tools";

export default {
	name: "profile",
	components: {
		NavBar,
    MessageCard,
    AllOrder,
		Tools
	}
};
</script>

<style scoped>
.profile {
	height: 100vh;
	padding: 44px 0 55px;
  background-color: #fff;
}
.title {
	font-weight: 600;
	color: var(--text-color-dark);
}
</style>