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

const chartData = {
  labels: ['week1', 'week2', 'week3', 'week4', 'week1', 'week2', 'week3', 'week4', 'week1', 'week2', 'week3', 'week4', 'week1', 'week2', 'week3', 'week4'],
  datasets: [
    {
      label: 'Offline',
      backgroundColor: '#1e136b',
      data: [4, 5, 7, 6, 4, 5, 7, 6, 4, 5, 7, 6, 4, 5, 7, 6, 4, 5, 7, 6, 4, 5, 7, 6, 4, 5, 7, 6, 4, 5, 7, 6],
      borderWidth: 1,
    },
    {
      label: 'Offline',
      backgroundColor: '#faa5e8',
      data: [5, 3, 2, 1, 3, 2, 4, 2, 3, 1, 4, 2, 7, 3, 2, 5, 2, 4, 1, 4, 1, 2, 3, 7, 2, 7, 2, 1, 6, 7, 1, 4],
      borderWidth: 1,
    },
  ]
};

const options = {
  type: 'bar',
  data: chartData,
  scales: {
    y: {
      ticks: {
        stepSize: 0
      }
    }
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'First semester attendance'
      }
    }
  },
};
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
