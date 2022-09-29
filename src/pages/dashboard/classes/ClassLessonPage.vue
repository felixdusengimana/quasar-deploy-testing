<template>
  <div class="tw-mt-3 tw-flex tw-flex-col">

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
          v-for="(week_course, index) in week.chapter"
          :key="'container'+index"
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

         <div class="tw-flex tw-gap-12  tw-items-center">
          <svg v-if="topic.completed" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9.5" cy="9.5" r="9.5" fill="#FB6765"/>
          <path d="M5.25 10L7.75 12.5L12.75 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <svg v-else width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9.5" cy="9.5" r="8.5" stroke="#FB6765" stroke-width="2"/>
        </svg>

        <div>
          <p class="tw-text-sm tw-font-normal text-black">{{topic.title}}</p>
          <p class="tw-text-xs tw-text-gray-400 tw-font-normal">{{topic.duration}} Min</p>
        </div>

         </div>


        <div>
          <img v-if="topic.video==null" src="~assets/icons/open_book.svg" alt="">
        <img v-else src="~assets/icons/video_player.svg" alt="">
        </div>

        </q-item>
        </q-expansion-item>

        <!-- quiz section  -->
        <div
          v-for="(quiz, index) in week.quizes"
          :key="'quiz'+index"
          :onclick="()=>$router.push({path:'/assignments/'+quiz.id})"
          :class="selectedIndex === (index+quiz.title) ? 'tw-border-[#FB6765] tw-border-l-8 tw-bg-[#F0F0F0]':'tw-border-2 tw-border-gray-200 tw-bg-white'"
          class="tw-flex tw-max-h-[65px] tw-w-full tw-justify-between tw-py-5 tw-px-3 tw-cursor-pointer tw-duration-300 tw-transition-all"
          >

         <div class="tw-flex tw-gap-4 tw-items-center">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9.5" cy="9.5" r="8.5" stroke="#FB6765" stroke-width="2"/>
        </svg>
        <div>
          <p class="tw-text-sm tw-font-normal text-black">{{quiz.title}}</p>
          <p class="tw-text-xs tw-text-gray-400 tw-font-normal">{{quiz.duration}} Min</p>
        </div>
         </div>

        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_1040_1313" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="23">
          <rect y="0.5" width="22" height="22" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_1040_1313)">
          <path d="M12.8333 14.2507C13.093 14.2507 13.3185 14.1553 13.5098 13.9647C13.7005 13.7734 13.7958 13.5479 13.7958 13.2882C13.7958 13.0284 13.7005 12.8029 13.5098 12.6117C13.3185 12.421 13.093 12.3257 12.8333 12.3257C12.5736 12.3257 12.3484 12.421 12.1577 12.6117C11.9665 12.8029 11.8708 13.0284 11.8708 13.2882C11.8708 13.5479 11.9665 13.7734 12.1577 13.9647C12.3484 14.1553 12.5736 14.2507 12.8333 14.2507ZM12.1458 11.3173H13.5208C13.5208 10.8743 13.5666 10.5495 13.6583 10.3429C13.75 10.137 13.9639 9.86593 14.3 9.52982C14.7583 9.07148 15.0639 8.70085 15.2166 8.4179C15.3694 8.13557 15.4458 7.80343 15.4458 7.42148C15.4458 6.73398 15.205 6.17268 14.7235 5.73757C14.2425 5.30185 13.6125 5.08398 12.8333 5.08398C12.2069 5.08398 11.6609 5.25968 11.1952 5.61107C10.729 5.96246 10.4041 6.42843 10.2208 7.00898L11.4583 7.51315C11.5958 7.13121 11.7831 6.8446 12.0202 6.65332C12.2567 6.46265 12.5278 6.36732 12.8333 6.36732C13.2 6.36732 13.4979 6.47029 13.7271 6.67623C13.9562 6.88279 14.0708 7.16176 14.0708 7.51315C14.0708 7.72704 14.0097 7.92932 13.8875 8.11998C13.7653 8.31126 13.5514 8.55204 13.2458 8.84232C12.7416 9.28537 12.4324 9.63279 12.3181 9.88457C12.2033 10.137 12.1458 10.6145 12.1458 11.3173ZM7.33331 17.0007C6.82915 17.0007 6.3977 16.8213 6.03898 16.4626C5.67965 16.1032 5.49998 15.6715 5.49998 15.1673V4.16732C5.49998 3.66315 5.67965 3.2314 6.03898 2.87207C6.3977 2.51335 6.82915 2.33398 7.33331 2.33398H18.3333C18.8375 2.33398 19.2692 2.51335 19.6286 2.87207C19.9873 3.2314 20.1666 3.66315 20.1666 4.16732V15.1673C20.1666 15.6715 19.9873 16.1032 19.6286 16.4626C19.2692 16.8213 18.8375 17.0007 18.3333 17.0007H7.33331ZM7.33331 15.1673H18.3333V4.16732H7.33331V15.1673ZM3.66665 20.6673C3.16248 20.6673 2.73104 20.488 2.37231 20.1292C2.01298 19.7699 1.83331 19.3382 1.83331 18.834V6.00065H3.66665V18.834H16.5V20.6673H3.66665Z" fill="#FB6765"/>
          </g>
          </svg>


        </div>
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
                            quiz: [
                                {
                                    title: "Introduction",
                                    duration: "30",
                                    video: null,
                                    content: "This is the first lesson of the course. This lesson will give you an overview of the course and the topics that will be covered in this course.",
                                }
                            ]
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
    components: { ClassVideoContentPage, ClassTextContent }
}
</script>
