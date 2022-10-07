<template>
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
</template>

<script>
  export default {
    name: "TopicDropDownItem",
    props: {
      topic: {
        type: Object,
        default: () => {},
        required: true,
      },
    },
  }
</script>
