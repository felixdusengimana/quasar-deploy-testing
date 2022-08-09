<template>
  <div class="tw-h-2/3">
    <div class="tw-h-96">
      <ChartSection
        ref="chart"
        chartId="comparisons-chart"
        type="bar"
        :data="chartData"
        :options="options"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ChartSection from 'src/components/dashboard/ChartSection.vue';

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      align: 'end',
      labels: {
        usePointStyle: true,
        boxWidth: 10,
      },
    },
  },
}
const chartData = {
  labels: ['week1', 'week2', 'week3', 'week4', 'week1', 'week2', 'week3', 'week4', 'week1', 'week2', 'week3', 'week4', 'week1', 'week2', 'week3', 'week4'],
  datasets: [
    {
      label: 'Offline',
      data: [4, 5, 7, 6, 4, 5, 7, 6, 4, 5, 7, 6, 4, 5, 7, 6, 4, 5, 7, 6, 4, 5, 7, 6, 4, 5, 7, 6, 4, 5, 7, 6],
      fill: false,
      tension: 0.4,
      borderColor: '#FF6132',
    },
    {
      label: 'Active',
      data: [1, 2, 3, 2, 4, 5, 7, 3, 4, 6, 3, 6, 3, 6, 7, 3, 6, 8, 3, 2, 3, 5, 7, 2, 1 ,3, 1, 3, 4, 6, 4, 4],
      fill: false,
      tension: 0.4,
      borderColor: '#80B2FE',
    },
  ],
}
export default defineComponent({
  name: "DashboardPage",
  components: {
    ChartSection
  },
  setup() {
    
    return {
      options,
      chartData
    }
  },
})
</script>
