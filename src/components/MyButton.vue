<template>
	<button>
		<slot> </slot>
	</button>
</template>

<script setup>
</script>

<style>
button {
	font-family: "SourceSansProRegular";
	padding: 10px 16px;
	background: #fffefb;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	color: #b4b4b4;
	border: none;
	cursor: pointer;
	margin: 0;
}
</style>