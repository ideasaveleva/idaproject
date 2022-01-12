<template>
	<div class="content">
		<PostForm />
		<AllProducts />
	</div>
</template>

<script>
import PostForm from "./PostForm.vue";
import AllProducts from "./AllProducts.vue";

export default {
	name: "content-block",
	components: { PostForm, AllProducts },
};
</script>

<style scoped>
.content {
	display: flex;
	padding: 32px 32px 16px 32px;
	justify-content: space-between;
}
</style>