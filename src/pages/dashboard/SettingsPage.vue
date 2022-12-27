<template>
  <SettingsComponent
    :openModel="openModel"
    :openChangePasswordModel="openChangePasswordModel"
  />

  <!-- edit item -->
  <q-dialog v-model="EditProfile" persistent>
    <q-card class="tw-pb-3 tw-w-1/2">
      <q-card-section class="row items-center">
        <q-space />
        <q-btn icon="close" flat color="bg-grey-3" round v-close-popup />
      </q-card-section>
      <q-card-section>
        <form @submit="onSubmit">
          <h1
            class="tw-font-bold tw-text-center -tw-mt-6 tw-mb-6 tw-text-xl tw-leading-[27px]"
          >
            Edit profile
          </h1>
          <input
            type="text"
            v-model="firstName"
            name="firstName"
            placeholder="First name"
            required
            class="md:tw-w-full lg:tw-w-full tw-w-full tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
          />
          <input
            type="text"
            v-model="lastName"
            name="lastName"
            required
            placeholder="Last name"
            class="md:tw-w-full lg:tw-w-full tw-w-full tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
          />

          <input
            type="text"
            v-model="email"
            name="email"
            required
            placeholder="Email"
            class="md:tw-w-full lg:tw-w-full tw-w-full tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
          />

          <input
            type="text"
            v-model="phone"
            name="phone"
            required
            placeholder="Phone"
            class="md:tw-w-full lg:tw-w-full tw-w-full tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
          />

          <input
            type="text"
            v-model="gender"
            name="gender"
            required
            placeholder="Gender"
            class="md:tw-w-full lg:tw-w-full tw-w-full tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
          />

          <!--  submit button -->
          <button
            type="submit"
            class="tw-text-white tw-bg-[#1E136B] tw-text-sm tw-font-normal tw-py-6 tw-w-full"
          >
            Save
          </button>
        </form>
      </q-card-section>
    </q-card>
  </q-dialog>

  <!-- change password dialog -->
  <q-dialog v-model="ChangePassword" persistent>
    <q-card class="tw-pb-3 tw-w-1/2">
      <q-card-section class="row items-center">
        <q-space />
        <q-btn icon="close" flat color="bg-grey-3" round v-close-popup />
      </q-card-section>
      <q-card-section>
        <form @submit="onPasswordSubmit">
          <h1
            class="tw-font-bold tw-text-center -tw-mt-6 tw-mb-6 tw-text-xl tw-leading-[27px]"
          >
            Change password
          </h1>
          <input
            type="text"
            v-model="oldPassword"
            name="oldPassword"
            placeholder="Old password"
            required
            class="md:tw-w-full lg:tw-w-full tw-w-full tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
          />
          <input
            type="text"
            v-model="newPassword"
            name="newPassword"
            required
            placeholder="New password"
            class="md:tw-w-full lg:tw-w-full tw-w-full tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
          />

          <input
            type="text"
            v-model="newAgain"
            name="newAgain"
            required
            placeholder="New password again"
            class="md:tw-w-full lg:tw-w-full tw-w-full tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
          />

          <!--  submit button -->
          <button
            type="submit"
            class="tw-text-white tw-bg-[#1E136B] tw-text-sm tw-font-normal tw-py-6 tw-w-full"
          >
            Save
          </button>
        </form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import SettingsComponent from "src/components/molecules/SettingsComponent.vue";
export default {
  components: { SettingsComponent },
  data() {
    return {
      EditProfile: false,
      ChangePassword: false,
    };
  },
  methods: {
    openModel() {
      this.EditProfile = true;
    },
    openChangePasswordModel() {
      this.ChangePassword = true;
    },
  },
};
</script>
