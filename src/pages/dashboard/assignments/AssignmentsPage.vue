<template>
  <q-list class="tw-w-fit lg:tw-w-[65vw] tw-mx-auto tw-mt-8">
    <q-expansion-item
    v-for="(assignment, index) in all_assingments"
    :key="'container'+index"
    clickable
    expand-separator
    :label="assignment.name"
    expand-icon-class="tw-text-white"
    header-class="tw-h-[79px] tw-text-white tw-text-2xl tw-bg-primary-bg-color tw-flex tw-items-center tw-justify-between tw-py-5 tw-px-8 tw-my-4">
       <q-list bordered class="tw-w-full tw-my-4">
         <q-expansion-item
         v-for="(month, index) in assignment.months"
         :key="'month'+index"
          expand-separator :label="month.name" header-class="tw-w-full tw-text-[#FB6765] tw-text-xl tw-font-md hover:tw-bg-none tw-bg-[#F3F5F8] tw-border tw-border-[#00000024]">
            <q-list class="tw-flex tw-items-center tw-my-3 tw-px-2 tw-max-w-full tw-overflow-auto tw-gap-8">
              <q-card
              v-for="(month_assignment, index) in month.assingments"
              :key="'assing'+index"
               class="tw-max-w-[284px] tw-min-w-[284px] tw-min-h-[340px] tw-py-8 tw-px-5 tw-rounded-[10px] tw-flex tw-flex-col tw-justify-between tw-border tw-border-[#CCCCCC] tw-shadow-form">
                <q-item>
                  <q-item-section>
                    <q-item-label class="tw-text-xl tw-font-bold tw-text-black">{{month_assignment.name}}</q-item-label>
                    <q-item-label caption
                    class="tw-flex tw-items-center tw-justify-start tw-gap-1 tw-font-normal tw-text-sm"
                    :class="isInThePast(month_assignment.dueDate)?'tw-text-[#9F9F9F]':'tw-text-red-500'">
                      <img src="~assets/icons/info-gray.svg" alt="">
                      <p>Due date: {{new Date(month_assignment.dueDate).toLocaleDateString("en-US", {
                        day: 'numeric', year: 'numeric', month: 'short'
                      })}}</p>
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-card-section class="q-pt-none tw-font-normal tw-text-sm tw-text-black">
                  The assignment covers the lessons in introduction to product design video of week 1.
                </q-card-section>

                <div class="tw-w-full">
                  <p class="tw-float-right tw-font-bold tw-text-base">100%</p>
                  <q-linear-progress rounded size="8px" :value="1" color="secondary" class="tw-bg-[#2CCA58]" />
                </div>

                <router-link
                  :to="'/assignments/'+month_assignment.id"
                  class="tw-text-sm tw-font-normal tw-py-3 tw-rounded-full tw-text-center"
                :class="isInThePast(month_assignment.dueDate)?'tw-bg-[#2CCA58] tw-text-white':'tw-bg-white tw-text-[#00009F] tw-border tw-border-[#00009F]'"
                 >{{isInThePast(month_assignment.dueDate)?'View feedback' : 'Continue'}}</router-link>
            </q-card>
            </q-list>
        </q-expansion-item>
       </q-list>
    </q-expansion-item>
</q-list>
</template>

<script>
  export default {
    name: "assignment-page",
    components: {
    },

    data() {
      return {
        all_assingments: [
          {
            name: 'First semester Assignments',
            id: 1,
            months: [
              {
                id: 1,
                name: 'January',
                assingments: [
                  {
                    id: 1,
                    name: 'Introduction to product design',
                    description: 'This is the first assignment',
                    dueDate: '2022-12-12',
                    completed: false
                  },
                  {
                    id: 2,
                    name: 'Assignment 2',
                    description: 'This is the second assignment',
                    dueDate: '2021-01-02',
                    completed: false
                  },
                  {
                    id: 3,
                    name: 'Assignment 3',
                    description: 'This is the third assignment',
                    dueDate: '2021-01-03',
                    completed: false
                  },
                  {
                    id: 4,
                    name: 'Assignment 3',
                    description: 'This is the third assignment',
                    dueDate: '2021-01-03',
                    completed: false
                  },
                  {
                    id: 5,
                    name: 'Assignment 3',
                    description: 'This is the third assignment',
                    dueDate: '2021-01-03',
                    completed: false
                  }
                ]
              },
              {
                id: 2,
                name: 'January',
                assingments: [
                  {
                    id: 1,
                    name: 'Introduction to product design',
                    description: 'This is the first assignment',
                    dueDate: '2021-01-01',
                    completed: false
                  },
                  {
                    id: 2,
                    name: 'Assignment 2',
                    description: 'This is the second assignment',
                    dueDate: '2021-01-02',
                    completed: false
                  },
                  {
                    id: 3,
                    name: 'Assignment 3',
                    description: 'This is the third assignment',
                    dueDate: '2021-01-03',
                    completed: false
                  },
                ]
              }
            ]
          },
          {
            name: 'Second semester Assignments',
            id: 2,
            months: [
              {
                id: 1,
                name: 'January',
                assingments: [
                  {
                    id: 1,
                    name: 'Assignment 1',
                    description: 'This is the first assignment',
                    dueDate: '2021-01-01',
                    completed: false
                  },
                  {
                    id: 2,
                    name: 'Assignment 2',
                    description: 'This is the second assignment',
                    dueDate: '2021-01-02',
                    completed: false
                  },
                  {
                    id: 3,
                    name: 'Assignment 3',
                    description: 'This is the third assignment',
                    dueDate: '2021-01-03',
                    completed: false
                  },
                ]
              }
            ]
          },
          {
            name: 'Third semester Assignments',
            id: 3,
            months: [
              {
                id: 1,
                name: 'January',
                assingments: [
                  {
                    id: 1,
                    name: 'Assignment 1',
                    description: 'This is the first assignment',
                    dueDate: '2021-01-01',
                    completed: false
                  },
                  {
                    id: 2,
                    name: 'Assignment 2',
                    description: 'This is the second assignment',
                    dueDate: '2021-01-02',
                    completed: false
                  },
                  {
                    id: 3,
                    name: 'Assignment 3',
                    description: 'This is the third assignment',
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
      isInThePast(date) {
        if(Date.parse(date)-Date.parse(new Date())<0){
          return true;
        }
        return false;
      }
    }
  };
</script>
