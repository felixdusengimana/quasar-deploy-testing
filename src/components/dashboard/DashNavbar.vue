<template>
    <q-header class="tw-bg-white tw-h-20 tw-flex tw-justify-between tw-items-center"  bordered
    :class="withLogo&&'md:tw-px-12 sm:tw-px-0'">
      <q-toolbar>
        <img v-if="withLogo" src="~assets/logo.svg"/>
        <p class="tw-text-black tw-font-bold tw-text-2xl tw-capitalize">
         {{store.dashboardHear}}
        </p>
        <q-space />
        <div class="tw-flex tw-items-center tw-gap-10">
          <img v-if="!noSettingsIcon" src="~assets/icons/settings.svg"/>
          <div class="tw-relative">
            <img src="~assets/icons/bell.svg"/>
            <div v-if="notifications>0" class="tw-bg-[#FE0707] tw-w-5 tw-h-5 tw-absolute -tw-top-1 -tw-right-1 tw-rounded-full tw-flex tw-items-center tw-justify-center">
              <p v-if="notifications<=9" class="tw-text-white tw-font-bold tw-text-xs">{{notifications}}</p>
              <p v-else class="tw-text-white tw-font-bold tw-text-xs">9+</p>
            </div>
          </div>
          <div class="tw-bg-[#F0F0F0] tw-rounded-full tw-py-3 tw-px-4">
          <q-btn-dropdown
            color="black"
            no-caps
            flat
          >
          <template v-slot:label>
            <div class="tw-flex tw-gap-2">
              <img src="~assets/icons/user.svg" alt="">
              <p class="tw-text-base tw-font-bold">Aminu.abdul</p>
            </div>
          </template>
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label class="tw-w-full tw-text-[#9F9F9F] tw-font-bold">My profile</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <div class="tw-flex tw-gap-4 tw-items-center">
                    <div class="tw-w-9 tw-h-9 tw-bg-[#FFDC5D] tw-rounded-full"></div>
                    <div>
                      <p class="tw-font-bold tw-text-sm">Aminu Abdulrasheed</p>
                      <p class="tw-leading-[19px] tw-text-sm tw-text-[#606060]">Product Manager - Admin</p>
                    </div>
                  </div>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick">
                <div class="tw-flex tw-items-center tw-gap-4 tw-cursor-pointer">
                      <img src="~assets/icons/logout.svg"/>
                      <p class="tw-text-[#606060] tw-font-semibold tw-text-sm tw-leading-[19px]">Log out</p>
                    </div>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        </div>
      </q-toolbar>
    </q-header>
</template>

<script>
import  {store} from '../../data/store.js';

export default {
  name: "navbar-component",
  props: {
    withLogo: {
      type: String,
      required: true
    },
    noSettingsIcon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      store,
      notifications: 3
    }
  },
  setup(props){
     props.withLogo;
  },
};
</script>
