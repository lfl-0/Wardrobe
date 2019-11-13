<template>
	<tab-bar>
		<tab-bar-item path="/home">
			<template #item-icon>
				<img src="~@/assets/img/tab-bar/home.png" alt />
			</template>
			<template #item-icon-active>
				<img src="~@/assets/img/tab-bar/home-active.png" alt />
			</template>
			<template #item-text>
				<div>首页</div>
			</template>
		</tab-bar-item>

		<tab-bar-item path="/category">
			<template #item-icon>
				<img src="~@/assets/img/tab-bar/category.png" alt />
			</template>
			<template #item-icon-active>
				<img src="~@/assets/img/tab-bar/category-active.png" alt />
			</template>
			<template #item-text>
				<div>分类</div>
			</template>
		</tab-bar-item>

		<tab-bar-item path="/cart">
			<template #item-icon>
				<img src="~@/assets/img/tab-bar/cart.png" alt />
			</template>
			<template #item-icon-active>
				<img src="~@/assets/img/tab-bar/cart-active.png" alt />
			</template>
			<template #item-text>
				<div>购物车</div>
			</template>
		</tab-bar-item>

		<tab-bar-item path="profile">
			<template #item-icon>
				<img src="~@/assets/img/tab-bar/profile.png" alt />
			</template>
			<template #item-icon-active>
				<img src="~@/assets/img/tab-bar/profile-active.png" alt />
			</template>
			<template #item-text>
				<div>我的</div>
			</template>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
import TabBar from "@/components/common/tab-bar/Tab-Bar";
import TabBarItem from "@/components/common/tab-bar/Tab-Bar-Item";

export default {
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>