<template>
  <div class="container tw-px-7 tw-mt-7">
 <div class="tw-flex tw-justify-between">
  <SearchInput :placeholder="'Search admin by any keyword'"/>
  <div :onclick="openModel" class="tw-bg-[#F0F0F0] tw-px-4 tw-flex tw-rounded-sm  tw-gap-2 tw-cursor-pointer tw-w-fit tw-items-center">
    <div>
      <img src="~assets/icons/add_circle.svg"/>
    </div>
    <p class="tw-text-black tw-text-base tw-font-normal tw-leading-[22px] tw-grow">Add new admin</p>
  </div>
 </div>
 <table class="tw-table tw-w-full tw-mt-9">
  <thead class="tw-bg-[#F2F2FF]">
    <tr class="tw-py-6">
      <td class="tw-py-6 tw-pl-6">Name</td>
      <td>email</td>
      <td>Country</td>
      <td>Role</td>
      <td>Password</td>
      <td></td>
      <td></td>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data, index) in students.data" :key="index" class="tw-border-b">
      <td class="tw-pl-6 tw-py-2">
        <div class="tw-flex tw-gap-1 tw-items-center">
          <img :src="data.image" class="tw-w-10 tw-h-10 tw-rounded-full"/>
          <p class="tw-text-[#6B7280] tw-font-normal">{{data.id}}</p>
          <p class="tw-text-[#1F2937] tw-font-medium">{{data.name}}</p>
        </div>
      </td>
      <td>{{data.contact}}</td>
      <td>{{data.email}}</td>
      <td>{{data.country}}</td>
      <td>{{data.track}}</td>
      <td>
        <p class="tw-text-[#FB6765] tw-text-sm tw-font-bold tw-cursor-pointer" :onclick="openResetModel">Reset Password</p>
      </td>
      <td class="">
        <q-btn flat round dense icon="more_vert" color="black" />
      </td>
    </tr>
  </tbody>
  <tfoot class="tw-bg-[#F2F2FF]">
    <tr>
      <td colspan="4" class="tw-py-3 tw-text-left tw-pl-6">
        <p class="tw-text-[#6B7280] tw-font-normal tw-text-sm">Showing Results: {{students.from}} - {{students.to}} of {{students.total}}</p>
      </td>
      <td colspan="4" class="">
         <div class="tw-w-full tw-flex tw-justify-end tw-pr-2">
          <Pagination
          :totalPage="12"/>
         </div>
      </td>
    </tr>
 </tfoot>
 </table>

</div>

<q-dialog v-model="addUserModel" persistent>
   <q-card class="tw-pb-3 tw-w-1/2">
     <q-card-section class="row items-center">
       <q-space />
       <q-btn icon="close" flat color="bg-grey-3" round v-close-popup />
     </q-card-section>
     <q-card-section>
       <form
       @submit="onSubmit"
       >
       <p class="tw-text-center -tw-mt-10 tw-mb-3 tw-font-bold tw-text-xl">Add new administrator</p>
       <input
       type="text"
       v-model="fullname"
       name="fullname"
       placeholder="Full name"
       required
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
       v-model="role"
       name="role"
       required
       placeholder="Role"
       class="md:tw-w-full lg:tw-w-full tw-w-full tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
     />
     <div class="tw-w-full">
      <SelectInput
     :getVal="getSelectValue"
     placeholder="Have access to:"
     name="gender"
     :options="['Overview', 'Student', 'School', 'Application', 'Transaction', 'User management']"/>
     </div>

     <div class="tw-w-full tw-border tw-border-[#000000] tw-text-sm tw-flex tw-items-center pr-10">
      <input
        :type="isPasswordShown?'text':'password'"
        v-model="password"
        name="password"
        placeholder="Password"
        class="tw-w-11/12 tw-h-full tw-py-6 tw-px-4 tw-outline-none"
      />
      <img :onclick="toggleShowPassword" v-if="!isPasswordShown" src="~assets/icons/eye-off.svg" alt="" class="tw-mr-3">
      <img :onclick="toggleShowPassword" v-else src="~assets/icons/eye-open.svg" alt="" class="tw-mr-3 tw-max-w-[25px]">
      </div>
     <!--  submit button -->
       <button
         type="submit"
         class="tw-text-white tw-mt-4 tw-bg-[#1E136B] tw-text-sm tw-font-normal tw-py-6 tw-w-full"
       >
         Save
       </button>
   </form>
     </q-card-section>
     <TermAndCondition/>
   </q-card>
 </q-dialog>

 <q-dialog v-model="resetPasswordModel" persistent>
   <q-card class="tw-pb-3 tw-w-1/2">
     <q-card-section class="row items-center">
       <q-space />
       <q-btn icon="close" flat color="bg-grey-3" round v-close-popup />
     </q-card-section>
     <q-card-section>
      <form>
        <p class="tw-text-center -tw-mt-10 tw-mb-10 tw-font-bold tw-text-xl">Reset password</p>
        <input
       type="password"
       v-model="oldPassword"
       name="oldPassword"
       required
       placeholder="Old password"
       class="md:tw-w-full lg:tw-w-full tw-w-full tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
     />

        <div class="tw-w-full tw-border tw-border-[#000000] tw-text-sm tw-flex tw-items-center pr-10">
      <input
        :type="isPasswordShown?'text':'password'"
        v-model="password"
        name="password"
        placeholder="New password"
        class="tw-w-11/12 tw-h-full tw-py-6 tw-px-4 tw-outline-none"
      />
      <img :onclick="toggleShowPassword" v-if="!isPasswordShown" src="~assets/icons/eye-off.svg" alt="" class="tw-mr-3">
      <img :onclick="toggleShowPassword" v-else src="~assets/icons/eye-open.svg" alt="" class="tw-mr-3 tw-max-w-[25px]">
      </div>

      <div class="tw-w-full tw-mt-4 tw-border tw-border-[#000000] tw-text-sm tw-flex tw-items-center pr-10">
      <input
        :type="isPasswordShown2?'text':'password'"
        v-model="password2"
        name="password2"
        placeholder="New password again"
        class="tw-w-11/12 tw-h-full tw-py-6 tw-px-4 tw-outline-none"
      />
      <img :onclick="toggleShowPassword" v-if="!isPasswordShown2" src="~assets/icons/eye-off.svg" alt="" class="tw-mr-3">
      <img :onclick="toggleShowPassword" v-else src="~assets/icons/eye-open.svg" alt="" class="tw-mr-3 tw-max-w-[25px]">
      </div>

     <!--  submit button -->
       <button
         type="submit"
         class="tw-text-white tw-mt-4 tw-bg-[#1E136B] tw-text-sm tw-font-normal tw-py-6 tw-w-full"
       >
         Save
       </button>
   </form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import SearchInput from "../../components/molecules/SearchInput.vue";
import Pagination from "src/components/molecules/Pagination.vue";
import {store} from "../../data/store.js";
import SelectInput from "src/components/molecules/SelectInput.vue";

export default {
    name: "StudentPage",
    data() {
        return {
           store,
           addUserModel: false,
           isPasswordShown: false,
           isPasswordShown2: false,
           resetPasswordModel: false,
           filters: {
                search: "",
                role: ""
            },
          students: {
            data:[{
              id: 1,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "johndoe@gmail.com",
              country: "India",
              track: "frontend development",
              status: "success"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              status: "success"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              status: "success"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              status: "success"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              status: "success"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              status: "success"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              status: "pending"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              status: "success"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              status: "success"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              status: "success"
            },
          ],
          page: 2,
          per_page: 10,
          total: 100,
          total_pages: 10,
          from: 1,
          to: 10
        },
        currentPage: 1,
      };
    },
    methods: {
       onstatusSelect(value) {
            this.filters.status = value;
        },
        onCoureSelect(value) {
            this.filters.course = value;
        },
        onPageChange(page) {
        this.currentPage = page;
      },
      openModel(){
        this.addUserModel = true;
      },
      openResetModel(){
        this.resetPasswordModel = true;
      },
      toggleShowPassword(){
        this.isPasswordShown = !this.isPasswordShown;
      },
      toggleShowPassword2(){
        this.isPasswordShown2 = !this.isPasswordShown2;
      },
  },
  mounted() {
    store.setHeaderTitle("Transactions");
  },
  unmounted() {
    store.setHeaderTitle("");
  },
  components: { SearchInput, Pagination, SelectInput }
};
</script>
