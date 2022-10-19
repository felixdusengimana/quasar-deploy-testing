<template>
    <DashPageTitle :title="'Aminu Abdulrasheed - Product design track'"/>
    <div class="tw-flex tw-w-full tw-px-16">
      <div class="tw-w-3/5">
        <div v-for="(data, index) in all_data" :key="index">
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
      </div>
      <div class="tw-grow">
         <div>

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
              }]
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
              }]
              }
            ],
        };
    },
    setup() {
    },
    components: { DashPageTitle }
}
</script>
