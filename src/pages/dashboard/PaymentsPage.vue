<template>
  <div>
    <div class="tw-flex tw-justify-between tw-mt-10 tw-mx-16">
      <div class="tw-flex">
        <div class="tw-mt-9 tw-flex">
          <q-btn color="accent" label="Make payment" unelevated class="tw-rounded-xl tw-mx-2 tw-w-36 tw-h-14" no-caps @click="onClick" />
          <div class="tw-w-36 tw-h-14 tw-rounded-xl tw-mx-2 tw-border-2 tw-border-primary-bg-color">
            <q-btn color="accent" label="Make payment" flat class="tw-rounded-xl tw-w-full tw-h-full" no-caps @click="onClick" />
          </div>
        </div>
        <div class="tw-bg-gradient-to-tr tw-from-primary-dark-color tw-to-primary-light-color tw-w-80 tw-h-32 tw-rounded-lg tw-ml-4">
          <div class="tw-flex tw-justify-between tw-px-6 tw-pt-4">
            <div class="tw-text-white tw-font-medium">
              **** **** **** 7657
            </div>
            <div class="tw-flex">
              <div class="tw-mr-2">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 2.0625C9.23233 2.0625 7.50436 2.58668 6.0346 3.56874C4.56483 4.55081 3.41929 5.94665 2.74283 7.57977C2.06637 9.21288 1.88938 11.0099 2.23424 12.7436C2.57909 14.4773 3.43031 16.0698 4.68024 17.3198C5.93017 18.5697 7.52268 19.4209 9.25638 19.7658C10.9901 20.1106 12.7871 19.9336 14.4202 19.2572C16.0534 18.5807 17.4492 17.4352 18.4313 15.9654C19.4133 14.4956 19.9375 12.7677 19.9375 11C19.9348 8.63047 18.9923 6.35877 17.3167 4.68326C15.6412 3.00775 13.3695 2.06524 11 2.0625ZM15.2566 9.435L10.2145 14.2475C10.0863 14.3695 9.9161 14.4375 9.73914 14.4375C9.56218 14.4375 9.392 14.3695 9.2638 14.2475L6.74341 11.8412C6.61174 11.7151 6.53551 11.5419 6.53147 11.3596C6.52744 11.1773 6.59592 11.0008 6.72189 10.869C6.84785 10.7372 7.02099 10.6607 7.20328 10.6565C7.38557 10.6522 7.5621 10.7205 7.6941 10.8463L9.73914 12.7993L14.3059 8.44C14.4379 8.31421 14.6144 8.24594 14.7967 8.25021C14.979 8.25448 15.1522 8.33093 15.2781 8.46276C15.4041 8.5946 15.4726 8.77104 15.4685 8.95333C15.4645 9.13563 15.3883 9.30887 15.2566 9.435Z" fill="#FBBC05"/>
                </svg>
              </div>
              <q-btn flat dense class="-tw-mt-1">
                <svg width="19" height="5" viewBox="0 0 19 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2.5" cy="2.5" r="2.5" fill="white"/>
                  <circle cx="9.5" cy="2.5" r="2.5" fill="white"/>
                  <circle cx="16.5" cy="2.5" r="2.5" fill="white"/>
                </svg>
              </q-btn>
            </div>
          </div>
          <div class="tw-flex tw-text-center tw-justify-evenly tw-mt-7">
            <div>
              <div class="tw-text-base tw-text-gray-400 tw-font-medium">
                Card holder
              </div>
              <div class="tw-text-white">
                Dahir M. Dahir
              </div>
            </div>
            <div>
              <div class="tw-text-base tw-text-gray-400 tw-font-medium">
                Expires
              </div>
              <div class="tw-text-white">
                10/24
              </div>
            </div>
            <div>
              <div class="tw-text-base tw-text-gray-400 tw-font-medium">
                CVV
              </div>
              <div class="tw-text-white">
                432
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tw-flex">
        <div class="tw-text-center">
          <div class="tw-text-lg tw-font-medium">
            Balance
          </div>
          <div class="tw-text-base">
            NGN - 121,000
          </div>
        </div>
        <div class="tw-mt-2 tw-mx-3">
          <q-btn flat dense>
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.19192 20.1012C7.45865 20.338 7.48291 20.7462 7.24611 21.0129C7.0093 21.2796 6.6011 21.3039 6.33437 21.0671C4.69629 19.6128 3.42381 17.7867 2.62767 15.7335C2.56942 15.5833 2.56942 15.4167 2.62767 15.2665C5.28521 8.41284 12.8433 4.85243 19.7984 7.1368C20.1373 7.2481 20.3218 7.61304 20.2105 7.95192C20.0992 8.29079 19.7342 8.47527 19.3954 8.36397C13.1716 6.31981 6.4135 9.44062 3.92519 15.4999C4.65113 17.2661 5.76941 18.8383 7.19192 20.1012ZM16.3011 10.3951C16.6536 10.4499 16.8948 10.7801 16.8399 11.1326C16.7851 11.485 16.4549 11.7262 16.1024 11.6714C15.9048 11.6406 15.7038 11.625 15.5007 11.625C13.3605 11.625 11.6257 13.3599 11.6257 15.5C11.6257 15.701 11.6409 15.8999 11.671 16.0955C11.7253 16.448 11.4836 16.7778 11.131 16.8321C10.7785 16.8864 10.4487 16.6446 10.3944 16.2921C10.3543 16.0315 10.334 15.7669 10.334 15.5C10.334 12.6465 12.6472 10.3333 15.5007 10.3333C15.7704 10.3333 16.0378 10.3541 16.3011 10.3951ZM14.7979 20.6192C14.4444 20.5711 14.1969 20.2455 14.2451 19.8921C14.2932 19.5387 14.6187 19.2912 14.9721 19.3393C15.1461 19.363 15.3225 19.375 15.5007 19.375C17.6408 19.375 19.3757 17.6401 19.3757 15.5C19.3757 15.343 19.3663 15.1873 19.3479 15.0334C19.3055 14.6792 19.5582 14.3577 19.9123 14.3153C20.2665 14.2729 20.588 14.5256 20.6304 14.8797C20.6549 15.0846 20.6673 15.2916 20.6673 15.5C20.6673 18.3535 18.3541 20.6667 15.5007 20.6667C15.2642 20.6667 15.0296 20.6507 14.7979 20.6192ZM4.97816 26.9358C4.72594 27.1881 4.31702 27.1881 4.06481 26.9358C3.8126 26.6836 3.8126 26.2747 4.06481 26.0225L26.0231 4.06416C26.2754 3.81195 26.6843 3.81195 26.9365 4.06416C27.1887 4.31637 27.1887 4.72529 26.9365 4.97751L4.97816 26.9358ZM23.8094 10.8988C23.5427 10.662 23.5184 10.2538 23.7552 9.9871C23.992 9.72037 24.4002 9.69611 24.6669 9.93292C26.305 11.3872 27.5775 13.2133 28.3736 15.2665C28.4319 15.4167 28.4319 15.5833 28.3736 15.7335C25.7161 22.5872 18.158 26.1476 11.2029 23.8632C10.864 23.7519 10.6795 23.387 10.7908 23.0481C10.9021 22.7092 11.2671 22.5247 11.606 22.636C17.8297 24.6802 24.5878 21.5594 27.0761 15.5001C26.3502 13.7339 25.2319 12.1617 23.8094 10.8988Z" fill="black" fill-opacity="0.6"/>
            </svg>
          </q-btn>
        </div>
      </div>
    </div>
    <div class="tw-mx-16 tw-mt-10">
      <div class="tw-text-lg">
        Payments
      </div>
      <q-table
        :rows="rows"
        bordered
        :columns="columns"
        no-route-fullscreen-exit
        :visibleColumns="visibleColumns"
        row-key="id"
        flat
        binary-state-sort
        class="my-sticky-header-table no-border tw-mt-5"
        title-class="text-blue-10"
        :filter="filter"
        :filter-method="filterData"
        :loading="tableIsLoading"
        :rows-per-page-options="[10, 25, 50, 0]"
      >
        <template v-slot:loading>
          <q-spinner-tail color="primary" size="3em" class="tw-mx-auto" />
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="status" :props="props">
              <div :class="props.row.status == 'success' ? 'tw-bg-green-50 tw-text-green-500' : 'tw-bg-red-50 tw-text-red-500'" class="tw-text-center tw-py-1 tw-rounded-lg">
                {{ props.row.status }}
              </div>
            </q-td>
            <q-td key="payment_plan" :props="props">
              {{ props.row.payment_plan }}
            </q-td>
            <q-td key="balance" :props="props">
              {{ props.row.balance }}
            </q-td>
            <q-td key="created" :props="props">
              {{ props.row.created }}
            </q-td>
            <q-td key="view" :props="props">
              <q-btn-dropdown
                size="sm"
                flat
                dropdown-icon="eva-more-vertical-outline"
                label=""
              >
                <q-list class="tw-w-48">
                  <q-item
                    :to="{
                      name: '',
                      params: { id: props.row.id },
                    }"
                    class="tw-text-xs tw-h-6 hover:tw-bg-primary-bg-color hover:tw-text-white"
                    clickable
                    v-close-popup
                  >
                    <q-item-section>
                      <q-item-label>Profile</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item
                    class="tw-text-xs tw-h-6 hover:tw-bg-primary-bg-color hover:tw-text-white"
                    clickable
                    v-close-popup
                  >
                    <q-item-section>
                      <q-item-label>contact</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </div>
  <q-dialog v-model="addCardModal" persistent>
    <q-card class="tw-w-full">
      <q-card-section class="row items-center">
        <q-space />
        <q-btn icon="close" flat color="bg-grey-3" round v-close-popup />
      </q-card-section>
      <q-card-section>
        <div class="tw-pl-12 tw-text-base">
          Enter your card details below
        </div>
        <div class="tw-mx-12 tw-mt-6">
          <q-input dense v-model="cardNumer" color="accent" type="text" label="CARD NUMBER" placeholder="0000 0000 0000 0000" />
          <div class="tw-flex tw-w-full tw-mt-4">
            <q-input dense v-model="validTill" type="text" class="tw-w-full tw-mr-3" color="accent" label="VALID TILL" placeholder="MM/YY" />
            <q-input dense v-model="cvv" type="text" class="tw-w-24" color="accent" label="CVV" placeholder="123" />
          </div>
          <div class="-tw-ml-3 tw-mt-5">
            <q-checkbox v-model="checked" color="pink-4" keep-color label="Remember this card" />
          </div>
          <div class="-tw-ml-1 tw-mt-5">
            <q-select v-model="payment" color="accent" :options="options" label="Choose a payment plan" outlined class="tw-w-64" />
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="center" class="tw-mt-6">
        <q-btn class="tw-w-56 tw-rounded-xl tw-h-14" label="Pay NGN130" unelevated color="accent" />
      </q-card-actions>
      <div class="tw-text-brand-pink-color tw-font-medium tw-text-center tw-pt-3 tw-pb-10 tw-text-base">
        Secured by Flutterwave
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref } from 'vue'

const columns = [
  {
    name: 'status',
    required: true,
    label: 'Status',
    align: 'center',
  },
  { name: 'payment_plan', label: 'Payment plan', align: 'center' },
  { name: 'balance', label: 'Balance', align: 'center' },
  { name: 'created', label: 'Created', align: 'center' },
  { name: 'view', label: 'Actions', align: 'center' },
];

const rows = [
  {
    status: 'success',
    payment_plan: 'monthly',
    balance: 'NGN 121,000',
    created: 'July-3-2022'
  },
  {
    status: 'success',
    payment_plan: 'monthly',
    balance: 'NGN 121,000',
    created: 'July-3-2022'
  },
  {
    status: 'failed',
    payment_plan: 'monthly',
    balance: 'NGN 121,000',
    created: 'July-3-2022'
  },
  {
    status: 'success',
    payment_plan: 'monthly',
    balance: 'NGN 121,000',
    created: 'July-3-2022'
  },
  {
    status: 'failed',
    payment_plan: 'monthly',
    balance: 'NGN 121,000',
    created: 'July-3-2022'
  },
]


export default defineComponent({
  name: "PaymentsPage",
  setup() {
    const addCardModal = ref(true)

    // tempo
    const checked = ref(false)
    const options = ref(['daily', 'weekly', 'monthly', 'per term', 'one time'])
    const cardNumer = ref('')
    const validTill = ref('')
    const cvv = ref('')
    const payment = ref('')
    
    return {
      columns,
      rows,
      addCardModal,

      // tempo
      checked,
      options,
      cardNumer,
      validTill,
      cvv,
      payment
    }
  },
})
</script>
