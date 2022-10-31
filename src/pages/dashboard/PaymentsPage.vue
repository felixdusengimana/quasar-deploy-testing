<template>
  <div class="flex md:tw-flex-row tw-flex-col tw-justify-center tw-items-center tw-min-h-full" v-if="payments.length<=0">
     <div class="tw-text-center">
       <p class="tw-leading-[56px] tw-text-black tw-font-normal tw-text-3xl">Payment method has not been added yet</p>
           <button class="tw-text-[#1E136B] tw-text-2xl tw-font-medium tw-border-2 tw-rounded-[40px] tw-border-[#1E136B] tw-leading-[56px] tw-px-6 tw-py-3" @click="addCardModal = true">Add Payment Method</button>
     </div>
  </div>

  <div class="tw-p-8" v-else>
   <div class="tw-flex tw-justify-between">
     <div class="tw-flex tw-gap-1">
       <VisaCard/>
       <div>
         <q-btn-dropdown
         color="black"
         class="tw-w-fit"
         no-caps
         flat
         dropdown-icon="none"
       >
       <template v-slot:label>
         <div class="tw-rounded-full tw-border-2 tw-border-black tw-w-9 tw-h-9 tw-grid tw-place-items-center">
         <svg width="18" height="6" viewBox="0 0 18 6" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M2.50004 5.16536C1.90421 5.16536 1.39432 4.95303 0.970374 4.52836C0.545707 4.10442 0.333374 3.59453 0.333374 2.9987C0.333374 2.40286 0.545707 1.89261 0.970374 1.46795C1.39432 1.044 1.90421 0.832031 2.50004 0.832031C3.09587 0.832031 3.60576 1.044 4.02971 1.46795C4.45437 1.89261 4.66671 2.40286 4.66671 2.9987C4.66671 3.59453 4.45437 4.10442 4.02971 4.52836C3.60576 4.95303 3.09587 5.16536 2.50004 5.16536ZM9.00004 5.16536C8.40421 5.16536 7.89432 4.95303 7.47037 4.52836C7.04571 4.10442 6.83337 3.59453 6.83337 2.9987C6.83337 2.40286 7.04571 1.89261 7.47037 1.46795C7.89432 1.044 8.40421 0.832031 9.00004 0.832031C9.59587 0.832031 10.1061 1.044 10.5308 1.46795C10.9547 1.89261 11.1667 2.40286 11.1667 2.9987C11.1667 3.59453 10.9547 4.10442 10.5308 4.52836C10.1061 4.95303 9.59587 5.16536 9.00004 5.16536ZM15.5 5.16536C14.9042 5.16536 14.394 4.95303 13.9693 4.52836C13.5453 4.10442 13.3334 3.59453 13.3334 2.9987C13.3334 2.40286 13.5453 1.89261 13.9693 1.46795C14.394 1.044 14.9042 0.832031 15.5 0.832031C16.0959 0.832031 16.6061 1.044 17.0308 1.46795C17.4547 1.89261 17.6667 2.40286 17.6667 2.9987C17.6667 3.59453 17.4547 4.10442 17.0308 4.52836C16.6061 4.95303 16.0959 5.16536 15.5 5.16536Z" fill="#1C1B1F"/>
         </svg>
       </div>
       </template>
       <q-list>
           <q-item clickable v-close-popup @click="onItemClick">
             <div class="tw-flex tw-gap-3 tw-items-center">
               <div class="tw-flex tw-items-center tw-justify-center tw-bg-[#1E136B] tw-w-11 tw-h-11 tw-rounded-full">
                 <img src="~assets/icons/add_payment.svg"/>
               </div>
               <q-item-label>Add new payment method</q-item-label>
             </div>
           </q-item>
           <q-item clickable v-close-popup>
             <div class="tw-flex tw-gap-3 tw-items-center">
                <div class="tw-flex tw-items-center tw-justify-center tw-bg-[#1E136B] tw-w-11 tw-h-11 tw-rounded-full">
                 <img src="~assets/icons/trash.svg"/>
                </div>
               <q-item-label>Delete payment method</q-item-label>
             </div>
           </q-item>
         </q-list>
       </q-btn-dropdown>
       </div>

       </div>
       <div>
         <button
         :onclick="openModal"
         class="t tw-bg-primary-bg-color tw-font-bold tw-flex tw-gap-6 tw-px-8 tw-py-6 tw-rounded-md">
         <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M24.1667 3.00521V17.0052C24.1667 17.6469 23.9384 18.1964 23.4819 18.6537C23.0245 19.1103 22.475 19.3385 21.8334 19.3385H3.16671C2.52504 19.3385 1.97593 19.1103 1.51937 18.6537C1.06204 18.1964 0.833374 17.6469 0.833374 17.0052V3.00521C0.833374 2.36354 1.06204 1.81443 1.51937 1.35787C1.97593 0.900542 2.52504 0.671875 3.16671 0.671875H21.8334C22.475 0.671875 23.0245 0.900542 23.4819 1.35787C23.9384 1.81443 24.1667 2.36354 24.1667 3.00521ZM3.16671 5.33854H21.8334V3.00521H3.16671V5.33854ZM3.16671 10.0052V17.0052H21.8334V10.0052H3.16671Z" fill="white"/>
         </svg>
          <span class="tw-text-white">Make Payment</span>
       </button>
       </div>
   </div>
   <div class="tw-mt-10">
     <TransactionTable/>
   </div>
</div>

<q-dialog v-model="addCardModal" persistent>
   <q-card class="tw-pb-3 tw-w-1/2">
     <q-card-section class="row items-center">
       <q-space />
       <q-btn icon="close" flat color="bg-grey-3" round v-close-popup />
     </q-card-section>
     <q-card-section>
       <form
       @submit="onSubmit"
       >

       <input
       type="text"
       v-model="nameOnCard"
       name="nameOnCard"
       placeholder="Name on card"
       required
       class="md:tw-w-full lg:tw-w-full tw-w-full tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
       />
     <input
       type="text"
       v-model="cardNumer"
       name="cardNumer"
       required
       placeholder="Name on card"
       class="md:tw-w-full lg:tw-w-full tw-w-full tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
     />
     <div class="tw-flex tw-gap-2">
       <input
       type="text"
       v-model="cvv"
       name="cvv"
       placeholder="CVV"
       required
       class="md:tw-w-full lg:tw-w-full tw-w-full tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
     />
     <input
       type="text"
       v-model="paymentMethod"
       name="paymentMethod"
       placeholder="Payment method"
       required
       class="md:tw-w-full lg:tw-w-full tw-w-full tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
     />
     </div>
     <!--  submit button -->
       <button
         type="submit"
         class="tw-text-white tw-bg-[#1E136B] tw-text-sm tw-font-normal tw-py-6 tw-w-full"
       >
         Add Payment Method
       </button>
   </form>
     </q-card-section>
     <TermAndCondition/>
   </q-card>
 </q-dialog>
</template>
<script>
import TermAndCondition from 'src/components/molecules/TermAndCondition.vue'
import VisaCard from '../../components/dashboard/VisaCard.vue'
import TransactionTable from 'src/components/dashboard/TransactionTable.vue';
export default{
 name: "PaymentPage",
 data() {
     return {
         payments: [{

         }],
         addCardModal: false,
         nameOnCard: '',
         cardNumer: '',
         cvv: '',
         paymentMethod: '',
         errors: [{message: '', field: ''}],
     };
 },
 methods: {
     onSubmit(e) {
         e.preventDefault();
         this.addCardModal = false;
         const payment = {
             nameOnCard: this.nameOnCard,
             cardNumer: this.cardNumer,
             cvv: this.cvv,
             paymentMethod: this.paymentMethod
         }
         this.payments.push(payment);
     },
     openModal(){
      this.addCardModal= true;
     }
 },
 components: { TermAndCondition, VisaCard, TransactionTable }
}
</script>


<style scoped>
i {
display: none
}
</style>
