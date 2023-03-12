<template>
  <section class="ar-block-container section-news">
    <div class="container">
      <div class="section-news__wrapper">
        <div class="section-news__content">
          
          <h3 class="section-news__title" v-html="news?.node?.title"></h3>
          <div class="section-news__label" v-html="news?.node?.excerpt"></div>
          <AtomsTheButton
            :button-name="`${$t('readMore')}`"
            button-with="300px"
            :button-link="`/media/news/${news?.node?.translation.slug}`"
            type="color"
            class="button-container"
          />
        </div>
        <div class="section-news__image">
          <AtomsTheImage
            v-if="news?.node?.featuredImage"
            :image="news?.node?.featuredImage.node"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const props = defineProps({
  news: {
    type: Object,
    default: () => ({})
  },
})
</script>
<style lang="scss">
.section-news {
  background: #e6eaef;
  padding: 86px 0;
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__content {
    width: 45%;
  }
  &__date {
    display: block;
    font-size: 18px;
    margin-bottom: 24px;
    color: var(--color-primary);
  }
  &__title {
    display: block;
    margin-bottom: 16px;
  }
  &__label {
    display: block;
    font-size: 16px;
    line-height: 150%;
    color: #5f5f5f;
    margin-bottom: 52px;
  }
  &__image {
    position: relative;
    width: 50%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
@media (max-width: $mobile) {
  .section-news {
    &__wrapper {
      flex-direction: column-reverse;
    }
    &__content,
    &__image {
      width: 100%;
    }
    &__content {
      margin-top: 24px;
    }
    .button-container {
      width: 100% !important;
    }
  }
}
</style>