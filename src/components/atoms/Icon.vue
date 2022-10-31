<template>
  <img :src="require('../../assets/icons/'+(icon?icon:'user')+'.svg')" :alt="icon + 'image'" :width="width?width:size" :height="height?height:size"/>
</template>
<script>
export default {
  name: 'IconComponent',
  props: {
    icon: {
      type: String,
      required: true,
    },
    with: {
      type: Number,
    },
    height: {
      type: Number,
    },
    size: {
      type: Number,
      default: 24,
    },
  },
}
</script>
