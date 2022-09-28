<template>
  <div>
  <div v-if="editor" class="tw-border tw-border-[#808080] tw-rounded-b-lg tw-overflow-clip">
    <div class="tw-flex tw-justify-between tw-px-3 tw-py-4 tw-bg-[#F0F0F0]">
      <div class="tw-flex tw-gap-4">
        <button @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_1332_236" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
        <rect width="32" height="32" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_1332_236)">
        <path d="M9.3335 23.9987V5.33203H16.6668C18.1779 5.33203 19.5002 5.78759 20.6335 6.6987C21.7668 7.60981 22.3335 8.77648 22.3335 10.1987C22.3335 11.0431 22.1113 11.8263 21.6668 12.548C21.2224 13.2707 20.6224 13.8209 19.8668 14.1987V14.4654C20.8002 14.7765 21.5557 15.3263 22.1335 16.1147C22.7113 16.904 23.0002 17.7987 23.0002 18.7987C23.0002 20.332 22.3837 21.5823 21.1508 22.5494C19.9171 23.5156 18.4891 23.9987 16.8668 23.9987H9.3335ZM12.8668 12.932H16.4002C17.0668 12.932 17.6557 12.7209 18.1668 12.2987C18.6779 11.8765 18.9335 11.3431 18.9335 10.6987C18.9335 10.0543 18.6779 9.52092 18.1668 9.0987C17.6557 8.67648 17.0668 8.46536 16.4002 8.46536H12.8668V12.932ZM12.8668 20.7987H16.6668C17.4224 20.7987 18.0779 20.5707 18.6335 20.1147C19.1891 19.6596 19.4668 19.0765 19.4668 18.3654C19.4668 17.6543 19.1891 17.0707 18.6335 16.6147C18.0779 16.1596 17.4224 15.932 16.6668 15.932H12.8668V20.7987Z" fill="#9F9F9F"/>
        </g>
        </svg>
    </button>
    <button @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_1332_239" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
      <rect width="32" height="32" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_1332_239)">
      <path d="M6.6665 26.6654V22.6654H11.1665L16.4998 9.33203H11.9998V5.33203H25.3332V9.33203H20.8332L15.4998 22.6654H19.9998V26.6654H6.6665Z" fill="#9F9F9F"/>
      </g>
      </svg>
    </button>
    <button @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can().chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_1332_242" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
      <rect width="32" height="32" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_1332_242)">
      <path d="M16.2001 26.6661C14.5112 26.6661 13.0112 26.1661 11.7001 25.1661C10.389 24.1661 9.44453 22.7995 8.86675 21.0661L11.8001 19.7995C12.1112 20.8661 12.6499 21.7439 13.4161 22.4328C14.1832 23.1217 15.1334 23.4661 16.2667 23.4661C17.2001 23.4661 18.0445 23.2439 18.8001 22.7995C19.5556 22.355 19.9334 21.6439 19.9334 20.6661C19.9334 20.2661 19.8556 19.8995 19.7001 19.5661C19.5445 19.2328 19.3334 18.9328 19.0667 18.6661H22.8001C22.9112 18.9773 22.9947 19.2937 23.0507 19.6155C23.1059 19.9381 23.1334 20.2884 23.1334 20.6661C23.1334 22.5773 22.4499 24.055 21.0827 25.0995C19.7165 26.1439 18.089 26.6661 16.2001 26.6661ZM2.66675 15.9995V13.3328H29.3334V15.9995H2.66675ZM16.0667 5.13281C17.5334 5.13281 18.817 5.4937 19.9174 6.21548C21.017 6.93815 21.8667 8.04392 22.4667 9.53281L19.5334 10.8328C19.3334 10.1884 18.961 9.61059 18.4161 9.09948C17.8721 8.58837 17.1112 8.33281 16.1334 8.33281C15.2223 8.33281 14.4667 8.53859 13.8667 8.95015C13.2667 9.36081 12.9334 9.93281 12.8667 10.6661H9.66675C9.71119 9.13281 10.317 7.82703 11.4841 6.74881C12.6503 5.67148 14.1779 5.13281 16.0667 5.13281Z" fill="#9F9F9F"/>
      </g>
      </svg>
    </button>
    <button @click="editor.chain().focus().toggleCode().run()" :disabled="!editor.can().chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_1332_245" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
        <rect width="32" height="32" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_1332_245)">
        <path d="M14.6666 22.6654H9.33329C7.48885 22.6654 5.91685 22.0151 4.61729 20.7147C3.31685 19.4151 2.66663 17.8431 2.66663 15.9987C2.66663 14.1543 3.31685 12.5818 4.61729 11.2814C5.91685 9.98181 7.48885 9.33203 9.33329 9.33203H14.6666V11.9987H9.33329C8.22218 11.9987 7.27774 12.3876 6.49996 13.1654C5.72218 13.9431 5.33329 14.8876 5.33329 15.9987C5.33329 17.1098 5.72218 18.0543 6.49996 18.832C7.27774 19.6098 8.22218 19.9987 9.33329 19.9987H14.6666V22.6654ZM10.6666 17.332V14.6654H21.3333V17.332H10.6666ZM17.3333 22.6654V19.9987H22.6666C23.7777 19.9987 24.7222 19.6098 25.5 18.832C26.2777 18.0543 26.6666 17.1098 26.6666 15.9987C26.6666 14.8876 26.2777 13.9431 25.5 13.1654C24.7222 12.3876 23.7777 11.9987 22.6666 11.9987H17.3333V9.33203H22.6666C24.5111 9.33203 26.0835 9.98181 27.384 11.2814C28.6835 12.5818 29.3333 14.1543 29.3333 15.9987C29.3333 17.8431 28.6835 19.4151 27.384 20.7147C26.0835 22.0151 24.5111 22.6654 22.6666 22.6654H17.3333Z" fill="#9F9F9F"/>
        </g>
        </svg>
    </button>
    <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_1332_251" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
      <rect width="34" height="34" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_1332_251)">
      <path d="M6.375 27.625C5.78472 27.625 5.28322 27.4182 4.8705 27.0045C4.45683 26.5918 4.25 26.0903 4.25 25.5C4.25 24.9097 4.45683 24.4082 4.8705 23.9955C5.28322 23.5818 5.78472 23.375 6.375 23.375C6.96528 23.375 7.46678 23.5818 7.8795 23.9955C8.29317 24.4082 8.5 24.9097 8.5 25.5C8.5 26.0903 8.29317 26.5918 7.8795 27.0045C7.46678 27.4182 6.96528 27.625 6.375 27.625ZM11.3333 26.9167V24.0833H29.75V26.9167H11.3333ZM6.375 19.125C5.78472 19.125 5.28322 18.9182 4.8705 18.5045C4.45683 18.0918 4.25 17.5903 4.25 17C4.25 16.4097 4.45683 15.9082 4.8705 15.4955C5.28322 15.0818 5.78472 14.875 6.375 14.875C6.96528 14.875 7.46678 15.0818 7.8795 15.4955C8.29317 15.9082 8.5 16.4097 8.5 17C8.5 17.5903 8.29317 18.0918 7.8795 18.5045C7.46678 18.9182 6.96528 19.125 6.375 19.125ZM11.3333 18.4167V15.5833H29.75V18.4167H11.3333ZM6.375 10.625C5.78472 10.625 5.28322 10.4182 4.8705 10.0045C4.45683 9.59178 4.25 9.09028 4.25 8.5C4.25 7.90972 4.45683 7.40822 4.8705 6.9955C5.28322 6.58183 5.78472 6.375 6.375 6.375C6.96528 6.375 7.46678 6.58183 7.8795 6.9955C8.29317 7.40822 8.5 7.90972 8.5 8.5C8.5 9.09028 8.29317 9.59178 7.8795 10.0045C7.46678 10.4182 6.96528 10.625 6.375 10.625ZM11.3333 9.91667V7.08333H29.75V9.91667H11.3333Z" fill="#9F9F9F"/>
      </g>
      </svg>
    </button>
    <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_1332_248" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
      <rect width="32" height="32" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_1332_248)">
      <path d="M4 26.6654V25.332H6.66667V24.6654H5.33333V23.332H6.66667V22.6654H4V21.332H8V26.6654H4ZM10.6667 25.332V22.6654H28V25.332H10.6667ZM4 18.6654V17.4654L6.4 14.6654H4V13.332H8V14.532L5.6 17.332H8V18.6654H4ZM10.6667 17.332V14.6654H28V17.332H10.6667ZM5.33333 10.6654V6.66536H4V5.33203H6.66667V10.6654H5.33333ZM10.6667 9.33203V6.66536H28V9.33203H10.6667Z" fill="#9F9F9F"/>
      </g>
      </svg>
    </button>
    <button @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_1332_254" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
        <rect width="32" height="32" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_1332_254)">
        <path d="M12.8 20.8L14.6667 18.9L11.7667 16L14.6667 13.1L12.8 11.2L8 16L12.8 20.8ZM19.2 20.8L24 16L19.2 11.2L17.3333 13.1L20.2333 16L17.3333 18.9L19.2 20.8ZM6.66667 28C5.93333 28 5.30533 27.7391 4.78267 27.2173C4.26089 26.6947 4 26.0667 4 25.3333V6.66667C4 5.93333 4.26089 5.30533 4.78267 4.78267C5.30533 4.26089 5.93333 4 6.66667 4H25.3333C26.0667 4 26.6947 4.26089 27.2173 4.78267C27.7391 5.30533 28 5.93333 28 6.66667V25.3333C28 26.0667 27.7391 26.6947 27.2173 27.2173C26.6947 27.7391 26.0667 28 25.3333 28H6.66667ZM6.66667 25.3333H25.3333V6.66667H6.66667V25.3333Z" fill="#9F9F9F"/>
        </g>
        </svg>
    </button>

    <button @click="editor.chain().focus().setHorizontalRule().run()">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_1332_260" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
      <rect width="32" height="32" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_1332_260)">
      <path d="M26.6666 29.3346V2.66797H29.3333V29.3346H26.6666ZM10.6666 22.668V18.668H24V22.668H10.6666ZM2.66663 13.3346V9.33463H24V13.3346H2.66663Z" fill="#9F9F9F"/>
      </g>
      </svg>
    </button>
    <button @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_1332_257" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
      <rect width="32" height="32" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_1332_257)">
      <path d="M2.66663 29.3346V2.66797H5.33329V29.3346H2.66663ZM7.99996 22.668V18.668H21.3333V22.668H7.99996ZM7.99996 13.3346V9.33463H29.3333V13.3346H7.99996Z" fill="#9F9F9F"/>
      </g>
      </svg>
    </button>
      </div>
    <div  class="tw-flex tw-gap-4">
      <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_1332_266" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
      <rect width="32" height="32" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_1332_266)">
      <path d="M18.8 25.332H9.33337V22.6654H18.8C20.2 22.6654 21.4165 22.2209 22.4494 21.332C23.4832 20.4431 24 19.332 24 17.9987C24 16.6654 23.4832 15.5543 22.4494 14.6654C21.4165 13.7765 20.2 13.332 18.8 13.332H10.4L13.8667 16.7987L12 18.6654L5.33337 11.9987L12 5.33203L13.8667 7.1987L10.4 10.6654H18.8C20.9556 10.6654 22.8058 11.3654 24.3507 12.7654C25.8947 14.1654 26.6667 15.9098 26.6667 17.9987C26.6667 20.0876 25.8947 21.832 24.3507 23.232C22.8058 24.632 20.9556 25.332 18.8 25.332Z" fill="#9F9F9F"/>
      </g>
      </svg>
    </button>
    <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_1332_263" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
      <rect width="32" height="32" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_1332_263)">
      <path d="M13.2 25.332C11.0445 25.332 9.19471 24.632 7.65071 23.232C6.10582 21.832 5.33337 20.0876 5.33337 17.9987C5.33337 15.9098 6.10582 14.1654 7.65071 12.7654C9.19471 11.3654 11.0445 10.6654 13.2 10.6654H21.6L18.1334 7.1987L20 5.33203L26.6667 11.9987L20 18.6654L18.1334 16.7987L21.6 13.332H13.2C11.8 13.332 10.5836 13.7765 9.55071 14.6654C8.51693 15.5543 8.00004 16.6654 8.00004 17.9987C8.00004 19.332 8.51693 20.4431 9.55071 21.332C10.5836 22.2209 11.8 22.6654 13.2 22.6654H22.6667V25.332H13.2Z" fill="#9F9F9F"/>
      </g>
      </svg>
    </button>
    </div>
    </div>
    <div class="tw-p-2">
      <editor-content :editor="editor" class="editor-field"/>
    </div>
  </div>
  <!-- <div class="tw-mt-3 tw-flex tw-justify-center tw-gap-32">
      <button class="tw-bg-[#000060] tw-w-fit tw-text-white tw-font-regula tw-text-base tw-py-2 tw-px-8 tw-rounded-full">
        Previous
      </button>
      <button @click="submitData" class="tw-text-[#000060] tw-border tw-border-[#000060] tw-w-fit tw-bg-white tw-font-regular tw-text-base tw-py-2 tw-px-8 tw-rounded-full">
        Next
      </button>
    </div> -->
  </div>
</template>

<script>
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    }
  },
  props: {
    getContent: {
      type: Function,
      required: true,
    },
  },
  methods:{
     submitData(){
      this.$emit('submit', this.editor.getHTML())
    }
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
      ],
      content: `
        <h2>
          Hi there,
        </h2>
        <p>
          this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That’s a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
        </p>
        <pre><code class="language-css">body {
  display: none;
}</code></pre>
        <p>
          I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that’s amazing. Good work, boy! 👏
          <br />
          — Mom
        </blockquote>
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
  setup(props){
    props.getContent;
  }
}
</script>

<style scoped>
.editor-field::v-deep(.ProseMirror) {
  outline: none;
}
</style>
