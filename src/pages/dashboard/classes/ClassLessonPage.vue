<template>
  <div class="tw-mt-3 tw-flex tw-flex-col tw-overflow-hidden">

    <!-- <header></header> -->
    <div class="tw-flex tw-items-center tw-gap-6 md:tw-flex-row tw-flex-col">
        <div class="tw-h-[75px] tw-bg-[#1E136B] tw-py-6 tw-px-16">
          <p class="tw-text-white tw-font-bold tw-text-xl">First Semester Month-1 Lessons</p>
        </div>

    <div class="tw-flex tw-justify-between tw-grow md:tw-w-fit tw-pr-12">
      <div class="tw-flex tw-items-center tw-gap-1 tw-cursor-pointer">
        <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.49257 -3.44938e-07L10 1.50875L3.01486 8.5L10 15.4912L8.49257 17L1.3041e-06 8.5L8.49257 -3.44938e-07Z" fill="black"/>
        </svg>
        <p class="tw-text-primary-bg-color tw-underline tw-font-bold tw-capitalize tw-text-bases">Back</p>
      </div>
      <div>
       <button class="tw-text-base tw-font-medium tw-py-2 tw-px-10 tw-capitalize tw-rounded-full tw-text-center tw-text-white tw-bg-primary-bg-color">
        Previous
       </button>
       <button class="tw-text-base tw-font-medium tw-py-2 tw-px-10 tw-capitalize tw-rounded-full tw-text-center tw-text-primary-bg-color tw-ml-4 tw-border tw-border-primary-bg-color">
        Next
       </button>
      </div>
    </div>
  </div>

  <!-- courses view  -->
  <div class="tw-h-[70vh] tw-w-full tw-flex md:tw-flex-row tw-flex-col tw-mt-3 tw-pr-16">
    <div class="md:tw-min-w-[423px] tw-max-w-10 md:tw-pl-14 tw-pl-0 tw-w-fit tw-h-full tw-overflow-auto">
      <div class="tw-border-l-4 tw-pb-3" v-for="(week, index) in lesson_data" :key="'week'+index">
       <p class="tw-bg-white tw-ml-[-20px] tw-py-2">{{week.title}}</p>
      <q-list class="tw-w-full tw-my-10 ">
        <q-expansion-item
          v-for="(week_course, weekindex) in week.chapter"
          :key="'container'+weekindex"
          clickable
          expand-separator
          :label="week_course.title"
          :caption="week_course.topics.length+' Topics'"
          expand-icon-class="tw-text-black"
          class="tw-font-bold tw-text-base text-black"
        >
        <q-item
         v-for="(topic, index) in week_course.topics"
          :key="'topic'+index"
          :onclick="()=>{
            selectedIndex = (index+topic.title)
            isVideo =(topic.video!==null)
            }"
          :class="selectedIndex === (index+topic.title) ? 'tw-border-[#FB6765] tw-border-l-8 tw-bg-[#F0F0F0]':'tw-border-2 tw-border-gray-200 tw-bg-white'"
          class="tw-flex tw-max-h-[65px] tw-w-full tw-justify-between tw-py-5 tw-px-3 tw-cursor-pointer tw-duration-300 tw-transition-all"
          >
            <TopicDropDownItem :topic="topic"/>
        </q-item>
        <!-- quiz section  -->
        <div
          v-if="week.chapter.length === weekindex+1"
          class="tw-w-full"
          >
          <div
          v-for="(quiz, index) in week.quizes"
          :key="'quiz'+index"
          :onclick="()=>$router.push({path:'/quiz/'+quiz.id})"
          >
           <QuizDropDownItem :quiz="quiz"/>
           </div>
          </div>
        </q-expansion-item>
      </q-list>

    </div>
    </div>

   <div class="tw-h-full tw-overflow-auto">
   <ClassTextContent v-if="!isVideo"/>
   <ClassVideoContentPage v-else/>
   </div>
  </div>

</div>
</template>

<script>
import ClassTextContent from 'src/components/dashboard/ClassTextContent.vue';
import ClassVideoContentPage from 'src/components/dashboard/ClassVideoContentPage.vue';
import TopicDropDownItem from '../../../components/dashboard/TopicDropDownItem.vue';
import QuizDropDownItem from 'src/components/dashboard/QuizDropDownItem.vue';
  export default{
    data() {
        return {
           selectedIndex: '',
           isVideo: false,
            lesson_data: [
                {
                    title: "Week 1",
                    chapter: [{
                            title: "Introduction and course overview",
                            description: "This is the first lesson of the course. This lesson will give you an overview of the course and the topics that will be covered in this course.",
                            duration: "30",
                            topics: [
                                {
                                    title: "Focus of UI/UX Design",
                                    duration: "30",
                                    video: null,
                                    completed: true,
                                    content: "This is the first lesson of the course. This lesson will give you an overview of the course and the topics that will be covered in this course.",
                                },
                                {
                                    title: "What is UX Design?",
                                    duration: "30",
                                    video: "https://www.youtube.com/embed/1Q8fG0TtVAY",
                                    content: "This is the first lesson of the course. This lesson will give you an overview of the course and the topics that will be covered in this course.",
                                },
                                {
                                    title: "Research",
                                    duration: "30",
                                    video: null,
                                    content: "This is the first lesson of the course. This lesson will give you an overview of the course and the topics that will be covered in this course.",
                                }
                            ],
                        }, {
                            title: "Introduction and course overview",
                            description: "This is the first lesson of the course. This lesson will give you an overview of the course and the topics that will be covered in this course.",
                            duration: "30",
                            topics: [
                                {
                                    title: "Introduction",
                                    duration: "30",
                                    video: null,
                                    content: "This is the first lesson of the course. This lesson will give you an overview of the course and the topics that will be covered in this course.",
                                }
                            ],
                        }, {
                            title: "Introduction and course overview",
                            description: "This is the first lesson of the course. This lesson will give you an overview of the course and the topics that will be covered in this course.",
                            duration: "30",
                            topics: [
                                {
                                    title: "Introduction",
                                    duration: "30",
                                    video: null,
                                    content: "This is the first lesson of the course. This lesson will give you an overview of the course and the topics that will be covered in this course.",
                                }
                            ],
                        }, {
                            title: "Introduction and course overview",
                            description: "This is the first lesson of the course. This lesson will give you an overview of the course and the topics that will be covered in this course.",
                            duration: "30",
                            topics: [
                                {
                                    title: "Introduction",
                                    duration: "30",
                                    video: null,
                                    content: "This is the first lesson of the course. This lesson will give you an overview of the course and the topics that will be covered in this course.",
                                }
                            ],
                        }],
                        quizes: [
                                {
                                  id: 1,
                                   title: "Quiz 1",
                                    duration: "30",
                                    video: null,
                                    content: "This is the first lesson of the course. This lesson will give you an overview of the course and the topics that will be covered in this course.",
                                }
                            ]
                },
                {
                    title: "Week 2",
                    chapter: [{
                            title: "Introduction and course overview",
                            description: "This is the first lesson of the course. This lesson will give you an overview of the course and the topics that will be covered in this course.",
                            duration: "30",
                            topics: [
                                {
                                    title: "Introduction",
                                    duration: "30",
                                    video: null,
                                    content: "This is the first lesson of the course. This lesson will give you an overview of the course and the topics that will be covered in this course.",
                                }
                            ],
                        }]
                },
                {
                    title: "Week 3",
                    chapter: [{
                            title: "Introduction and course overview",
                            description: "This is the first lesson of the course. This lesson will give you an overview of the course and the topics that will be covered in this course.",
                            duration: "30",
                            topics: [
                                {
                                    title: "Introduction",
                                    duration: "30",
                                    video: null,
                                    content: "This is the first lesson of the course. This lesson will give you an overview of the course and the topics that will be covered in this course.",
                                },
                                {
                                    title: "Introduction",
                                    duration: "30",
                                    video: null,
                                    content: "This is the first lesson of the course. This lesson will give you an overview of the course and the topics that will be covered in this course.",
                                },
                                {
                                    title: "Introduction",
                                    duration: "30",
                                    video: null,
                                    content: "This is the first lesson of the course. This lesson will give you an overview of the course and the topics that will be covered in this course.",
                                },
                                {
                                    title: "Introduction",
                                    duration: "30",
                                    video: "https://www.youtube.com/embed/7lCDEYXw3mM",
                                    content: "This is the first lesson of the course. This lesson will give you an overview of the course and the topics that will be covered in this course.",
                                }
                            ],
                        }]
                },
            ]
        };
    },
    components: { ClassVideoContentPage, ClassTextContent, TopicDropDownItem, QuizDropDownItem }
}
</script>
