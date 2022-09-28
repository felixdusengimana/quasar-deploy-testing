<template>
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
      <!-- <pre><code>{{ editor }}</code></pre> -->
    </div>
  </div>
</template>

<script>
import TextEditor from '../text-editor/TextEditor.vue'
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
