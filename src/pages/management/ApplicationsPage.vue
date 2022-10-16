<template>
  <div class="container tw-px-7 tw-mt-7">
 <div class="tw-flex tw-justify-between">
  <SearchInput :placeholder="'Search application by any keyword'"/>
  <Dropdown :dropdownlist="filter_courses" :onItemClick="onCoureSelect" :rounded="'sm'" :icon="'none'" :noAnimation="true"/>
 </div>
 <table class="tw-table tw-w-full tw-mt-9">
  <thead class="tw-bg-[#F2F2FF]">
    <tr class="tw-py-6">
      <td class="tw-py-6 tw-pl-6">Name</td>
      <td>Contact</td>
      <td>email</td>
      <td>Country</td>
      <td>Track</td>
      <td>Date</td>
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
        <p class="tw-w-fit tw-px-1 tw-py-[6px]">{{data.date}}</p>
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
</template>

<script>
import SearchInput from "../../components/molecules/SearchInput.vue";
import Dropdown from "src/components/molecules/Dropdown.vue";
import Pagination from "src/components/molecules/Pagination.vue";
import {store} from "../../data/store.js";

export default {
    name: "StudentPage",
    data() {
        return {
           store,
            router: this.$route.params.id,
            filter_courses: [{
              id: 1,
              value: "Product design school"
            },
            {
              id: 2,
              value: "Management school"
            },
            {id: 3,
            value: "Software engineering school"
             },
            {
              id: 4,
              value: "Data school"

            }
          ],
          filters: {
                status: "all students",
                search: "",
                course: "frontend development"
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
              date: "01/10/2022"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              date: "01/10/2022"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              date: "01/10/2022"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              date: "01/10/2022"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              date: "01/10/2022"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              date: "01/10/2022"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              date: "01/10/2022"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              date: "01/10/2022"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              date: "01/10/2022"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              date: "01/10/2022"
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
       ondateSelect(value) {
            this.filters.date = value;
        },
        onCoureSelect(value) {
            this.filters.course = value;
        },
        onPageChange(page) {
        this.currentPage = page;
      }
  },
  mounted() {
    store.setHeaderTitle("Applications");
  },
  unmounted() {
    store.setHeaderTitle("");
  },
  components: { SearchInput, Dropdown, Pagination }
};
</script>
