<template>
  <div class="tw-w-fit q-mx-auto">
     <h1 class="text-center tw-font-normal tw-text-[55px] tw-leading-3">{{correctAnswers}}/{{questions.length}}</h1>
      <h1 class="text-center tw-text-[32px]">{{currentQuestionData.question}}</h1>
      <div class="options">
        <div
        v-for="(question,index) in currentQuestionData.options"
        :key="index"
        :onclick="selectedOption"
        class="option tw-border tw-mb-3 tw-border-[#9F9F9F] tw-px-6 tw-py-5 lg:tw-w-[550px] tw-rounded-lg md:tw-w-[550px] sm:tw-w-full">
          <input type="radio" hidden v-model="selectedOption" :name="'option'+question.id" id="option1" value={{question.id}}>
          <label :for="'option'+question.id" class="tw-text-base tw-font-semibold tw-text-[#808080]"
          :class="selectedOption==question.id?'tw-bg-blue':'bg-white'">
            {{question.option}}
          </label>
        </div>
        </div>
  </div>
</template>

<script>
  export default {
    props:{
      questions: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        currentQuestion: 0,
        selectedOption: null,
        correctAnswers: 0,
        wrongAnswers: 0,
        isFinished: false
      };
    },
    methods: {
      nextQuestion() {
        if (this.selectedOption === this.questions[this.currentQuestion].answer) {
          this.correctAnswers++;
        } else {
          this.wrongAnswers++;
        }
        this.currentQuestion++;
        this.selectedOption = null;
        if (this.currentQuestion === this.questions.length) {
          this.isFinished = true;
        }
      },
      restartQuiz() {
        this.currentQuestion = 0;
        this.selectedOption = null;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.isFinished = false;
      }
    },
    computed: {
      currentQuestionData() {
        return this.questions[this.currentQuestion];
      }
    },
    watch: {
      selectedOption: function() {
          setTimeout(() => {
            this.nextQuestion();
          }, 1000);
          console.log(this.currentQuestionData)
      }
    },
    setup(props){
      props.questions;
    }
  }
</script>
