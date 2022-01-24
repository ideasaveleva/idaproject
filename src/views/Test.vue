<template>
	<div class="indicator-block">
		<h1 class="title">
			Тестовое задание: создать одну полоску статусного индикатора (Risk of
			loss) с<br />
			описанными ниже настройками
		</h1>
		<div
			class="block-status"
			style="display: grid; grid-template-columns: 0.5fr 0.5fr; grid-gap: 20px"
		>
			<div
				style="
					display: grid;
					grid-template-columns: 125px 1fr;
					align-items: center;
				"
			>
				<h2>Risk of Loss</h2>
				<div class="indicator">
					<div
						v-on:click="zxc('risk_of_loss', 'green')"
						class="collor green"
						:style="'width: ' + percentOfWidth('risk_of_loss', 'green') + '%'"
					></div>
					<div
						v-on:click="zxc('risk_of_loss', 'orange')"
						class="collor orange"
						:style="'width: ' + percentOfWidth('risk_of_loss', 'orange') + '%'"
					></div>
					<div
						v-on:click="zxc('risk_of_loss', 'red')"
						class="collor red"
						:style="'width: ' + percentOfWidth('risk_of_loss', 'red') + '%'"
					></div>
					<div
						v-on:click="zxc('risk_of_loss', 'gray')"
						class="collor gray"
						:style="'width: ' + percentOfWidth('risk_of_loss', 'gray') + '%'"
					></div>
				</div>
			</div>
			<div
				style="
					display: grid;
					grid-template-columns: 125px 1fr;
					align-items: center;
				"
			>
				<h2>Impact of Loss</h2>
				<div class="indicator">
					<div
						v-on:click="zxc('impact_of_loss', 'green')"
						class="collor green"
						:style="'width: ' + percentOfWidth('impact_of_loss', 'green') + '%'"
					></div>
					<div
						v-on:click="zxc('impact_of_loss', 'orange')"
						class="collor orange"
						:style="
							'width: ' + percentOfWidth('impact_of_loss', 'orange') + '%'
						"
					></div>
					<div
						v-on:click="zxc('impact_of_loss', 'red')"
						class="collor red"
						:style="'width: ' + percentOfWidth('impact_of_loss', 'red') + '%'"
					></div>
					<div
						v-on:click="zxc('impact_of_loss', 'gray')"
						class="collor gray"
						:style="'width: ' + percentOfWidth('impact_of_loss', 'gray') + '%'"
					></div>
				</div>
			</div>
			<div
				style="
					display: grid;
					grid-template-columns: 125px 1fr;
					align-items: center;
				"
			>
				<h2>Satisfaction</h2>
				<div class="indicator">
					<div
						v-on:click="zxc('satisfaction', 'green')"
						class="collor green"
						:style="'width: ' + percentOfWidth('satisfaction', 'green') + '%'"
					></div>
					<div
						v-on:click="zxc('satisfaction', 'orange')"
						class="collor orange"
						:style="'width: ' + percentOfWidth('satisfaction', 'orange') + '%'"
					></div>
					<div
						v-on:click="zxc('satisfaction', 'red')"
						class="collor red"
						:style="'width: ' + percentOfWidth('satisfaction', 'red') + '%'"
					></div>
					<div
						v-on:click="zxc('satisfaction', 'gray')"
						class="collor gray"
						:style="'width: ' + percentOfWidth('satisfaction', 'gray') + '%'"
					></div>
				</div>
			</div>
			<div
				style="
					display: grid;
					grid-template-columns: 125px 1fr;
					align-items: center;
				"
			>
				<h2>Performance</h2>
				<div class="indicator">
					<div
						v-on:click="zxc('performance', 'green')"
						class="collor green"
						:style="'width: ' + percentOfWidth('performance', 'green') + '%'"
					></div>
					<div
						v-on:click="zxc('performance', 'orange')"
						class="collor orange"
						:style="'width: ' + percentOfWidth('performance', 'orange') + '%'"
					></div>
					<div
						v-on:click="zxc('performance', 'red')"
						class="collor red"
						:style="'width: ' + percentOfWidth('performance', 'red') + '%'"
					></div>
					<div
						v-on:click="zxc('performance', 'gray')"
						class="collor gray"
						:style="'width: ' + percentOfWidth('performance', 'gray') + '%'"
					></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const widthIndicator = 274;
const percentOfWidth = (type, color) => {
	if (obJect[type] && (obJect[type][color] || obJect[type][color] != 0)) {
		let segment = obJect[type][color];
		return ((segment * 100) / widthIndicator).toFixed();
	}
	// else {
	// 	let segment_summ = 0;
	// 	Object.keys(obJect[type]).forEach((e) => {
	// 		segment_summ = segment_summ + obJect[type][e];
	// 	});
	// 	console.log("qweqwe", obJect[type][color]);
	// 	return (((widthIndicator - segment_summ) * 100) / widthIndicator).toFixed();
	// }
};

const obJect = {
	risk_of_loss: {
		green: 16,
		orange: 48,
		red: 207,
		gray: 0,
	},
	impact_of_loss: {
		green: 24,
		orange: 242,
		red: 8,
		gray: 0,
	},
	satisfaction: {
		green: 8,
		orange: 12,
		red: 16,
		gray: 235,
	},
	performance: {
		green: 163,
		orange: 48,
		red: 32,
		gray: 31,
	},
};

const zxc = (type, color) => {
	if (type == "risk_of_loss") {
		console.log(percentOfWidth("risk_of_loss", [color]));
	}
	if (type == "impact_of_loss") {
		console.log(percentOfWidth("impact_of_loss", [color]));
	}
	if (type == "satisfaction") {
		console.log(percentOfWidth("satisfaction", [color]));
	}
	if (type == "performance") {
		console.log(percentOfWidth("performance", [color]));
	}
};
</script>

<style scoped>
.indicator-block {
	margin: 0 auto;
	max-width: 834px;
	border: 1px solid #000;
}
.title {
	font-family: Roboto;
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 22px;
	margin-bottom: 44px;
	text-align: center;
	padding-top: 20px;
}
.block-status {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	background: #ffffff;
	height: 152px;
	padding: 32px 24px;
}
h2 {
	color: #1a1a1a;
	font-size: 16px;
	line-height: 24px;
	font-family: Lab Grotesque;
	margin-right: 16px;
}
.indicator {
	display: flex;
	width: 100%;
	max-width: 274px;
	height: 6px;
}
.indicator > div:first-child {
	border-radius: 50px 0 0 50px;
}
.indicator > div:last-child {
	border-radius: 0 50px 50px 0;
}

.collor {
	min-width: 8px;
	height: 6px;
	margin-right: 1px;
}

.collor.green {
	background: #45e596;
}
.collor.orange {
	background-color: #ffc44c;
}
.collor.red {
	background-color: #ff4c4c;
}
.collor.gray {
	background: #f2f2f2;
}
</style>
