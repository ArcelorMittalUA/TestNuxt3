<template>
  <div v-html="attributes.originalContent"></div>
</template>
<script>
export default {
  props: {
    attributes: {},
  },
}
</script>