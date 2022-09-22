<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "navbar-component",
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
  data() {
    return {
      drawer: null,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
