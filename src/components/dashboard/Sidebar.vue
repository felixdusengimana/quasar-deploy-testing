<template>
  <div>

  </div>
</template>

<script>
  export default {
    name: "sidebar-component",
    props: {
      user: {
        type: Object,
        default: () => {}
      },
      setting: {
        type: Object,
        default: () => {}
      },
    },
  }
</script>
