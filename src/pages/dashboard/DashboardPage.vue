<template>
  <div class="tw-mt-5 tw-max-w-[1121.73px] tw-border tw-border-[#D9D9D9] tw-flex tw-mx-auto tw-rounded-xl tw-px-10">
    <div class="tw-py-8 tw-border-r-[2px] tw-pr-10">
      <h1 class="tw-text-black tw-font-semibold tw-text-3xl tw-mb-2">Welcome back Musa!</h1>
      <div class="tw-flex tw-gap-2 tw-items-center tw-mb-3">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 21V18.6667L2.33333 16.3333V21H0ZM4.66667 21V14L7 11.6667V21H4.66667ZM9.33333 21V11.6667L11.6667 14.0292V21H9.33333ZM14 21V14.0292L16.3333 11.6958V21H14ZM18.6667 21V9.33333L21 7V21H18.6667ZM0 14.9625V11.6667L8.16667 3.5L12.8333 8.16667L21 0V3.29583L12.8333 11.4625L8.16667 6.79583L0 14.9625Z" fill="#C62828"/>
        </svg>
        <p class="tw-text-black tw-font-normal tw-text-base">You are behind your weekly goals</p>
      </div>
       <div class="tw-flex tw-items-center tw-gap-3 tw-mb-16">
        <p class="tw-font-bold tw-text-sm">Timline 17 Aug - 30 Aug</p>
        <q-btn class="tw-bg-[#1E136B] tw-capitalize tw-text-white tw-text-xs tw-max-w-[52px] tw-h-[23px]">Edit</q-btn>
       </div>

       <div class="tw-flex tw-gap-3 tw-items-center">
        <img class="tw-object-cover tw-max-w-[184px] tw-h-[129px] tw-rounded-lg" src="~assets/img/course_default.png" alt="">
        <div>
          <p class="tw-text-black tw-font-bold tw-text-base">Intoduction to Product design</p>
          <div class="tw-flex justify-between tw-items-center tw-mb-3 tw-mt-2">
            <p class="tw-text-black tw-font-normal tw-text-sm">Week 1</p>
            <p class="tw-h-[49px] tw-w-[1.5px] tw-bg-[#D9D9D9]"></p>
            <p class="tw-text-black tw-font-normal tw-text-sm">7 min</p>
            <q-btn class="tw-bg-[#FB676530] tw-border tw-capitalize tw-border-[#FB6765] tw-rounded-[4px] tw-text-black tw-font-normal tw-text-sm tw-py-[6px]">Resume</q-btn>
          </div>
          <q-linear-progress></q-linear-progress>
          <p class="tw-mt-2 tw-text-black tw-text-sm tw-font-normal">Lesson progress</p>
        </div>

       </div>
    </div>
    <div class="tw-py-8 tw-px-7 tw-grow">
       <div class="tw-flex justify-between">
        <div>
        <p class="tw-text-black tw-font-normal tw-text-base">Your Learning Badges</p>
        <div class="tw-flex tw-flex-row tw-gap-1 tw-mt-4">
          <div class="tw-flex tw-flex-col tw-items-center">
          <img src="~assets/img/bagdes/scholar.png" alt=""/>
          <button class="tw-border-2 tw-border-[#FB65DA] tw-font-medium tw-text-sm tw-text-[#FB6765] tw-px-2 tw-py-1 tw-rounded-2xl">Master</button>
        </div>
        <div class="tw-flex tw-flex-col tw-items-center">
          <img src="~assets/img/bagdes/master.png" alt=""/>
          <button class="tw-border-2 tw-border-[#919499] tw-font-medium tw-text-sm tw-text-[#919499] tw-px-2 tw-py-1 tw-rounded-2xl">Master</button>
        </div>
        <div class="tw-flex tw-flex-col tw-items-center">
          <img src="~assets/img/bagdes/master.png" alt=""/>
          <button class="tw-border-2 tw-border-[#919499] tw-font-medium tw-text-sm tw-text-[#919499] tw-px-2 tw-py-1 tw-rounded-2xl">Master</button>
        </div>
        </div>
       </div>

       <div class="tw-flex tw-flex-col tw-ml-3">
        <p class="tw-text-center tw-text-black tw-font-normal tw-text-base ">Weekly Goal</p>
        <div class="tw-relative">
          <q-circular-progress
            :value="30"
            size="180px"
            :thickness="0.22"
            color="purple"
            track-color="grey-3"
            class="q-ma-md"
          />
          <div class="tw-absolute tw-top-[50%] tw-left-[50%] tw-translate-x-[-50%] tw-translate-y-[-50%]">
            <q-circular-progress
              show-value
              class="text-light-blue q-ma-md"
              :value="60"
              size="120px"
              color="light-red"
            />
          </div>
        </div>
       </div>
       </div>
       <div class="tw-flex tw-justify-between">
        <div class="tw-w-[156px] tw-h-[116px] tw-shadow-form tw-border-[0.8px] tw-border-[#E3E3E3] tw-rounded tw-py-5 tw-px-4">
            <div class="tw-flex tw-items-center tw-gap-2">
              <p class="tw-text-3xl tw-font-bold">30%</p>
               <div class="tw-w-[15px] tw-h-[15px] tw-bg-[#1E136B] tw-rounded"></div>
            </div>
            <p class="tw-font-bold tw-text-xs tw-uppercase tw-mt-3">YOUR BATCH OVARALL PROGRESS</p>
        </div>

        <div class="tw-w-[156px] tw-h-[116px] tw-shadow-form tw-border-[0.8px] tw-border-[#E3E3E3] tw-rounded tw-py-5 tw-px-4">
            <div class="tw-flex tw-items-center tw-gap-2">
              <p class="tw-text-3xl tw-font-bold">30%</p>
               <div class="tw-w-[15px] tw-h-[15px] tw-bg-[#FB6765] tw-rounded"></div>
            </div>
            <p class="tw-font-bold tw-text-xs tw-uppercase tw-mt-3">YOUR BATCH OVARALL PROGRESS</p>
        </div>

        <div class="tw-w-[156px] tw-h-[116px] tw-shadow-form tw-border-[0.8px] tw-border-[#E3E3E3] tw-rounded tw-py-5 tw-px-4">
            <div class="tw-flex tw-items-center tw-gap-2">
              <p class="tw-text-3xl tw-font-bold">30%</p>
               <div class="tw-bg-[#FB6765] tw-w-[33px] tw-h-[33px] tw-rounded-full tw-flex tw-justify-center tw-items-center">
                  <img src="~assets/icons/medal.svg" alt=""/>
               </div>
            </div>
            <p class="tw-font-bold tw-text-xs tw-uppercase tw-mt-3">YOUR BATCH OVARALL PROGRESS</p>
        </div>

       </div>
    </div>
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
    // ChartSection
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
