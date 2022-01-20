<template>
	<div class="home">
		<HelloWorld :msg="msg" />
		<ContentBlock />
	</div>
</template>

<script setup>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ContentBlock from "@/components/ContentBlock.vue";

let msg = "Добавление товара";
</script>

<style scoped>
</style>

<style>
</style>