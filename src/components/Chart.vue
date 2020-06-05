<template>
  <div>
    <highcharts :options="chartOptions" ref="highcharts"></highcharts>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import exportingInit from "highcharts/modules/exporting";
import stockInit from "highcharts/modules/stock";

export default {
  name: 'Chart',
  props: {},
  data() {
    return {
      chartOptions: {
        title: {
          text: "Coin graph in compare with Bitcoin"
        },
        xAxis: {},
        yAxis: {},
        series: [
          {
            data: this.$store.state.coinTicks,
            pointStart: 1
          }
        ]
      }
    };
  },
  computed: {
    coinTicks: function() {
      return this.$store.state.coinTicks;
    }
  }
};
</script>