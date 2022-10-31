<template>
  <div>
    <DashPageTitle :title="'Aminu Abdulrasheed - Product design track'"/>
    <div v-for="(data, index) in all_data" :key="index">
      <hr v-if="index!==0" class="tw-py-5">
    <div class="tw-flex tw-w-full tw-items-start tw-pb-4">
      <div class="tw-w-3/5">
          <h1 class="tw-text-black tw-text-2xl tw-font-bold tw-leading-[33px] tw-text-center">{{data.title}}</h1>
          <table class="tw-mx-auto tw-my-9">
            <thead class="tw-bg-[#F2F2FF]">
              <tr>
                <th class="tw-text-left tw-text-black tw-text-sm tw-font-medium tw-py-6 tw-px-4">Month</th>
                <th class="tw-text-left tw-text-black tw-text-sm tw-font-medium tw-py-6 tw-px-4">Week</th>
                <th class="tw-text-left tw-text-black tw-text-sm tw-font-medium tw-py-6 tw-px-4">Assignment grade scored</th>
                <th class="tw-text-left tw-text-black tw-text-sm tw-font-medium tw-py-6 tw-px-4">Quiz grade scored</th>
                <th class="tw-text-left tw-text-black tw-text-sm tw-font-medium tw-py-6 tw-px-4">Attendance</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(record, index) in data.records" :key="index+'tr'">
                <td class="tw-text-left tw-text-black tw-text-sm tw-font-medium tw-border-b tw-border-[#BFBFBF] tw-py-6 tw-px-4">{{record.month}}</td>
                <td class="tw-text-left tw-text-black tw-text-sm tw-font-medium tw-border-b tw-border-[#BFBFBF] tw-py-6 tw-px-4">{{record.week}}</td>
                <td class="tw-text-left tw-text-black tw-text-sm tw-font-medium tw-border-b tw-border-[#BFBFBF] tw-py-6 tw-px-4">{{record.assignment_grade}}</td>
                <td class="tw-text-left tw-text-black tw-text-sm tw-font-medium tw-border-b tw-border-[#BFBFBF] tw-py-6 tw-px-4">{{record.quiz_grade}}</td>
                <td class="tw-text-left tw-text-black tw-text-sm tw-font-medium tw-border-b tw-border-[#BFBFBF] tw-py-6 tw-px-4">{{record.attendance}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="tw-grow">
          <q-card v-for="(performance, id) in data.performance" :key="id" class="tw-min-w-[334px] tw-rounded-lg bg-white tw-shadow-card tw-w-fit first:tw-mt-0 tw-mt-8">
            <q-card-section class="tw-flex items-center tw-flex-col justify-center">
              <h1 class="tw-text-black tw-text-2xl tw-font-bold tw-leading-[33px] tw-text-center">{{performance.title}}</h1>
              <q-circular-progress
              show-value
              class="text-light-blue q-ma-md"
              :value="performance.value"
              size="150px"
              color="light-red"
              track-color="grey-3"
            >
            <p class="tw-text-black">{{ performance.value }}%</p>
              </q-circular-progress>
            <div class="tw-flex tw-gap-3">
               <div class="tw-flex tw-items-center tw-gap-1">
                <div class="tw-w-3 tw-h-3 tw-bg-primary-dark-color"></div>
                <p class="tw-text-xs">{{performance.title.toString().split(" ")[0]}} total score</p>
               </div>
               <div class="tw-flex tw-items-center tw-gap-1">
                <div class="tw-w-3 tw-h-3 tw-bg-blue-800"></div>
                <p class="tw-text-xs">{{performance.title.toString().split(" ")[0]}} score earned</p>
                </div>
            </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashPageTitle from 'src/components/atoms/DashPageTitle.vue';
export default {
    data() {
        return {
            all_data: [
              {
                title: 'First Semester Performance',
                records: [{
                  month: 'January',
                  week: 'Week 1',
                  assignment_grade: '8/10',
                  quiz_grade: '6/10',
                  attendance: '80%'
                },
              {
                month: 'January',
                week: 'Week 1',
                assignment_grade: '8/10',
                quiz_grade: '6/10',
                attendance: '80%'
              }],
              performance: [
                {
                  id: 1,
                  title: "Attendace perfomance",
                  value: 80
                },
                {
                  id: 2,
                  title: "Assignment perfomance",
                  value: 20
                },
                {
                  id: 3,
                  title: "Quiz perfomance",
                  value: 80
                }
              ],
              },
              {
                title: 'Second Semester Performance',
                records: [{
                  month: 'January',
                  week: 'Week 1',
                  assignment_grade: '8/10',
                  quiz_grade: '6/10',
                  attendance: '80%'
                },
              {
                month: 'January',
                week: 'Week 1',
                assignment_grade: '8/10',
                quiz_grade: '6/10',
                attendance: '80%'
              }],
              performance: [
                {
                  id: 1,
                  title: "Attendace perfomance",
                  value: 80
                },
                {
                  id: 2,
                  title: "Assignment perfomance",
                  value: 20
                },
                {
                  id: 3,
                  title: "Quiz perfomance",
                  value: 100
                }
              ],
              }
            ],
        };
    },
    setup() {
    },
    components: { DashPageTitle }
}
</script>
