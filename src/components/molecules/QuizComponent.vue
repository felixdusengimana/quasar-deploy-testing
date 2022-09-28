<template>
<div class="tw-w-fit q-mx-auto tw-pb-10">
  <QuestionCodeEditor  v-if="currentQuestionType==0"/>
  <CompareInterfaceQuestions v-else-if="currentQuestionType===1"/>
  <MultipleChoiseQuestion :questions="questions" v-else/>
<!--
  <div class="tw-w-full tw-flex tw-justify-between tw-items-center">
          <q-btn :disable="currentQuestion==0" class="tw-bg-primary-bg-color tw-text-white tw-text-base tw-font-normal text-center px-5 py-3 tw-rounded-lg tw-mt-3">Previous</q-btn>
          <q-btn :onclick="nextQuestion" :disable="currentQuestion==questions.length+1 || !selectedOption" class="tw-bg-primary-bg-color tw-text-white tw-text-base tw-font-normal text-center px-5 py-3 tw-rounded-lg tw-mt-3">Next</q-btn>
        </div> -->

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
import MultipleChoiseQuestion from './questions/MultipleChoiseQuestion.vue';
import CompareInterfaceQuestions from './questions/CompareInterfaceQuestions.vue';
import QuestionCodeEditor from './questions/QuestionCodeEditor.vue';
  export default{
    name: "quiz-component",
    props: {
        questions: {
            type: Array,
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
            if(this.currentQuestionType+1<3){
                this.currentQuestionType++;
            }else{
                this.currentQuestionType=0;
            }
            window.scrollTo(0,0);
        },
    },
    setup(props) {
        props.questions;
    },
    components: { MultipleChoiseQuestion, CompareInterfaceQuestions, QuestionCodeEditor }
}
</script>
