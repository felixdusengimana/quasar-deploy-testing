<template>
  <div>
    <canvas v-bind:height="height" :id="chartId"></canvas>
  </div>
</template>

<script>
import { defineComponent } from 'vue' 
import { Chart, registerables } from 'chart.js'

export default defineComponent({
  name: 'ChartSection',
  props: {
    chartId: String,
    type: String,
    data: Object,
    options: Object
  },
  data: function() {
    return {
      height: 70
    }
  },
  watch: {
    data (newVal) {
      this.chartInstance.data = newVal
      this.chartInstance.update()
    }
  },
  computed: {
    chartInstance () {
      return Chart.getChart(this.chartId)
    }
  },
  methods: {
    initChart () {
      Chart.register(...registerables)
      const plot = document.getElementById(this.chartId)
      new Chart(
        plot,
        {
          type: this.type,
          data: this.data,
          options: this.options
        }
      )
    }
  },
  mounted () {
    this.initChart()
  }
})
</script>
