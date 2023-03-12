<script lang="ts" setup>
import getNews from "@/graphql/getNews.gql";
const { locale } = useI18n();
const route = useRoute();

const variables = {
  locale: locale.value.toUpperCase(),
  slug: route.params.id,
};

const { data: getNewsData } = await useAsyncQuery(getNews, variables);
</script>
<template>
  <main class="page-content">
    <AtomsTheCoverImage
      :title="getNewsData?.getNews?.translation?.title"
      :image="getNewsData?.getNews?.translation?.featuredImage"
      :date="getNewsData?.getNews?.translation?.date"
      :description="getNewsData?.getNews?.translation?.excerpt"
    />

    <OrganismsTheBlocks :blocks="getNewsData?.getNews?.translation?.blocks" />
    <div v-if="locale == 'uk'" class="banner-block__news">
      <div class="container">
        <div class="banner-block-news__wrapper">
          <h2 class="banner-block-news__title">Читай новини Газети Металург</h2>
          <AtomsTheButton
            button-name="Перейти"
            button-with="300px"
            button-a="https://metalurg.online/"
            type="white"
            class="button-container"
          />
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss">
.banner-block__news {
  position: relative;
  padding: 96px 0;
  background: radial-gradient(
    122.56% 389.1% at -22.56% 175.97%,
    #460a78 11.35%,
    #be2878 43.57%,
    #fc3e44 77.36%,
    #f58746 99.72%
  );
}
.banner-block-news__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.banner-block-news__title {
  color: #ffffff;
  width: 80%;
}
@media (max-width: $mobile) {
  .banner-block-news__wrapper {
    flex-direction: column;
    .button-content {
      width: 100% !important;
    }
  }
  .banner-block-news__title {
    width: auto;
  }
}
</style>