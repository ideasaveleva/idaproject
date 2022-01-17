<template>
	<input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script setup>
</script>

<style scoped>
.input {
	width: calc(100% - 32px);
	background: #fffefb;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	color: #49485e;
	border: none;
	padding: 10px 16px;
	margin-bottom: 16px;
	font-size: 12px;
	line-height: 15px;
}
</style>