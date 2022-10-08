<template>
  <div class="tw-w-[198px] tw-px-5 tw-py-4" :style="'background-color:'+bgcolor">
    <Icon :icon="icon" :with="23" :height="19"/>
    <div class="tw-text-black tw-font-semibold tw-leading-5 tw-text-sm tw-mt-4">{{title}}</div>
    <div class="tw-text-black tw-font-semibold tw-leading-4 tw-text-xs tw-mb-5 tw-mt-1">{{subtitle}}</div>
    <div class="tw-w-full tw-bg-[#808080] tw-h-[1px]"></div>
    <div class="tw-flex tw-justify-between tw-items-center tw-mt-1">
      <p>Total</p>
      <div class="tw-text-black tw-font-semibold tw-text-sm">{{value}}</div>
    </div>
  </div>
</template>

<script>
import Icon from '../atoms/Icon.vue';
export default {
    name: "OverviewCard",
    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
        value: {
            type: Number,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        bgcolor: {
            type: String,
            required: true,
        },
    },
    components: { Icon }
}
</script>
