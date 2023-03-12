<script lang="ts" setup>
const props = defineProps({
  attributes: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <div v-html="attributes.originalContent"></div>
</template>