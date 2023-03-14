<script lang="ts" setup>
import getMainPage from "@/graphql/getMainPage.gql";
import getMainPageNews from "@/graphql/getMainPageNews.gql";

type getMainPageNewsResult = {
  getMainPageNews: {
    edges: {}[];
  };
};

const { locale } = useI18n();

const variables = {
  locale: locale.value.toUpperCase(),
};

const { result: getMainPageData } = useQuery(getMainPage, variables);

const { result: getMainPageNewsData } = useQuery<getMainPageNewsResult>(
  getMainPageNews,
  {
    variables() {
      return {
        locale: this.$i18n.locale.toUpperCase(),
      };
    },
  }
);

const getMainPageNewsRes = computed(
  () => getMainPageNewsData.value?.getMainPageNews ?? []
);

const newsAll = computed(() => {
  if (!getMainPageNewsRes?.value.edges) return [];
  return getMainPageNewsRes.value.edges.slice(1, -1);
});


useHead({
  title: () => getMainPageData?.value?.getMainPage?.translation?.seo?.title,
});
</script>
<template>
  <main v-if="getMainPageData" class="page-content main">
    <OrganismsTheHeroMain
      :heading="getMainPageData?.getMainPage?.translation?.mainpage"
    />

    <AtomsBlocksBlockLinks
      :links="getMainPageData?.getMainPage?.translation?.mainpage"
    />

    <AtomsBlocksBlockNews
      v-if="getMainPageNewsData"
      :news="getMainPageNewsRes.edges[0]"
    />
    <OrganismsTheMainPageNews :news="newsAll" />
  </main>
</template>

