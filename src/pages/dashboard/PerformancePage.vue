<template>
  <div class="tw-w-fit lg:tw-w-[75vw] tw-mx-auto tw-mt-8" >
    <q-page>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="negative"
        indicator-color="negative"
        align="justify"
      >
        <q-tab name="assignments" label="Assignment" />
        <q-tab name="quiz" label="Quiz" />
        <q-tab name="attendance" label="Attendance" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="assignments">
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
          <div class="tw-w-fit lg:tw-w-[65vw] tw-mx-auto tw-mt-8">
              <q-card class="my-card">
                  <q-card-section>
                    <q-list>
                      <q-item v-for="score in assignment_scores" :key="score.id" class="q-my-sm">
                        <q-item-section>
                           <q-item-label class="tw-text-indigo-900 tw-text-bold">{{ score.name }}</q-item-label>
                        </q-item-section>
                        <q-item-section>
                           <q-item-label class="tw-text-gray-600">Score:{{ score.score }}</q-item-label>
                        </q-item-section>
                        <q-item-section>
                           <q-item-label v-if="score.score < 50">
                             <span class="tw-bg-[#f5587b] tw-text-white tw-p-1 tw-rounded">Failed</span>
                           </q-item-label>
                           <q-item-label v-else>
                             <span class="tw-bg-[#22eaaa] tw-text-white tw-p-1 tw-rounded">Passed</span>
                           </q-item-label>
                        </q-item-section>
                        <q-item-section side>
                          <div v-if="score.score < 50">
                              <q-btn outline no-caps color="primary" label="Retake" />
                          </div>
                          <div v-else>
                             <q-btn outline no-caps color="primary" disable label="Retake" />
                          </div>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-card-section>
              </q-card>
          </div>
        </q-tab-panel>

        <q-tab-panel name="quiz">
          <q-list class="tw-w-fit lg:tw-w-[65vw] tw-mx-auto tw-mt-8">
              <q-expansion-item
              v-for="(quiz, index) in all_quiz"
              :key="'container'+index"
              clickable
              expand-separator
              :label="quiz.name"
              expand-icon-class="tw-text-white"
              header-class="tw-h-[79px] tw-text-white tw-text-2xl tw-bg-primary-bg-color tw-flex tw-items-center tw-justify-between tw-py-5 tw-px-8 tw-my-4">
                <q-list bordered class="tw-w-full tw-my-4">
                  <q-expansion-item
                  v-for="(month, index) in quiz.months"
                  :key="'month'+index"
                    expand-separator :label="month.name" header-class="tw-w-full tw-text-[#FB6765] tw-text-xl tw-font-md hover:tw-bg-none tw-bg-[#F3F5F8] tw-border tw-border-[#00000024]">
                      <q-list class="tw-flex tw-items-center tw-my-3 tw-px-2 tw-max-w-full tw-overflow-auto tw-gap-8">
                        <q-card
                        v-for="(month_quiz, index) in month.quizs"
                        :key="'assing'+index"
                        class="tw-max-w-[284px] tw-min-w-[284px] tw-min-h-[340px] tw-py-8 tw-px-5 tw-rounded-[10px] tw-flex tw-flex-col tw-justify-between tw-border tw-border-[#CCCCCC] tw-shadow-form">
                          <q-item>
                            <q-item-section>
                              <q-item-label class="tw-text-xl tw-font-bold tw-text-black">{{month_quiz.name}}</q-item-label>
                              <q-item-label caption
                              class="tw-flex tw-items-center tw-justify-start tw-gap-1 tw-font-normal tw-text-sm"
                              :class="isInThePast(month_quiz.dueDate)?'tw-text-[#9F9F9F]':'tw-text-red-500'">
                                <img src="~assets/icons/info-gray.svg" alt="">
                                <p>Due date: {{new Date(month_quiz.dueDate).toLocaleDateString("en-US", {
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
                            :to="'/assignments/'+month_quiz.id"
                            class="tw-text-sm tw-font-normal tw-py-3 tw-rounded-full tw-text-center"
                          :class="isInThePast(month_quiz.dueDate)?'tw-bg-[#2CCA58] tw-text-white':'tw-bg-white tw-text-[#00009F] tw-border tw-border-[#00009F]'"
                          >{{isInThePast(month_quiz.dueDate)?'View feedback' : 'Continue'}}</router-link>
                      </q-card>
                      </q-list>
                  </q-expansion-item>
                </q-list>
              </q-expansion-item>
          </q-list>
          <div class="tw-w-fit lg:tw-w-[65vw] tw-mx-auto tw-mt-8">
              <q-card class="my-card">
                  <q-card-section>
                    <q-list>
                      <q-item v-for="score in quiz_scores" :key="score.id" class="q-my-sm">
                        <q-item-section>
                           <q-item-label class="tw-text-indigo-900 tw-text-bold">{{ score.name }}</q-item-label>
                        </q-item-section>
                        <q-item-section>
                           <q-item-label class="tw-text-gray-600">Score:{{ score.score }}</q-item-label>
                        </q-item-section>
                        <q-item-section>
                           <q-item-label v-if="score.score < 50">
                             <span class="tw-bg-[#f5587b] tw-text-white tw-p-1 tw-rounded">Failed</span>
                           </q-item-label>
                           <q-item-label v-else>
                             <span class="tw-bg-[#22eaaa] tw-text-white tw-p-1 tw-rounded">Passed</span>
                           </q-item-label>
                        </q-item-section>
                        <q-item-section side>
                          <div v-if="score.score < 50">
                              <q-btn outline no-caps color="primary" label="Retake" />
                          </div>
                          <div v-else>
                             <q-btn outline no-caps color="primary" disable label="Retake" />
                          </div>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-card-section>
              </q-card>
          </div>
        </q-tab-panel>

        <q-tab-panel name="attendance">
          <q-list class="tw-w-fit lg:tw-w-[65vw] tw-mx-auto tw-mt-8">
              <q-expansion-item
              v-for="(attendance, index) in all_attendance"
              :key="'container'+index"
              clickable
              expand-separator
              :label="attendance.name"
              expand-icon-class="tw-text-white"
              header-class="tw-h-[79px] tw-text-white tw-text-2xl tw-bg-primary-bg-color tw-flex tw-items-center tw-justify-between tw-py-5 tw-px-8 tw-my-4">
                <q-list bordered class="tw-w-full tw-my-4">
                  <q-expansion-item
                  v-for="(month, index) in attendance.months"
                  :key="'month'+index"
                    expand-separator :label="month.name" header-class="tw-w-full tw-text-[#FB6765] tw-text-xl tw-font-md hover:tw-bg-none tw-bg-[#F3F5F8] tw-border tw-border-[#00000024]">
                      <q-list class="tw-flex tw-items-center tw-my-3 tw-px-2 tw-max-w-full tw-overflow-auto tw-gap-8">
                        <q-card
                        v-for="(month_attendance, index) in month.attendance"
                        :key="'assing'+index"
                        class="tw-max-w-[284px] tw-min-w-[284px] tw-min-h-[340px] tw-py-8 tw-px-5 tw-rounded-[10px] tw-flex tw-flex-col tw-justify-between tw-border tw-border-[#CCCCCC] tw-shadow-form">
                          <q-item>
                            <q-item-section>
                              <q-item-label class="tw-text-xl tw-font-bold tw-text-black">{{month_attendance.name}}</q-item-label>
                              <q-item-label caption
                              class="tw-flex tw-items-center tw-justify-start tw-gap-1 tw-font-normal tw-text-sm"
                              :class="isInThePast(month_attendance.dueDate)?'tw-text-[#9F9F9F]':'tw-text-red-500'">
                                <img src="~assets/icons/info-gray.svg" alt="">
                                <p>Due date: {{new Date(month_attendance.dueDate).toLocaleDateString("en-US", {
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
                            :to="'/assignments/'+month_attendance.id"
                            class="tw-text-sm tw-font-normal tw-py-3 tw-rounded-full tw-text-center"
                          :class="isInThePast(month_attendance.dueDate)?'tw-bg-[#2CCA58] tw-text-white':'tw-bg-white tw-text-[#00009F] tw-border tw-border-[#00009F]'"
                          >{{isInThePast(month_attendance.dueDate)?'View feedback' : 'Continue'}}</router-link>
                      </q-card>
                      </q-list>
                  </q-expansion-item>
                </q-list>
              </q-expansion-item>
          </q-list>
        </q-tab-panel>
      </q-tab-panels>
    </q-page>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  data() {
      return {
        quiz_scores: [
          {
            id: 1,
            name: 'Week 1 Quiz',
            score: 35,
            isPassed: true,
          }, {
            id: 2,
            name: 'Week 2 Quiz',
            score: 70,
            isPassed: true,
          }, {
            id: 3,
            name: 'Week 3 Quiz',
            score: 70,
            isPassed: true,
          },
        ],
        assignment_scores: [
          {
            id: 1,
            name: 'Week 1 Quiz',
            score: 40,
            isPassed: true,
          }, {
            id: 2,
            name: 'Week 2 Quiz',
            score: 70,
            isPassed: true,
          }, {
            id: 3,
            name: 'Week 3 Quiz',
            score: 70,
            isPassed: true,
          },
        ],
        all_assingments: [
          {
            name: 'First semester',
            id: 1,
            months: [
              {
                id: 1,
                name: 'Month 1',
                assingments: [
                  {
                    id: 1,
                    name: 'Introduction to product design',
                    description: 'This is the first assignment',
                    dueDate: '2022-12-12',
                    completed: false
                  },
      
                ]
              },
              {
                id: 2,
                name: 'Month 2',
                assingments: [
                  {
                    id: 1,
                    name: 'Introduction to product design',
                    description: 'This is the first assignment',
                    dueDate: '2021-01-01',
                    completed: false
                  },
                ]
              },
              {
                id: 3,
                name: 'Month 3',
                assingments: [
                  {
                    id: 1,
                    name: 'Introduction to product design',
                    description: 'This is the first assignment',
                    dueDate: '2021-01-01',
                    completed: false
                  },
                ]
              }
            ]
          },
        
          ],
         all_quiz: [
          {
            name: 'First semester',
            id: 1,
            months: [
              {
                id: 1,
                name: 'Month 1',
                quizs: [
                  {
                    id: 1,
                    name: 'Introduction to product design',
                    description: 'This is the first assignment',
                    dueDate: '2022-12-12',
                    completed: false
                  },
      
                ]
              },
              {
                id: 2,
                name: 'Month 2',
                quizs: [
                  {
                    id: 1,
                    name: 'Introduction to product design',
                    description: 'This is the first assignment',
                    dueDate: '2021-01-01',
                    completed: false
                  },
                ]
              },
              {
                id: 3,
                name: 'Month 3',
                quizs: [
                  {
                    id: 1,
                    name: 'Introduction to product design',
                    description: 'This is the first assignment',
                    dueDate: '2021-01-01',
                    completed: false
                  },
                ]
              }
            ]
          },
        
          ],
         all_attendance: [
          {
            name: 'First semester',
            id: 1,
            months: [
              {
                id: 1,
                name: 'Month 1',
                attendance: [
                  {
                    id: 1,
                    name: 'Introduction to product design',
                    description: 'This is the first assignment',
                    dueDate: '2022-12-12',
                    completed: false
                  },
      
                ]
              },
              {
                id: 2,
                name: 'Month 2',
                attendance: [
                  {
                    id: 1,
                    name: 'Introduction to product design',
                    description: 'This is the first assignment',
                    dueDate: '2021-01-01',
                    completed: false
                  },
                ]
              },
              {
                id: 3,
                name: 'Month 3',
                attendance: [
                  {
                    id: 1,
                    name: 'Introduction to product design',
                    description: 'This is the first assignment',
                    dueDate: '2021-01-01',
                    completed: false
                  },
                ]
              }
            ]
          },
        
          ]

      }
    },
    methods:{
      isInThePast(date) {
        if(Date.parse(date)-Date.parse(new Date())<0){
          return true;
        }
        return false;
      }
    },
  setup () {
    return {
      tab: ref('quiz'),
    }
  }
}
</script>
