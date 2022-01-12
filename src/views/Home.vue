<template>
	<div class="home">
		<HelloWorld msg="Добавление товара" />
		<ContentBlock />
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ContentBlock from "@/components/ContentBlock.vue";

export default {
	name: "Home",
	components: {
		HelloWorld,
		ContentBlock,
	},
};
</script>

<style>
</style>