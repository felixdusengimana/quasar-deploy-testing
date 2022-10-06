<template>
<div class="tw-w-fit q-mx-auto tw-pb-10">
    <template v-if="!isQuiz">
      <QuestionCodeEditor  v-if="currentQuestionType==0"/>
      <CompareInterfaceQuestions v-else/>
    </template>
    <div v-else class="tw-mt-10">
      <MultipleChoiseQuestion :questions="questions"/>
    </div>
     <div class="tw-mt-3 tw-flex tw-justify-center tw-gap-32">
      <button class="tw-bg-[#000060] tw-w-fit tw-text-white tw-font-regula tw-text-base tw-py-2 tw-px-8 tw-rounded-full">
        Previous
      </button>
      <button @click="nextQuestion" class="tw-text-[#000060] tw-border tw-border-[#000060] tw-w-fit tw-bg-white tw-font-regular tw-text-base tw-py-2 tw-px-8 tw-rounded-full">
        Next
      </button>
    </div>

</div>
</template>
<script>
import CompareInterfaceQuestions from './questions/CompareInterfaceQuestions.vue';
import QuestionCodeEditor from './questions/QuestionCodeEditor.vue';
import MultipleChoiseQuestion from './questions/MultipleChoiseQuestion.vue';

  export default{
    name: "quiz-component",
    props: {
      questions: {
        type: Array,
        required: true
      },
      isQuiz: {
        type: Boolean,
        required: true
      }
    },
    data(){
      return{
        currentQuestionType: 0,
      }
    },
    methods: {
        checkAnswer() {
            alert(this.right);
        },
        nextQuestion() {
            if(this.currentQuestionType+1<2){
                this.currentQuestionType++;
            }else{
                this.currentQuestionType=0;
            }
            window.scrollTo(0,0);
        },
    },
    setup(props) {
        props.questions;
        props.isQuiz;
    },
    components: { CompareInterfaceQuestions, QuestionCodeEditor, MultipleChoiseQuestion }
}
</script>
