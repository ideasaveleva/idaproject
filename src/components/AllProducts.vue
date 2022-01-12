<template>
	<div class="all-products">
		<ProductCard />
		<ProductCard />
		<ProductCard />
		<ProductCard />
		<ProductCard />
		<ProductCard />
	</div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
	name: "all-products",
	components: { ProductCard },
};
</script>

<style scoped>
.all-products {
	display: flex;
	flex-wrap: wrap;
	justify-content: end;
}
</style>