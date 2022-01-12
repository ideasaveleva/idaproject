<template>
	<div class="card">
		<img src="../assets/Rectangle31.png" alt="product image" />
		<h2>Наименование товара</h2>
		<p>
			Довольно-таки интересное описание товара в несколько строк. Довольно-таки
			интересное описание товара в несколько строк
		</p>
		<span>10 000 руб.</span>
	</div>
</template>

<script>
export default {
	name: "product-card",
};
</script>

<style scoped>
.card {
	background: #fffefb;
	box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
		0px 6px 10px rgba(0, 0, 0, 0.02);
	border-radius: 4px;
	width: 332px;
	margin-left: 16px;
	margin-bottom: 16px;
}
img {
	width: 100%;
}
span {
	display: block;
	padding: 0 16px 24px;
}
h2 {
	padding: 16px;
	font-size: 20px;
	line-height: 25px;
	color: #3f3f3f;
	font-family: "SourceSansProSemiBold";
	margin: 0;
}
p {
	padding: 0 16px 32px;
	font-family: "SourceSansProRegular";
	font-size: 20px;
	line-height: 25px;
	color: #3f3f3f;
	margin: 0;
}
</style>