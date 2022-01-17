<template>
	<div class="post-form">
		<h3>Наименование товара</h3>
		<img class="image" src="../assets/Rectangle32.png" alt="icon point" />
		<MyInput placeholder="Введите наименование товара" />
		<h3>Описание товара</h3>
		<MyInput class="inpt" placeholder="Введите описание товара" />
		<h3>Ссылка на изображение товара</h3>
		<img class="image" src="../assets/Rectangle32.png" alt="icon point" />
		<MyInput placeholder="Введите ссылку" />
		<h3>Описание товара</h3>
		<img class="image" src="../assets/Rectangle32.png" alt="icon point" />
		<MyInput placeholder="Введите цену" />
		<MyButton class="btn">Добавить товар</MyButton>
	</div>
</template>

<script setup>
import MyInput from "./MyInput.vue";
import MyButton from "./MyButton.vue";
</script>

<style scoped>
.post-form {
	width: 332px;
	background: #fffefb;
	box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
		0px 6px 10px rgba(0, 0, 0, 0.02);
	border-radius: 4px;
	padding: 24px;
	font-family: "SourceSansProRegular";
}
h3 {
	font-size: 10px;
	line-height: 13px;
	letter-spacing: -0.02em;
	color: #49485e;
	text-align: left;
	margin-bottom: 4px;
	display: inline-block;
}
.btn {
	color: #b4b4b4;
	padding: 10px 95px;
	background: #eeeeee;
	border-radius: 10px;
	width: 100%;
	font-family: "InterSemiBold";
	text-align: center;
	margin-top: 8px;
}
.inpt {
	padding: 10px 16px 83px;
}
.image {
	position: relative;
	top: -5px;
}
::placeholder {
	color: #b4b4b4;
	font-family: "SourceSansProRegular";
}
</style>