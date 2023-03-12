<script lang="ts" setup>
const props = defineProps({
  attributes: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <div class="column-block">
    <div v-for="column in attributes.innerBlocks" :key="column.order">
      <div v-html="column.saveContent"></div>
    </div>
  </div>
</template>
<style lang="scss">
.column-block {
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px 30px;
  row-gap: 32px;
  -moz-column-gap: 30px;
  column-gap: 30px;
  flex-wrap: wrap;
}
</style>