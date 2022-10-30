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
                      </q-list>
                  </q-expansion-item>
                </q-list>
              </q-expansion-item>
          </q-list>
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
                      </q-list>
                  </q-expansion-item>
                </q-list>
              </q-expansion-item>
          </q-list>
        </q-tab-panel>

        <q-tab-panel name="attendance">
          <q-list class="tw-w-fit lg:tw-w-[65vw] tw-mx-auto tw-mt-8">
              <chart></chart>
          </q-list>
        </q-tab-panel>
      </q-tab-panels>
    </q-page>
  </div>
</template>

<script>
import { ref, defineAsyncComponent } from 'vue'

const chart = defineAsyncComponent(() => 
 import('components/charts/performancechart.vue') 
) 


export default {
  components: {
    chart,
  },
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
