<template>
  <div class="tw-container tw-flex tw-flex-shrink tw-justify-start xl:tw-justify-between tw-px-12 tw-mt-7 tw-gap-4 tw-flex-wrap">
    <OverviewCard
    v-for="(data, index) in overview"
    :key="index"
    :icon="data.icon"
    :title="data.title"
    :value="data.value"
    :bgcolor="data.bgcolor"
    :subtitle="'Total '+data.title"/>
  </div>
</template>
<script>
import OverviewCard from 'src/components/molecules/OverviewCard.vue';
export default {
    name: "ManagementDashboard",
    data() {
        return {
            overview: [
                {
                    id: 1,
                    title: "Registered Students",
                    value: 2000,
                    icon: "user_mark",
                    bgcolor: "#E1D2FF",
                },
                {
                    id: 2,
                    title: "Applications",
                    value: 20865,
                    icon: "application",
                    bgcolor: "#FDE1AC",
                },
                {
                    id: 3,
                    title: "Active Student",
                    value: 2000,
                    icon: "user",
                    bgcolor: "#CBF1EF",
                },
                {
                    id: 4,
                    title: "Inactive Student",
                    value: 2000,
                    icon: "user_off",
                    bgcolor: "#BAE5F5",
                },
                {
                    id: 5,
                    title: "Payment",
                    value: 2000,
                    icon: "payment",
                    bgcolor: "#CCEFBF",
                }
            ]
        };
    },
    components: { OverviewCard }
}
</script>
