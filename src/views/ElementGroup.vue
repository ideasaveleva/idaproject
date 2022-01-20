<template>
	<div class="header-block">
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
	<div class="about">
		<div class="block-split">
			<span>Risk of Loss</span>
			<splitpanes
				class="default-theme"
				v-on:resize="resize_Pane($event)"
				style="height: 30px"
			>
				<pane :size="paneSize_1" id="first">
					<span class="percent-span">{{ paneSize_1 }}%</span>
				</pane>
				<pane :size="paneSize_2()" id="second">
					<span class="percent-span">{{ paneSize_2() }}%</span>
				</pane>
				<pane :size="paneSize_3" id="third">
					<span class="percent-span">{{ paneSize_3 }}%</span>
				</pane>
			</splitpanes>
			<span>Impact of Loss</span>
			<splitpanes
				class="default-theme"
				v-on:resize="resize_Pane($event)"
				style="height: 30px"
			>
				<pane :size="paneSize_1" id="first">
					<span class="percent-span">{{ paneSize_1 }}%</span>
				</pane>
				<pane :size="paneSize_2()" id="second">
					<span class="percent-span">{{ paneSize_2() }}%</span>
				</pane>
				<pane :size="paneSize_3" id="third">
					<span class="percent-span">{{ paneSize_3 }}%</span>
				</pane>
			</splitpanes>
		</div>
		<div class="block-split">
			<span>Satisfaction</span>
			<splitpanes
				class="default-theme"
				v-on:resize="resize_Pane($event)"
				style="height: 30px"
			>
				<pane :size="paneSize_1" id="first">
					<span class="percent-span">{{ paneSize_1 }}%</span>
				</pane>
				<pane :size="paneSize_2()" id="second">
					<span class="percent-span">{{ paneSize_2() }}%</span>
				</pane>
				<pane :size="paneSize_3" id="third">
					<span class="percent-span">{{ paneSize_3 }}%</span>
				</pane>
			</splitpanes>
			<span>Performance</span>
			<splitpanes
				class="default-theme"
				v-on:resize="resize_Pane($event)"
				style="height: 30px"
			>
				<pane :size="paneSize_1" id="first">
					<span class="percent-span">{{ paneSize_1 }}%</span>
				</pane>
				<pane :size="paneSize_2()" id="second">
					<span class="percent-span">{{ paneSize_2() }}%</span>
				</pane>
				<pane :size="paneSize_3" id="third">
					<span class="percent-span">{{ paneSize_3 }}%</span>
				</pane>
			</splitpanes>
		</div>
	</div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

const paneSize_1 = ref(10);
const paneSize_3 = ref(10);

// const props = defineProps({ paneSize_1: Number });

const paneSize_2 = () => {
	return 100 - paneSize_3.value - paneSize_1.value;
};

// const paneSize_2 = ref(100 - paneSize_3.value - paneSize_1.value);

const resize_Pane = (event) => {
	let new_paneSize_1 = event[0].size;
	if (new_paneSize_1 != paneSize_1.value) {
		paneSize_1.value = new_paneSize_1.toFixed();
	}

	let new_paneSize_3 = event[2].size;
	if (new_paneSize_3 != paneSize_3.value) {
		paneSize_3.value = new_paneSize_3.toFixed();
	}
	// console.log(event);
};

// onMounted(() => {
// 	document.querySelector("body").style.backgroundColor = "red";
// });

// onBeforeUnmount(() => {
// 	document.querySelector("body").style.backgroundColor = "";
// });
</script>


<!-- <style>
.default-theme.splitpanes--vertical > .splitpanes__splitter:after,
.default-theme .splitpanes--vertical > .splitpanes__splitter:after,
.default-theme.splitpanes--vertical > .splitpanes__splitter:before,
.default-theme .splitpanes--vertical > .splitpanes__splitter:before {
	height: 20px;
}
</style> -->

<style lang="scss" scoped>
.about {
	width: 834px;
	height: 152px;
	background: #ffffff;
	border-radius: 3px;
	padding: 32px 24px;
	border: 1px solid #000;
	margin: 50px auto;
	font-size: 16px;
	color: #1a1a1a;
	font-weight: 600;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.percent-span {
	display: block;
	font-size: 15px;
	text-align: center;
	padding: 5px 0;
}
// span {
// 	width: 107px;
// }

.splitpanes {
	width: 274px;
}

.block-split {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

#first {
	background-color: #45e596;
	height: 30px;
	min-width: 8px;
}

#second {
	background-color: #ffc44c;
	height: 30px;
	min-width: 8px;
}

#third {
	background-color: #ff4c4c;
	height: 30px;
	min-width: 8px;
}
</style>
