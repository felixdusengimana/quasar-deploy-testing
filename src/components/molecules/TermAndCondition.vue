<template>
    <InfoSafelyStored/>
    <p class="tw-max-w-[267.56px] tw-mt-2 tw-text-[#8F969D] tw-mx-auto tw-text-center tw-text-sm">
      {{text}} <a href="" class="tw-text-[#4A7DFF]">{{terms}}</a> and <a href="" class="tw-text-[#4A7DFF]">{{privacy}}</a>
    </p>
</template>

<script>
import InfoSafelyStored from 'src/pages/dashboard/InfoSafelyStored.vue';
  export default {
    name: "TermAndCondition",
    props: {
        text: {
            type: String,
            default: "By continuing you  agree to eduvacity",
        },
        terms: {
            type: String,
            default: "Terms & Condition",
        },
        privacy: {
            type: String,
            default: "Privacy Policy",
        },
        infoSafelySecured: {
            type: Boolean,
            default: true,
        },
    },
    setup(props) {
        props.text;
        props.terms;
        props.privacy;
    },
    components: { InfoSafelyStored }
};
</script>
