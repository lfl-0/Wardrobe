<template>
	<div class="tools">
		<cell>
			<template #icon>
				<img src="~@/assets/img/profile/钱包.png" alt />
			</template>
			<template #title>我的钱包</template>
		</cell>
		<cell>
			<template #icon>
				<img src="~@/assets/img/profile/每日签到.png" alt />
			</template>
			<template #title>每日签到</template>
		</cell>
		<cell>
			<template #icon>
				<img src="~@/assets/img/profile/收货地址.png" alt />
			</template>
			<template #title>收货地址</template>
		</cell>
		<cell>
			<template #icon>
				<img src="~@/assets/img/profile/服务中心.png" alt />
			</template>
			<template #title>服务中心</template>
		</cell>
		<cell>
			<template #icon>
				<img src="~@/assets/img/profile/客服电话.png" alt />
			</template>
			<template #title>
				<span>客服电话</span>
				<span style="float: right">028-12345678</span>
			</template>
		</cell>
	</div>
</template>

<script>
import Cell from "@/components/content/profile/cell";

export default {
	components: {
		Cell
	}
};
</script>

<style scoped>
.tools {
	margin-left: 15px;
}
</style>