<template>
	<div>
		<h1>
			Тестовое задание: создать одну полоску статусного индикатора (Risk of
			loss) с описанными ниже настройками:
		</h1>
		<p>
			Минимальная ширина сегмента полосы индикатора - 8рх, чтобы на нее можно
			было более-менее удобно навестить и увидеть ховер с фактическим значением.
		</p>
		<p>
			При ховере сегмента (полосы индикатора) появляющееся значение должно
			помещаться в общую ширину полосы индикатора. С левой или правой выключкой
			по отношению к сегменту.
		</p>
	</div>
	<!-- <div class="about" onload="onload()">
		<span>Risk of Loss</span>
		<div class="splitter">
			<div id="first"></div>
			<div id="separator"></div>
			<div id="second"></div>
			<div id="separator"></div>
			<div id="third"></div>
		</div>
		<span>Impact of Loss</span>
		<div class="splitter">
			<div id="first"></div>
			<div id="separator"></div>
			<div id="second"></div>
			<div id="separator"></div>
			<div id="third"></div>
		</div>
		<span>Satisfaction</span>
		<div class="splitter">
			<div id="first"></div>
			<div id="separator"></div>
			<div id="second"></div>
			<div id="separator"></div>
			<div id="third"></div>
		</div>
		<span>Performance</span>
		<div class="splitter">
			<div id="first"></div>
			<div id="separator"></div>
			<div id="second"></div>
			<div id="separator"></div>
			<div id="third"></div>
		</div>
	</div> -->

	<!-- <v-slider v-model="paneSize" label="First pane size" :min="0" :max="100"> -->
	<div>
		<splitpanes
			class="default-theme"
			v-on:resize="resize_Pane($event)"
			style="height: 26px"
		>
			<pane :size="paneSize_1" id="first">
				<span>{{ paneSize_1 }}%</span>
			</pane>
			<pane :size="paneSize_2" id="second">
				<span>{{ paneSize_2 }}%</span>
			</pane>

			<pane :size="paneSize_3" id="third">
				<span>{{ paneSize_3 }}%</span>
			</pane>
		</splitpanes>
	</div>
</template>

<script setup>
import { computed, ref } from "vue";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

const paneSize_1 = ref(10);
const paneSize_2 = ref(30);

const props = defineProps({ paneSize_1: Number });

const paneSize_3 = computed(() => {
	return 100 - paneSize_1.value - paneSize_2.value;
});

function increasePaneSize_1() {
	paneSize_1.value++;
}

// const paneSize_3 = computed(() => {
// 	let qwe = paneSize_2 ? paneSize_2 : 40;
// 	let percent = 100 - paneSize_1.value - qwe;

// 	console.log(percent);
// 	return percent;
// });

const resize_Pane = (event) => {
	console.log(event);
};
</script>

<style scoped>
.about {
	width: 834px;
	height: 152px;
	background: #ffffff;
	border-radius: 3px;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 32px 24px;
	border: 1px solid #000;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 50px auto;
}
span {
	font-size: 16px;
	font-weight: 600;
}
.splitter {
	width: 240px;
	height: 6px;
	display: flex;
	margin-left: 16px;
	margin-right: 32px;
}

#separator {
	cursor: col-resize;
	background: url(https://raw.githubusercontent.com/RickStrahl/jquery-resizable/master/assets/vsizegrip.png)
		center center no-repeat #535353;
	width: 10px;
	height: 6px;
	min-width: 10px;
}

#first {
	background-color: #45e596;
	width: 100px;
	height: 26px;
	min-width: 10px;
}

#second {
	background-color: #ffc44c;
	width: 390px;
	height: 26px;
	min-width: 10px;
}

#third {
	background-color: #ff4c4c;
	width: 390px;
	height: 26px;
	min-width: 10px;
}
</style>
