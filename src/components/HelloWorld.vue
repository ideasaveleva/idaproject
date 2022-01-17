<template>
	<div class="hello">
		<h1>{{ props.msg }}</h1>
		<MyButton>
			По умолчанию <img src="../assets/Rectangle33.png" alt="icon down" />
		</MyButton>
	</div>
</template>

<script setup>
import MyButton from "./MyButton.vue";

const props = defineProps({ msg: String });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 32px 32px 16px 32px;
}
h1 {
	font-family: "SourceSansProSemiBold";
	font-style: normal;
	font-weight: 600;
	font-size: 28px;
	line-height: 35px;
	color: #3f3f3f;
	padding: 0;
	margin: 0;
}
</style>
