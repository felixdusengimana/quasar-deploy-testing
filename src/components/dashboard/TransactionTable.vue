<template>
   <p class="tw-text-primary-bg-color tw-font-bold tw-text-xl">{{tableTitle}}</p>
   <table class="tw-w-full tw-mt-3 sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
    <thead class="tw-bg-[#EFEFEF] tw-w-full">
      <tr class="tw-text-black tw-font-bold tw-text-lg">
        <td class="tw-py-3 first:tw-pl-10">Status</td>
      <td>Payment plan</td>
      <td>Schedule</td>
      <td>Date</td>
      </tr>
    </thead>
    <tbody class="tw-w-full tw-px-10">
     <tr v-for="(transaction, index) in all_data" :key="index" class="tw-py-3 tw-text-black tw-font-normal tw-text-base tw-text-left">
      <td class="tw-py-3 first:tw-pl-10">
        <span class="tw-block tw-w-fit tw-rounded-3xl tw-text-sm text-white tw-py-2 tw-px-4" :class="transaction.status=='Successfull'?'tw-bg-green-600':'tw-bg-red-600'">{{transaction.status}}</span>
      </td>
      <td>{{transaction.payment_plan}}</td>
      <td>{{transaction.schedule}}</td>
      <td>{{transaction.date}}</td>
     </tr>
    </tbody>
   </table>
</template>
<script>
  export default{
    name: "PaymentPage",
    props: {
      tableTitle: {
        type: String,
        default: 'Recent Transactions'
      },
      tableData: {
        type: Array,
        default: () => []
      },
      tableColumns: {
        type: Array,
        default: () => []
      }
    },
    data(){
      return{
        all_data: [
          {
            status: 'Successfull',
            payment_plan: 'Monthly',
            schedule: 'Every 30 days',
            date: '12/12/2021'
          },
          {
            status: 'Pending',
            payment_plan: 'Monthly',
            schedule: 'Every 30 days',
            date: '12/12/2021'
          },
          {
            status: 'Pending',
            payment_plan: 'Monthly',
            schedule: 'Every 30 days',
            date: '12/12/2021'
          },
          {
            status: 'Successfull',
            payment_plan: 'Monthly',
            schedule: 'Every 30 days',
            date: '12/12/2021'
          },
        ]
      }
    },
    setup(props){
      props.tableColumns;
      props.tableData;
      props.tableTitle;
    }
  }
</script>
