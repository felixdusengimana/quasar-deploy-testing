<template>
  <div>
    <div class="tw-w-full tw-bg-primary-bg-color tw-h-[75px] tw-text-center tw-flex tw-justify-center tw-items-center">
      <p class="tw-text-white tw-text-xl tw-font-bold">First Semester Month1: Assignment {{$route.params.id}}</p>
    </div>
    <div class="tw-my-5 tw-px-16 tw-w-full">
      <router-link to="/assignment" class="tw-bg-[#000060] tw-w-fit tw-text-white tw-flex tw-items-center tw-font-bold tw-text-base tw-py-2 tw-px-8 tw-rounded-md">
        <img class="" src="~assets/icons/caret-left.svg"/>
        Back
      </router-link>

      <QuizComponent :questions="questions"/>
    </div>
  </div>
</template>

<script>
import QuizComponent from "../../components/molecules/QuizComponent.vue";
  export default{
    name: "single-assignment",
    data() {
        return {
            questions: [
                {
                    id: 1,
                    question: "What is the capital of Bangladesh?",
                    options: [
                        {
                            id: 1,
                            option: "Dhaka"
                        },
                        {
                            id: 2,
                            option: "Chittagong"
                        },
                        {
                            id: 3,
                            option: "Rajshahi"
                        },
                        {
                            id: 4,
                            option: "Khulna"
                        }
                    ],
                    answer: 1
                },
                {
                    id: 2,
                    question: "What is the capital of India?",
                    options: [
                        {
                            id: 1,
                            option: "Kigali"
                        },
                        {
                            id: 2,
                            option: "Bujumbura"
                        },
                        {
                            id: 3,
                            option: "Text"
                        },
                        {
                            id: 4,
                            option: "Khulna"
                        }
                    ],
                    answer: 1
                },
                {
                    id: 3,
                    question: "What is the capital of Pakistan?",
                    options: [
                        {
                            id: 1,
                            option: "1"
                        },
                        {
                            id: 2,
                            option: "2"
                        },
                        {
                            id: 3,
                            option: "3"
                        },
                        {
                            id: 4,
                            option: "4"
                        }
                    ],
                    answer: 1
                },
                {
                    id: 4,
                    question: "What is the capital of Nepal?",
                    options: [
                        {
                            id: 1,
                            option: "Dhaka"
                        },
                        {
                            id: 2,
                            option: "Chittagong"
                        },
                        {
                            id: 3,
                            option: "Rajshahi"
                        },
                        {
                            id: 4,
                            option: "Khulna"
                        }
                    ],
                    answer: 1
                },
                {
                    id: 5,
                    question: "What is the capital of Bhutan?",
                    options: [
                        {
                            id: 1,
                            option: "Coz"
                        },
                        {
                            id: 2,
                            option: "Rutwits"
                        },
                        {
                            id: 3,
                            option: "Muzi"
                        },
                        {
                            id: 4,
                            option: "Khulna"
                        }
                    ],
                    answer: 1
                }
            ],
        };
    },
    components: { QuizComponent }
}
</script>
