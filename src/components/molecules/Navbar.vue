<template>
    <div :class="isWhite? 'tw-bg-white tw-border-b tw-border-[#000060]':'tw-bg-primary-dark-color'" class="tw-h-20 tw-w-full tw-flex tw-justify-center tw-items-center">
        <router-link to="/">
          <img v-if="isWhite" src="../../assets/img/logo/black-logo.svg" alt="Educacity Logo">
          <img v-else src="../../assets/img/logo/white-logo.svg" alt="Educacity Logo">
        </router-link>
    </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'navbar-component',
    props: {
        isWhite: Boolean
    },
    setup(props) {
        props.isWhite
    }
});
</script>

