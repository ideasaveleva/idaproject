<template>
<div>
  <vue-slider v-model="paneSize" label="First pane size" :min="0" :max="100">
    <splitpanes class="default-theme" @resize="paneSize = $event[0].size" style="height: 400px">
      <pane :size="paneSize">
        <span>{{ paneSize }}%</span>
      </pane>
      <pane :size="100 - paneSize">
        <span>{{ 100 - paneSize }}%</span>
      </pane>
    </splitpanes>
</div>
</template>

<script>
import { computed, ref } from "vue";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

const data = () => ({
	paneSize: 50,
});
</script>

<style scoped>
.splitter {
	width: 240px;
	height: 6px;
	display: flex;
	margin-left: 16px;
	margin-right: 32px;
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
