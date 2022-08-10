<template>
  <div>
    <div class="tw-px-4 tw-pt-5 tw-text-2xl text-accent tw-font-medium">
      Welcome John Doe!
    </div>
    <div class="tw-border-2 tw-py-6 tw-mx-4 tw-mt-5 tw-rounded-lg tw-px-10">
      <q-linear-progress
        :value="progress"
        rounded
        size="25px"
        color="accent"
        track-color="grey3"
        class="q-mt-sm"
      >
        <div class="absolute-full flex flex-center">
          <q-badge color="white" text-color="accent" :label="progressLabel" />
        </div>
      </q-linear-progress>
      <div class="tw-flex tw-justify-between tw-mt-2">
        <div>
          1st semester
        </div>
        <div>
          2nd semester
        </div>
        <div>
          3rd semester
        </div>
      </div>
    </div>
    <q-card flat class="tw-mx-auto">
      <q-card-section>
        <div class="tw-border-2 tw-rounded-lg tw-p-10">
          <div class="tw-text-gray-600 tw-text-base">
            First semester attendance
          </div>
          <div class="tw-flex tw-justify-between tw-mt-2">
            <div class="tw-text-left tw-pl-5">
              first month
            </div>
            <div class="tw-text-left tw-ml-3">
              second month
            </div>
            <div class="tw-text-left">
              third month
            </div>
            <div>
            </div>
          </div>
          <ChartSection
            ref="chart"
            chartId="comparisons-chart"
            type="bar"
            :data="chartData"
            :options="options"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import ChartSection from 'src/components/dashboard/ChartSection.vue';

const chartData = {
  labels: ['week1', 'week2', 'week3', 'week4', 'week1', 'week2', 'week3', 'week4', 'week1', 'week2', 'week3', 'week4'],
  datasets: [
    {
      label: 'Offline',
      backgroundColor: '#1e136b',
      data: [4, 5, 7, 6, 4, 5, 7, 6, 4, 5, 7, 6, 4, 5, 7, 6, 4, 5, 7, 6, 4, 5, 7, 6, 4, 5, 7, 6],
      borderWidth: 1,
    },
    {
      label: 'Offline',
      backgroundColor: '#faa5e8',
      data: [5, 3, 2, 1, 3, 2, 4, 2, 3, 1, 4, 2, 7, 3, 2, 5, 2, 4, 1, 4, 1, 2, 3, 7, 2, 7, 2, 1]
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
    const progress = ref(0.33)

    return {
      options,
      chartData,
      progress,
      progressLabel: computed(() => (progress.value * 100) + '%'),
    }
  },
})
</script>
