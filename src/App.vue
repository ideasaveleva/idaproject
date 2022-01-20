<template>
	<!-- <div
		class="wrap"
		:class="{
			'route-2': useRoute().name == 'Element Group',
			[route_1]: useRoute().name == 'Home',
		}"
	> -->
	<div class="wrap" :style="useRoute().meta.style_page">
		<div class="container">
			<div class="navbar">
				<router-link to="/">Idaproject</router-link> |
				<router-link to="/element-group">Element Group</router-link> |
				<router-link to="/test">Test</router-link>
			</div>
			<router-view />
		</div>
	</div>
</template>


<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, computed } from "vue";
</script>


<style scoped>
/* * {
	border: 1px solid red;
} */

.wrap {
	width: 100%;
	height: 100vh;
}

.container {
	/* color: #2c3e50; */
	width: 1440px;
	margin: 0 auto;
}

body {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}
#app {
	color: #2c3e50;
}
.navbar {
	background-color: #2c3e50;
	padding: 15px;
	color: white;
}
a {
	color: white;
	text-decoration: none;
}

@font-face {
	font-display: block;
	font-family: "InterSemiBold";
	src: url("assets/fonts/Inter-SemiBold.ttf");
}
@font-face {
	font-display: block;
	font-family: "SourceSansProRegular";
	src: url("assets/fonts/SourceSansPro-Regular.ttf");
}
@font-face {
	font-display: block;
	font-family: "SourceSansProSemiBold";
	src: url("assets/fonts/SourceSansPro-SemiBold.ttf");
}
</style>
