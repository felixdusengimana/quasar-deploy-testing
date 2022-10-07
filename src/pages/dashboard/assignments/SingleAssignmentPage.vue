<template>
    <div class="tw-w-full tw-bg-primary-bg-color tw-h-[75px] tw-text-center tw-flex tw-justify-center tw-items-center">
      <p class="tw-text-white tw-text-xl tw-font-bold">First Semester Month1: Assignment {{$route.params.id}}</p>
    </div>
    <div class="tw-my-5 tw-px-16 tw-w-full">
      <router-link to="/assignments" class="tw-bg-[#000060] tw-w-fit tw-text-white tw-flex tw-gap-1 tw-items-center tw-font-bold tw-text-base tw-py-2 tw-px-8 tw-rounded-md">
        <img class="" src="~assets/icons/caret-left.svg"/>
        Back
      </router-link>
    </div>
    <QuizComponent/>
</template>

<script>
import QuizComponent from 'src/components/molecules/QuizComponent.vue';
  export default{
    name: "single-assignment",
    data() {
        return {

        };
    },
    components: { QuizComponent }
}
</script>
