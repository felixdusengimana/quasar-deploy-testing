<template>
  <div class="container tw-px-7 tw-mt-7">
 <div class="tw-flex tw-justify-between">
  <Dropdown :dropdownlist="filter_statuses" :onItemClick="onStatusSelect"/>
  <SearchInput :placeholder="'Search student by any keyword'"/>
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
      <td>Status</td>
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
        <p :class="data?.status.toLowerCase()==='not admitted'?'tw-bg-[#FEE2E2] tw-text-[#FF0000] tw-border-[#FF0000]':'tw-bg-[#C3FDD7] tw-text-[#00A600] tw-border-[#00A600]'"
        class="tw-w-fit tw-px-1 tw-py-[6px] tw-rounded-sm tw-border">{{data.status}}</p>
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
export default {
    name: "StudentPage",
    data() {
        return {
            router: this.$route.params.id,
          filter_statuses: [{
              id: 1,
              value: "all students"
            },
            {
              id: 2,
              value: "all registered student"
            },
            {id: 3,
            value: "all active"
          },
            {
              id: 4,
              value: "all inactive"

            },{
              id: 5,
              value: "all admitted"
            }],

          filter_courses: [{
              id: 1,
              value: "frontend development"
            },
            {
              id: 2,
              value: "backend development"
            },
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
              status: "active"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              status: "Not admitted"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              status: "Not admitted"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              status: "Not admitted"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              status: "Not admitted"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              status: "Not admitted"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              status: "Not admitted"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              status: "Not admitted"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              status: "Not admitted"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              status: "Not admitted"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              status: "Not admitted"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              status: "Not admitted"
            },
            {
              id: 2,
              name: "John Doe",
              image: "https://cdn.quasar.dev/img/avatar.png",
              contact: "1234567890",
              email: "another@gmail.com",
              country: "India",
              track: "frontend development",
              status: "Not admitted"
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
       onStatusSelect(value) {
            this.filters.status = value;
        },
        onCoureSelect(value) {
            this.filters.course = value;
        },
    onPageChange(page) {
      console.log(page)
      this.currentPage = page;
    }
  },
  components: { SearchInput, Dropdown, Pagination }
};
</script>
