<template>
  <div class="tw-container tw-flex tw-items-center tw-h-full tw-font-manrope tw-gap-6">
   <div class="tw-flex tw-flex-col tw-items-center tw-w-3/12 tw-h-auto">
    <ProfileLeftSide :fullname="'Aminu Abdulrasheed'" :title="'Product design student'"/>
   </div>
   <div class="tw-border-l-2 tw-border-[#DFDFE0] tw-h-full"></div>
   <div class="tw-grow">
     <ProfileRightSide :country="'Nigeria'" :course="'Design'" :dateofbirth="'05/20/2022'" :state="'Kaduna'" :gender="'male'"/>
    </div>
  </div>
</template>
<script>
import ProfileLeftSide from 'src/components/molecules/ProfileLeftSide.vue'
import ProfileRightSide from 'src/components/molecules/ProfileRightSide.vue';
export default {
  name: 'ProfilePage',
  data() {
    return {
      user: null,
    };
  },
  created() {
    // this.user = this.$store.getters['auth/user'];
  },
  components:{
    ProfileLeftSide,
    ProfileRightSide
  }
};
</script>
