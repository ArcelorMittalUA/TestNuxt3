<script lang="ts" setup>
const props = defineProps({
  attributes: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <div class="container">
    <div v-for="item in attributes.innerBlocks" :key="item.attributes.text">
      <AtomButton
        :button-name="item.attributes.text"
        button-with="300px"
        :button-link-core="item.attributes.url"
      />
    </div>
  </div>
</template>