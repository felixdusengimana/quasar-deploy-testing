<template>
  <QuizComponent :questions="questions" :isQuiz="true"/>
</template>
<script>
import QuizComponent from 'src/components/molecules/QuizComponent.vue';
  export default{
    name: "PaymentPage",
    data(){
      return{
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
      }
    },
    components: { QuizComponent }
}
</script>
