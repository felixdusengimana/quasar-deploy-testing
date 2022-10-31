<template>
  <div>
    <DashPageTitle :title="'Aminu Abdulrasheed - Product design track'"/>
    <div class="tw-flex tw-w-full tw-px-16">
      <div class="tw-w-3/5">
          <table class="tw-mx-auto tw-my-9">
            <thead class="tw-bg-[#F2F2FF]">
              <tr>
                <th class="tw-text-left tw-text-black tw-text-sm tw-font-medium tw-py-6 tw-px-4">Payment plan</th>
                <th class="tw-text-left tw-text-black tw-text-sm tw-font-medium tw-py-6 tw-px-4">Balance</th>
                <th class="tw-text-left tw-text-black tw-text-sm tw-font-medium tw-py-6 tw-px-4">Payment date</th>
                <th class="tw-text-left tw-text-black tw-text-sm tw-font-medium tw-py-6 tw-px-4">Payment due  date</th>
                <th class="tw-text-left tw-text-black tw-text-sm tw-font-medium tw-py-6 tw-px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(record, index) in all_data" :key="index+'tr'">
                <td class="tw-text-left tw-text-black tw-text-sm tw-font-medium tw-border-b tw-border-[#BFBFBF] tw-py-6 tw-px-4">{{record.plan}}</td>
                <td class="tw-text-left tw-text-black tw-text-sm tw-font-medium tw-border-b tw-border-[#BFBFBF] tw-py-6 tw-px-4">${{record.balance}}</td>
                <td class="tw-text-left tw-text-black tw-text-sm tw-font-medium tw-border-b tw-border-[#BFBFBF] tw-py-6 tw-px-4">{{getFormattedDate(record.date)}}</td>
                <td class="tw-text-left tw-text-black tw-text-sm tw-font-medium tw-border-b tw-border-[#BFBFBF] tw-py-6 tw-px-4">{{getFormattedDate(record.due)}}</td>
                <td class="tw-text-left tw-text-black tw-text-sm tw-font-medium tw-border-b tw-border-[#BFBFBF] tw-py-6 tw-px-4">
                  <button class="tw-py-[6px] tw-px-2 tw-rounded-md tw-border-2" :class="record.status.toLocaleLowerCase()=='successful'?'tw-bg-green-300 tw-text-green-700 tw-border-green-700':'tw-bg-red-300 tw-text-red-700 tw-border-red-700'">{{record.status}}</button>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
      <div class="tw-grow">
         <div class="tw-flex tw-flex-col tw-items-center">
          <ProfileLeftSide :type="'showoff'" :fullname="'Aminu Abdulrasheed'"/>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashPageTitle from 'src/components/atoms/DashPageTitle.vue';
import ProfileLeftSide from 'src/components/molecules/ProfileLeftSide.vue';
import { getFormattedDate } from 'src/utils/date';
export default {
    name: 'PaymentHistoryPage',
    data() {
        return {
            all_data: [
              {
                plan: 'Monthly ($40)',
                balance: 400,
                date: '2021-01-01',
                due: '2021-01-31',
                status: 'Successful',
              },
              {
                plan: 'Monthly ($40)',
                balance: 400,
                date: '2021-01-01',
                due: '2021-01-31',
                status: 'Pending',
              }
            ],
        };
    },
    methods: {
        getFormattedDate,
    },
    setup() {
    },
    components: { DashPageTitle, ProfileLeftSide }
}
</script>
