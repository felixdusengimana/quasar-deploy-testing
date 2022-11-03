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
      <div class="tw-flex tw-my-3 tw-gap-4">
      <div v-for="(index, document) in relatedDocuments" :key="index" class="tw-max-w-[183px] tw-object-fill tw-relative group">
        <div class="tw-w-full tw-h-full tw-bg-[#00000069] tw-absolute tw-hidden group-hover"></div>
        <img src="../../assets/img/document-placeholder.jpg" :alt="document"/>
        <button class="tw-hidden  group-hover tw-absolute tw-z-50 tw-bottom-1/2 tw-left-1/2 -tw-translate-x-1/2 tw-translate-y-1/2 tw-border tw-border-white tw-rounded-full tw-text-white tw-font-medium tw-text-lg tw-px-3 tw-py-1" :onclick="openModal">View</button>
      </div>
      </div>
      <q-dialog full-height full-width v-model="documentModal" persistent>
        <q-card class="tw-pb-3 tw-w-full">
          <q-card-section class="row items-center">
          <q-space />
          <q-btn icon="close" flat color="bg-grey-3" round v-close-popup />
        </q-card-section>
        <q-card-section>
          <pdf src="/docs/sample.pdf" :page="1"/>
        </q-card-section>
        </q-card>
      </q-dialog>
</template>

<script>
import {getFormattedDate} from 'src/utils/date';
import PdfvuerVue from 'pdfvuer';

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
    },
    relatedDocuments: {
      type: Array,
      default: () => []
    }
  },
  data(){
    return{
      documentModal: false,
    }
  },
  methods:{
    getFormattedDate,
    openModal(){
      this.documentModal = !this.documentModal;
    },
  },
  components:{
    // pdf
  }
};
</script>
