<script lang="ts" setup>
const props = defineProps({
  urlst: {
    type: Object,
    default: () => ({}),
  },
  text: {
    type: String,
    default: () => ({}),
  },
});

const urlRemove = computed(() => {
  const url = props.urlst;
  return url.value?.replace(/^.*?:\/\/.*?(?=\/|$)/, "");
});
</script>
<template>
  <NuxtLink :to="localePath(urlRemove)" class="breadcrumbs-link">
    <span v-if="text === 'Home'">
      {{ $t("breadCrumbMain") }}
    </span>
    <span v-else v-html="text"></span>
  </NuxtLink>
</template>

<style lang="scss">
.breadcrumbs-link {
  white-space: nowrap;
  font-size: 18px;
  color: #ffffff;
  margin-right: 8px;
  &--noactive {
    color: rgba(255, 255, 255, 0.6);
  }
}
</style>