<template>
  <h1 class="tw-leading-[22px] tw-font-bold tw-text-base">Personal information</h1>
     <div class="tw-flex tw-my-3 tw-gap-4">
      <div class="tw-flex tw-flex-col tw-gap-4 tw-text-sm">
        <p class="tw-text-black tw-font-medium">Course:</p>
        <p class="tw-text-black tw-font-medium">Date of birth:</p>
        <p class="tw-text-black tw-font-medium">Country:</p>
        <p class="tw-text-black tw-font-medium">State:</p>
        <p class="tw-text-black tw-font-medium">Gender:</p>
      </div>
      <div class="tw-flex tw-flex-col tw-gap-4 tw-text-sm tw-capitalize">
        <p class="tw-text-gray-500">{{course}}</p>
        <p class="tw-text-gray-500">{{getFormattedDate(dateofbirth)}}</p>
        <p class="tw-text-gray-500">{{country}}</p>
        <p class="tw-text-gray-500">{{state}}</p>
        <p class="tw-text-gray-500">{{gender}}</p>
      </div>
     </div>
      <h1 class="tw-leading-[22px] tw-font-bold tw-text-base">Related documents</h1>
</template>

<script>
import {getFormattedDate} from 'src/utils/date';
export default{
  name: 'ProfileRightSide',
  props:{
    course: {
      type: String,
      default: 'Course'
    },
    dateofbirth: {
      type: String,
      default: 'Date of birth'
    },
    country: {
      type: String,
      default: 'Country'
    },
    state: {
      type: String,
      default: 'State'
    },
    gender:{
      type: String,
      default: ''
    }
  },
  methods:{
    getFormattedDate
  }
};
</script>
