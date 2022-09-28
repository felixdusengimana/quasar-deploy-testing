<template>
  <div class="tw-w-fit q-mx-auto tw-text-center">
    <h1 class="tw-text-black tw-font-normal tw-text-3xl">Compare the two interfaces</h1>
      <div class="tw-flex tw-item-center tw-gap-10 tw-justify-between">
        <div class="tw-text-center">
          <h1 class="tw-font-bold tw-text-3xl tw-my-10 tw-leading-3">A</h1>
          <img src="~assets/img/quiz/quiz_2_1.png" class="tw-mb-3"/>
          <label for="radio1">
            <input type="radio" id="radio1" name="radio1" v-model="right" value="a"/>
          </label>
        </div>
        <div class="tw-text-center">
          <h1 class="tw-font-bold tw-text-3xl tw-my-10 tw-leading-3">B</h1>
          <img src="~assets/img/quiz/quiz_2_2.png" class="tw-mb-3"/>
          <label for="radio2">
            <input type="radio" name="radio2" id="radio2" v-model="right" value="b"/>
          </label>
        </div>
      </div>
    </div>
</template>

<script>
  import { ref } from 'vue'

  export default{
    name: "compare-interface-questions",
    data: () => ({
      right: ref(''),
    }),
    methods: {
      checkAnswer() {
        alert(this.right)
      }
    }
  }
</script>
