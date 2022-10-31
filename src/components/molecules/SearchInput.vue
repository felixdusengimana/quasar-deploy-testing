
<template>
  <div class="tw-flex tw-w-full tw-bg-[#F5F5F5] tw-max-w-[584px] tw-items-center tw-border tw-border-gray-400">
    <div class="tw-pl-4"><Icon :icon="'search'"/></div>
    <input
    type="text"
    name=""
    id=""
    class="tw-bg-inherit focus:tw-outline-none tw-h-[55px] tw-flex-grow tw-px-4"
    :placeholder="placeholder">
  </div>
</template>

<script>
import Icon from '../atoms/Icon.vue';
export default {
    name: "SearchComponent",
    data() {
        return {};
    },
    props: {
        placeholder: {
            type: String,
            default: "Search",
        },
    },
    methods: {},
    components: { Icon }
}
</script>
