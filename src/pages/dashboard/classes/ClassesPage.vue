<template>
  <q-list class="tw-w-fit lg:tw-w-[65vw] tw-mx-auto tw-mt-8">
    <q-expansion-item
    v-for="(week, index) in all_assingments"
    :key="'container'+index"
    clickable
    expand-separator
    :label="week.name"
    expand-icon-class="tw-text-white"
    header-class="tw-h-[79px] tw-text-white tw-text-2xl tw-bg-primary-bg-color tw-flex tw-items-center tw-justify-between tw-py-5 tw-px-8 tw-my-4">
       <q-list bordered class="tw-w-full tw-my-4">
         <q-expansion-item
         v-for="(month, index) in week.lessons"
         :key="'month'+index"
          expand-separator :label="month.name" header-class="tw-w-full tw-text-[#FB6765] tw-text-xl tw-font-md hover:tw-bg-none tw-bg-[#F3F5F8] tw-border tw-border-[#00000024]">
              <q-card
              v-for="(month_week, index) in month.weeks"
              :key="'assing'+index"
               class="tw-w-full tw-bg-[#F3F5F8] tw-min-h-[66px] tw-border tw-border-[#00000024] tw-pl-5 tw-pr-11 tw-flex tw-items-center tw-justify-between">
                 <p class="tw-text-black tw-font-normal tw-text-xl">{{month_week.name}}</p>
                <router-link
                  :to="'/classes/lesson/'+month_week.id"
                  class="tw-text-xl tw-font-bold tw-py-2 tw-px-10 tw-capitalize tw-rounded-full tw-text-center tw-text-white tw-bg-primary-bg-color"
                  :class="month_week.status == 'locked' && 'tw-bg-[#1E136BA8]'"
                 >{{month_week.status=='done'?'Previous':'Start'}}</router-link>
            </q-card>
        </q-expansion-item>
       </q-list>
    </q-expansion-item>
</q-list>
</template>

<script>
  export default {
    name: "week-page",
    components: {
    },

    data() {
      return {
        all_assingments: [
          {
            name: 'First semester',
            id: 1,
            lessons: [
              {
                id: 1,
                name: 'First Semester month 1 - lessons',
                weeks: [
                  {
                    id: 1,
                    name: 'Week 1',
                    description: 'This is the first Week',
                    dueDate: '2022-12-12',
                    completed: false,
                    status: 'done'
                  },
                  {
                    id: 2,
                    name: 'Week 2',
                    description: 'This is the second Week',
                    dueDate: '2021-01-02',
                    completed: false,
                    status: 'unlocked'
                  },
                  {
                    id: 3,
                    name: 'Week 3',
                    description: 'This is the third Week',
                    dueDate: '2021-01-03',
                    completed: false,
                    status: 'locked'
                  },
                  {
                    id: 4,
                    name: 'Week 3',
                    description: 'This is the third Week',
                    dueDate: '2021-01-03',
                    completed: false,
                    status: 'locked'
                  },
                  {
                    id: 5,
                    name: 'Week 3',
                    description: 'This is the third Week',
                    dueDate: '2021-01-03',
                    completed: false,
                    status: 'locked'
                  }
                ]
              },
              {
                id: 2,
                name: 'First Semester month 2 - lessons',
                weeks: [
                  {
                    id: 1,
                    name: 'Week 1',
                    description: 'This is the first Week',
                    dueDate: '2021-01-01',
                    completed: false,
                    status: 'locked'
                  },
                  {
                    id: 2,
                    name: 'Week 2',
                    description: 'This is the second Week',
                    dueDate: '2021-01-02',
                    completed: false,
                    status: 'locked'
                  },
                  {
                    id: 3,
                    name: 'Week 3',
                    description: 'This is the third Week',
                    dueDate: '2021-01-03',
                    completed: false,
                    status: 'locked'
                  },
                ]
              }
            ]
          },
          {
            name: 'Second semester',
            id: 2,
            lessons: [
              {
                id: 1,
                name: 'First Semester month 1 - lessons',
                weeks: [
                  {
                    id: 1,
                    name: 'Week 1',
                    description: 'This is the first Week',
                    dueDate: '2021-01-01',
                    completed: false,
                    status: 'locked'
                  },
                  {
                    id: 2,
                    name: 'Week 2',
                    description: 'This is the second Week',
                    dueDate: '2021-01-02',
                    completed: false,
                    status: 'locked'
                  },
                  {
                    id: 3,
                    name: 'Week 3',
                    description: 'This is the third Week',
                    dueDate: '2021-01-03',
                    completed: false,
                    status: 'locked'
                  },
                ]
              }
            ]
          },
          {
            name: 'Third semester',
            id: 3,
            lessons: [
              {
                id: 1,
                name: 'First Semester month 1 - lessons',
                weeks: [
                  {
                    id: 1,
                    name: 'Week 1',
                    description: 'This is the first Week',
                    dueDate: '2021-01-01',
                    completed: false
                  },
                  {
                    id: 2,
                    name: 'Week 2',
                    description: 'This is the second Week',
                    dueDate: '2021-01-02',
                    completed: false
                  },
                  {
                    id: 3,
                    name: 'Week 3',
                    description: 'This is the third Week',
                    dueDate: '2021-01-03',
                    completed: false
                  },
                ]
              }
            ]
          }
        ],
      }
    },
    methods:{
    }
  };
</script>
