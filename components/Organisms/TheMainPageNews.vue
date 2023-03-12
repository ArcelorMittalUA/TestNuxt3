<script lang="ts" setup>
const props = defineProps({
  news: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <div class="news-block-main">
    <div class="container">
      <AtomsTheTitle :title="`${$t('lastNews')}`" />
      <div class="news-block">
        <MoleculesTheNewsCard
          v-for="post in news"
          :key="post.id"
          :post="post.node"
        />
      </div>
      <AtomsTheButton
        :button-name="`${$t('allNews')}`"
        button-with="300px"
        button-link="/media/news"
        type="color"
        class="button-container"
      />
    </div>
  </div>
</template>
<style lang="scss">
.news-block-main {
  display: block;
  margin-bottom: 96px;
}
.news-block {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px 30px;
  row-gap: 56px;
  column-gap: 30px;
  flex-wrap: wrap;
}
.button-container {
  margin-top: 32px;
}
@media (max-width: $mobile) {
  .news-block {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 32px;
    margin-bottom: 64px;
  }
  .news-block-main .button-container {
    width: 100% !important;
  }
}
</style>