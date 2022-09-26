<template>
    <q-header class="tw-bg-white tw-h-20 tw-flex tw-justify-between tw-items-center"  bordered
    :class="withLogo&&'md:tw-px-12 sm:tw-px-0'">
      <q-toolbar>
        <img v-if="withLogo" src="~assets/logo.svg"/>
        <q-space />
        <div class="tw-flex tw-items-center tw-gap-10">
          <img src="~assets/icons/settings.svg"/>
          <img src="~assets/icons/bell.svg"/>
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
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Photos</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        </div>
      </q-toolbar>
    </q-header>
</template>

<script>
export default {
  name: "navbar-component",
  props: {
    withLogo: {
      type: String,
      required: true
    }
  },
  setup(props){
     props.withLogo;
  }
};
</script>
