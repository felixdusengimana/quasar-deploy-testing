<template>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      class="tw-bg-primary-bg-color"
      width="232"
    >
      <div class="row tw-justify-center tw-mt-10">
        <q-img
          class="tw-w-16"
          src="~assets/img/logo.png"
        />
      </div>
      <q-list class="tw-mt-12">
        <q-item
          exact
          clickable
          active-class="bg-white"
          to="/dashboard"
          class="tw-pl-10 tw-mt-3"
        >
          <q-item-section
            avatar
          >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_1206_229" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
          <rect width="28" height="28" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_1206_229)">
          <path d="M3.5 12.8333V3.5H12.8333V12.8333H3.5ZM3.5 24.5V15.1667H12.8333V24.5H3.5ZM15.1667 12.8333V3.5H24.5V12.8333H15.1667ZM15.1667 24.5V15.1667H24.5V24.5H15.1667ZM5.83333 10.5H10.5V5.83333H5.83333V10.5ZM17.5 10.5H22.1667V5.83333H17.5V10.5ZM17.5 22.1667H22.1667V17.5H17.5V22.1667ZM5.83333 22.1667H10.5V17.5H5.83333V22.1667Z"
          :fill="this.$route.fullPath==='/dashboard'?'#00009F':'white'"/>
          <circle cx="24.5" cy="4.5" r="3.5" fill="#FF0000"/>
          </g>
          </svg>

          </q-item-section>
          <q-item-section>
            <q-item-label class="tw-text-white tw-font-bold tw-text-base -tw-ml-5" :class="this.$route.fullPath==='/dashboard'&&'tw-text-[#00009F]'">Dashboard</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          exact
          clickable
          active-class="bg-white"
          :to="{ name: 'classes' }"
          class="tw-pl-10 tw-mt-3"
        >
          <q-item-section
            avatar
          >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_1206_38" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
          <rect width="28" height="28" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_1206_38)">
          <path d="M16.3337 11.5513V9.56797C16.9753 9.29575 17.6318 9.09158 18.303 8.95547C18.9734 8.81936 19.6781 8.7513 20.417 8.7513C20.9225 8.7513 21.4184 8.79019 21.9045 8.86797C22.3906 8.94575 22.867 9.04297 23.3337 9.15963V11.0263C22.867 10.8513 22.3957 10.7202 21.9197 10.6331C21.4429 10.5452 20.942 10.5013 20.417 10.5013C19.6781 10.5013 18.9684 10.5939 18.2878 10.779C17.6073 10.9633 16.9559 11.2207 16.3337 11.5513ZM16.3337 17.968V15.9846C16.9753 15.7124 17.6318 15.5082 18.303 15.3721C18.9734 15.236 19.6781 15.168 20.417 15.168C20.9225 15.168 21.4184 15.2069 21.9045 15.2846C22.3906 15.3624 22.867 15.4596 23.3337 15.5763V17.443C22.867 17.268 22.3957 17.1369 21.9197 17.0498C21.4429 16.9619 20.942 16.918 20.417 16.918C19.6781 16.918 18.9684 17.0055 18.2878 17.1805C17.6073 17.3555 16.9559 17.618 16.3337 17.968ZM16.3337 14.7596V12.7763C16.9753 12.5041 17.6318 12.2999 18.303 12.1638C18.9734 12.0277 19.6781 11.9596 20.417 11.9596C20.9225 11.9596 21.4184 11.9985 21.9045 12.0763C22.3906 12.1541 22.867 12.2513 23.3337 12.368V14.2346C22.867 14.0596 22.3957 13.9286 21.9197 13.8415C21.4429 13.7536 20.942 13.7096 20.417 13.7096C19.6781 13.7096 18.9684 13.8022 18.2878 13.9873C17.6073 14.1716 16.9559 14.4291 16.3337 14.7596ZM7.58366 18.668C8.49755 18.668 9.38732 18.7699 10.253 18.9736C11.1179 19.1782 11.9781 19.4846 12.8337 19.893V8.4013C12.0364 7.93463 11.1906 7.58464 10.2962 7.3513C9.40171 7.11797 8.49755 7.0013 7.58366 7.0013C6.88366 7.0013 6.18871 7.06936 5.49882 7.20547C4.80816 7.34158 4.14199 7.54575 3.50033 7.81797V19.368C4.18088 19.1346 4.85677 18.9596 5.52799 18.843C6.19844 18.7263 6.88366 18.668 7.58366 18.668ZM15.167 19.893C16.0225 19.4846 16.8832 19.1782 17.7488 18.9736C18.6137 18.7699 19.5031 18.668 20.417 18.668C21.117 18.668 21.8026 18.7263 22.4738 18.843C23.1443 18.9596 23.8198 19.1346 24.5003 19.368V7.81797C23.8587 7.54575 23.1929 7.34158 22.503 7.20547C21.8123 7.06936 21.117 7.0013 20.417 7.0013C19.5031 7.0013 18.5989 7.11797 17.7045 7.3513C16.81 7.58464 15.9642 7.93463 15.167 8.4013V19.893ZM14.0003 23.3346C13.067 22.5957 12.0559 22.0221 10.967 21.6138C9.8781 21.2055 8.75032 21.0013 7.58366 21.0013C6.76699 21.0013 5.9651 21.1082 5.17799 21.3221C4.3901 21.536 3.63644 21.8374 2.91699 22.2263C2.50866 22.4402 2.1151 22.4305 1.73633 22.1971C1.35677 21.9638 1.16699 21.6235 1.16699 21.1763V7.11797C1.16699 6.90408 1.22066 6.69991 1.32799 6.50547C1.43455 6.31102 1.59477 6.16519 1.80866 6.06797C2.7031 5.6013 3.63644 5.2513 4.60866 5.01797C5.58088 4.78464 6.57255 4.66797 7.58366 4.66797C8.71144 4.66797 9.8151 4.8138 10.8947 5.10547C11.9734 5.39714 13.0087 5.83464 14.0003 6.41797C14.992 5.83464 16.0276 5.39714 17.1072 5.10547C18.1859 4.8138 19.2892 4.66797 20.417 4.66797C21.4281 4.66797 22.4198 4.78464 23.392 5.01797C24.3642 5.2513 25.2975 5.6013 26.192 6.06797C26.4059 6.16519 26.5665 6.31102 26.6738 6.50547C26.7804 6.69991 26.8337 6.90408 26.8337 7.11797V21.1763C26.8337 21.6235 26.6443 21.9638 26.2655 22.1971C25.8859 22.4305 25.492 22.4402 25.0837 22.2263C24.3642 21.8374 23.6105 21.536 22.8227 21.3221C22.0355 21.1082 21.2337 21.0013 20.417 21.0013C19.2503 21.0013 18.1225 21.2055 17.0337 21.6138C15.9448 22.0221 14.9337 22.5957 14.0003 23.3346Z"
          :fill="this.$route.fullPath==='/classes'?'#00009F':'white'"/>
          <circle cx="24.5" cy="4.5" r="3.5" fill="#FF0000"/>
          </g>
          </svg>
          </q-item-section>
          <q-item-section>
            <q-item-label class="tw-text-white tw-text-base tw-font-bold -tw-ml-5" :class="this.$route.fullPath==='/classes'&&'tw-text-[#00009F]'">Classes</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          exact
          clickable
          active-class="bg-white"
          :to="{ name: 'assignments' }"
          class="tw-pl-10 tw-mt-3"
        >
          <q-item-section
            avatar
          >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_1206_274" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
            <rect width="28" height="28" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_1206_274)">
            <path d="M5.83333 24.5003C5.19167 24.5003 4.64217 24.272 4.18483 23.8155C3.72828 23.3582 3.5 22.8087 3.5 22.167V5.83366C3.5 5.19199 3.72828 4.64249 4.18483 4.18516C4.64217 3.7286 5.19167 3.50033 5.83333 3.50033H10.7333C10.9861 2.80033 11.4092 2.23644 12.0027 1.80866C12.5953 1.38088 13.2611 1.16699 14 1.16699C14.7389 1.16699 15.4051 1.38088 15.9985 1.80866C16.5912 2.23644 17.0139 2.80033 17.2667 3.50033H22.1667C22.8083 3.50033 23.3578 3.7286 23.8152 4.18516C24.2717 4.64249 24.5 5.19199 24.5 5.83366V22.167C24.5 22.8087 24.2717 23.3582 23.8152 23.8155C23.3578 24.272 22.8083 24.5003 22.1667 24.5003H5.83333ZM5.83333 22.167H22.1667V5.83366H5.83333V22.167ZM8.16667 19.8337H16.3333V17.5003H8.16667V19.8337ZM8.16667 15.167H19.8333V12.8337H8.16667V15.167ZM8.16667 10.5003H19.8333V8.16699H8.16667V10.5003ZM14 4.95866C14.2528 4.95866 14.462 4.87583 14.6277 4.71016C14.7926 4.54527 14.875 4.33644 14.875 4.08366C14.875 3.83088 14.7926 3.62166 14.6277 3.45599C14.462 3.2911 14.2528 3.20866 14 3.20866C13.7472 3.20866 13.5384 3.2911 13.3735 3.45599C13.2078 3.62166 13.125 3.83088 13.125 4.08366C13.125 4.33644 13.2078 4.54527 13.3735 4.71016C13.5384 4.87583 13.7472 4.95866 14 4.95866Z"
            :fill="this.$route.fullPath==='/assignments'?'#00009F':'white'"/>
            <circle cx="24.5" cy="4.5" r="3.5" fill="#FF0000"/>
            </g>
          </svg>

          </q-item-section>
          <q-item-section>
            <q-item-label class="tw-text-white tw-text-base tw-font-bold -tw-ml-5" :class="this.$route.fullPath==='/assignments'&&'tw-text-[#00009F]'">Assignments</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          exact
          clickable
          active-class="bg-white"
          :to="{ name: 'performance' }"
          class="tw-pl-10 tw-mt-3"
        >
          <q-item-section
            avatar
          >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_1206_264" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
            <rect width="28" height="28" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_1206_264)">
            <path d="M3.5 24.5V22.1667L5.83333 19.8333V24.5H3.5ZM8.16667 24.5V17.5L10.5 15.1667V24.5H8.16667ZM12.8333 24.5V15.1667L15.1667 17.5292V24.5H12.8333ZM17.5 24.5V17.5292L19.8333 15.1958V24.5H17.5ZM22.1667 24.5V12.8333L24.5 10.5V24.5H22.1667ZM3.5 18.4625V15.1667L11.6667 7L16.3333 11.6667L24.5 3.5V6.79583L16.3333 14.9625L11.6667 10.2958L3.5 18.4625Z"
            :fill="this.$route.fullPath==='/performance'?'#00009F':'white'"/>
            <circle cx="24.5" cy="4.5" r="3.5" fill="#FF0000"/>
            </g>
          </svg>

          </q-item-section>
          <q-item-section>
            <q-item-label class="tw-text-white tw-text-base tw-font-bold -tw-ml-5" :class="this.$route.fullPath==='/performance'&&'tw-text-[#00009F]'">Performance</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          exact
          clickable
          active-class="bg-white"
          to="/payment"
          class="tw-pl-10 tw-mt-3"
        >
          <q-item-section
            avatar
          >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_1206_264" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
            <rect width="28" height="28" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_1206_264)">
            <path d="M3.5 24.5V22.1667L5.83333 19.8333V24.5H3.5ZM8.16667 24.5V17.5L10.5 15.1667V24.5H8.16667ZM12.8333 24.5V15.1667L15.1667 17.5292V24.5H12.8333ZM17.5 24.5V17.5292L19.8333 15.1958V24.5H17.5ZM22.1667 24.5V12.8333L24.5 10.5V24.5H22.1667ZM3.5 18.4625V15.1667L11.6667 7L16.3333 11.6667L24.5 3.5V6.79583L16.3333 14.9625L11.6667 10.2958L3.5 18.4625Z"
            :fill="this.$route.fullPath==='/payment'?'#00009F':'white'"/>
            <circle cx="24.5" cy="4.5" r="3.5" fill="#FF0000"/>
            </g>
          </svg>

          </q-item-section>
          <q-item-section>
            <q-item-label class="tw-text-white tw-text-base tw-font-bold -tw-ml-5" :class="this.$route.fullPath==='/payment'&&'tw-text-[#00009F]'">Payments</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          exact
          clickable
          active-class="bg-white"
          to="/rewards"
          class="tw-pl-10 tw-mt-3"
        >
          <q-item-section
            avatar
          >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_1206_463" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
            <rect width="28" height="28" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_1206_463)">
            <path d="M25.6663 7.0013V21.0013C25.6663 21.643 25.4381 22.1925 24.9815 22.6498C24.5242 23.1064 23.9747 23.3346 23.333 23.3346H4.66634C4.02467 23.3346 3.47556 23.1064 3.01901 22.6498C2.56167 22.1925 2.33301 21.643 2.33301 21.0013V7.0013C2.33301 6.35964 2.56167 5.81052 3.01901 5.35397C3.47556 4.89664 4.02467 4.66797 4.66634 4.66797H23.333C23.9747 4.66797 24.5242 4.89664 24.9815 5.35397C25.4381 5.81052 25.6663 6.35964 25.6663 7.0013ZM4.66634 9.33463H23.333V7.0013H4.66634V9.33463ZM4.66634 14.0013V21.0013H23.333V14.0013H4.66634Z"
            :fill="this.$route.fullPath==='/rewards'?'#00009F':'white'"/>
            <circle cx="24.5" cy="4.5" r="3.5" fill="#FF0000"/>
            </g>
          </svg>

          </q-item-section>
          <q-item-section>
            <q-item-label class="tw-text-white tw-text-base tw-font-bold -tw-ml-5" :class="this.$route.fullPath==='/rewards'&&'tw-text-[#00009F]'">Rewards</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          exact
          clickable
          active-class="bg-white"
          to="/helps"
          class="tw-pl-10 tw-mt-3"
        >
          <q-item-section
            avatar
          >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_1206_212" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
              <rect width="28" height="28" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_1206_212)">
              <path d="M14 21C14.4083 21 14.7533 20.8588 15.0348 20.5765C15.3172 20.2949 15.4583 19.95 15.4583 19.5417C15.4583 19.1333 15.3172 18.7884 15.0348 18.5068C14.7533 18.2245 14.4083 18.0833 14 18.0833C13.5917 18.0833 13.2467 18.2245 12.9652 18.5068C12.6828 18.7884 12.5417 19.1333 12.5417 19.5417C12.5417 19.95 12.6828 20.2949 12.9652 20.5765C13.2467 20.8588 13.5917 21 14 21ZM12.95 16.5083H15.1083C15.1083 15.8083 15.1861 15.2931 15.3417 14.9625C15.4972 14.6319 15.8278 14.2139 16.3333 13.7083C17.0139 13.0278 17.4953 12.4588 17.7777 12.0015C18.0592 11.5449 18.2 11.025 18.2 10.4417C18.2 9.41111 17.85 8.57967 17.15 7.94733C16.45 7.31578 15.5069 7 14.3208 7C13.2514 7 12.3426 7.2625 11.5943 7.7875C10.8453 8.3125 10.325 9.04167 10.0333 9.975L11.9583 10.7333C12.0944 10.2083 12.3667 9.78522 12.775 9.464C13.1833 9.14356 13.6597 8.98333 14.2042 8.98333C14.7292 8.98333 15.1667 9.12411 15.5167 9.40567C15.8667 9.688 16.0417 10.0625 16.0417 10.5292C16.0417 10.8597 15.9347 11.2097 15.7208 11.5792C15.5069 11.9486 15.1472 12.3569 14.6417 12.8042C14 13.3681 13.5578 13.9074 13.3152 14.4223C13.0717 14.938 12.95 15.6333 12.95 16.5083ZM5.83333 24.5C5.19167 24.5 4.64217 24.2717 4.18483 23.8152C3.72828 23.3578 3.5 22.8083 3.5 22.1667V5.83333C3.5 5.19167 3.72828 4.64217 4.18483 4.18483C4.64217 3.72828 5.19167 3.5 5.83333 3.5H22.1667C22.8083 3.5 23.3578 3.72828 23.8152 4.18483C24.2717 4.64217 24.5 5.19167 24.5 5.83333V22.1667C24.5 22.8083 24.2717 23.3578 23.8152 23.8152C23.3578 24.2717 22.8083 24.5 22.1667 24.5H5.83333ZM5.83333 22.1667H22.1667V5.83333H5.83333V22.1667Z"
              :fill="this.$route.fullPath==='/helps'?'#00009F':'white'"/>
              <circle cx="24.5" cy="4.5" r="3.5" fill="#FF0000"/>
              </g>
          </svg>

          </q-item-section>
          <q-item-section>
            <q-item-label class="tw-text-white tw-text-base tw-font-bold -tw-ml-5" :class="this.$route.fullPath==='/helps'&&'tw-text-[#00009F]'">Helps</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>
</template>

<script>
  export default {
    name: "sidebar-component",
    data() {
    },
  }
</script>
