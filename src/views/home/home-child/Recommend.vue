<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.sort" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		recommends: {
			type: Array,
			default: function() {
				return [];
			}
		}
	}
};
</script>

<style>
.recommend{
  display: flex;
  width: 100%;

  padding: 10px 0 20px;
  text-align: center;
  font-size: 12px;
  border-bottom: 15px solid rgb(240, 240, 240);
}

.recommend-item {
  flex: 1;
}
.recommend-item img {
  margin-bottom: 6px;
  width: 80%;
}
</style>