<template>
	<div class="navbar">
		<router-link to="/">Idaproject</router-link> |
		<router-link to="/element-group">Element Group</router-link> |
		<router-link to="/test">Test</router-link>
	</div>
	<router-view />
</template>


<script>
export default {};
</script>


<style>
/* * {
	border: 1px solid red;
} */
body {
	background: rgba(255, 254, 251, 0.8);
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}
#app {
	color: #2c3e50;
	width: 1440px;
	margin: 0 auto;
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
