<template>
    <q-header class="tw-bg-white tw-h-20" bordered>
      <q-toolbar>
        <img v-if="withLogo" src="~assets/logo.svg"/>
        <q-space />
        <div class="tw-mt-3">
          <q-img
            class="tw-w-14 tw-h-14 tw-rounded-full"
            src="~assets/img/profile.png"
          />
          <q-btn-dropdown label="John Doe" flat no-caps color="black">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Photos</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
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
