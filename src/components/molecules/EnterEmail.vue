<template>
<div class="tw-flex tw-items-center tw-flex-col tw-w-full">
    <q-form
    @submit="onSubmit"
    @reset="onReset"
    class="tw-mt-10 tw-text-center lg:lg:tw-w-[972px]"
    >
    <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Enter your Email address"
          class="tw-w-full tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-text-sm tw-outline-none"
    />
    <p class="tw-text-xl tw-mt-6 tw-mb-24">Already have an account? <router-link to="/login" class="tw-text-[#4A7DFF] tw-font-bold">Sign in</router-link> </p>

    <button type="submit" class="tw-w-full tw-bg-[#000060] tw-h-[67px] tw-text-white tw-rounded-none tw-text-sm tw-capitalize">
        Continue
    </button>
    <div class="tw-mt-5 tw-w-full">
        <p class="tw-text-[#8692A6] tw-text-base tw-flex tw-w-fit tw-mx-auto">
        <img src="~assets/icons/lock.svg" alt="" class="tw-mr-2" />
        <span>Your Info is safely secured</span></p>
    </div>
    </q-form>
</div>
</template>
<script>
    import {ref} from 'vue'
    export default {
        name: 'email-input',
        props: {
            nextStep: {type: Function, required: false}
        },
        setup(props) {
            const firstName = ref('')
            const onSubmit = () => {
                console.log(firstName.value)
                props.nextStep()
            }
            const onReset = () => {
                firstName.value = ''
            }
            return {
                firstName,
                onSubmit,
                onReset
            }
        }
    }
</script>
