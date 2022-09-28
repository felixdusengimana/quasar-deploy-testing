<template>
  <div>
    <div class="tw-w-fit q-mx-auto tw-mb-10 tw-text-center">
         <h1 class="tw-text-[#1E136B] tw-font-normal tw-text-4xl">Introduction to Product design</h1>
         <p class="tw-text-base">Use the editor below to submit  your work . do not copy and paste your answers type them into the spaces provided</p>
         <div class="tw-flex tw-gap-2 tw-justify-center">
         <div>
          <p>Assignment Due Date:</p>
          <p>The Start Date:     </p>
          <p>Last Updated        </p>
         </div>
         <div class="tw-font-bold">
          <p>21st October, 2022 (GMT+1)</p>
          <p>21st October, 2022 (GMT+1)</p>
          <p>21st October, 2022 (GMT+1)</p>
         </div>
         </div>
      </div>
    <div class="tw-border-[1.5px] tw-p-12 tw-border-[#BFBFBF] tw-rounded-lg">
      <h1 class="tw-font-bold tw-text-base tw-mb-3">Question 1</h1>
      <div class="tw-mb-8">
        <p class="tw-mb-2">Prepare a project proposal in any format that fits on one 8.5x11 page (one side only). Sample proposals from previous classes are available above. We will photocopy the proposals and distribute them in Ses #3. Proposals should include:</p>
         <ul class="tw-list-disc">
          <li>A brief, descriptive project title (2-4 words). This is critical!</li>
          <li>The 3 nearest competitors (existing solutions) and price.</li>
          <li>Your name, phone number, email, department/degree program, and year.</li>
          <li>A description of the product opportunity you have identified. Your description may include any of the following: Documentation of the market need, shortcomings of existing competitive products, and definition of the target market and its size.</li>
          <li>Please do not present any of your own product ideas or solutions at this point; our strict focus in this phase of the course is on the market opportunity and not on solution concepts.</li>
         </ul>
      </div>
      <div>
        <text-editor @submit='getTextContent'/>
      </div>
    </div>
  </div>
  </template>

  <script>
  import TextEditor from '../../text-editor/TextEditor.vue'
    export default{
    data(){
      return{
        editor: ''
      }
    },
    components: { TextEditor },
    methods: {
      getTextContent(content) {
        alert(content)
        this.editor = content
      }
    },
    }
  </script>
