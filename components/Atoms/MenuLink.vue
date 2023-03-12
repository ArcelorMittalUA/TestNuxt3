<script lang="ts" setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  arrow: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <NuxtLink :to="localePath(item.path)">
    <span v-if="arrow != 0" class="header-menu__icon">
      <AtomsIconsTheArrow />
    </span>
    <span v-else>{{ item.label }}</span>
  </NuxtLink>
</template>
