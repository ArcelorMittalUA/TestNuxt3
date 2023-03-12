<script lang="ts" setup>
import getAllNews from "@/graphql/getPageAllNews.gql";
const { locale } = useI18n();
const route = useRoute();
const { clients } = useApollo();

const showMoreEnabled = ref(true);
const pageSize = 6;

const variables = {
  first: pageSize,
  locale: locale.value.toUpperCase(),
  after: null,
};

const {
  result: getAllNewsData,
  fetchMore,
  loading,
} = useQuery(getAllNews, variables);

function showMores() {
  fetchMore({
    variables: {
      first: 3,
      after: getAllNewsData.value?.getAllNews?.pageInfo.endCursor,
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) return previousResult;
      const pageInfo = fetchMoreResult.getAllNews.pageInfo;
      showMoreEnabled.value = pageInfo.hasNextPage;
      return {
        ...previousResult,
        getAllNews: {
          ...previousResult.getAllNews,
          edges: [
            ...previousResult.getAllNews.edges,
            ...fetchMoreResult.getAllNews.edges,
          ],
          pageInfo: fetchMoreResult.getAllNews.pageInfo,
        },
      };
    },
  });
}
</script>
<template>
  <main>
    <AtomsTheCoverImage :title="`${$t('pageAllNews')}`" />
    <div class="container">
      <div class="allnews-page">
        <MoleculesTheNewsCard
          v-for="post in getAllNewsData?.getAllNews?.edges"
          :key="post.id"
          :post="post.node"
        />
        <div
          v-if="
            showMoreEnabled && getAllNewsData?.getAllNews?.pageInfo?.hasNextPage
          "
          class="allnews-page__button-block"
          @click="showMores"
        >
          <div v-if="loading" class="allnews-page__spinner">
            <AtomsIconsTheLoading />
          </div>
          <AtomsTheButton
            v-else
            :button-name="`${$t('loadMore')}`"
            button-with="254px"
            button-link="none"
            type="color"
            class="button-container"
          />
        </div>
        <div v-else></div>
      </div>
    </div>
  </main>
</template>
<style lang="scss">
.allnews-page {
  margin-top: 64px;
  margin-bottom: 96px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px 30px;
  row-gap: 32px;
  column-gap: 30px;
  flex-wrap: wrap;
}
.allnews-page__button-block {
  grid-column-start: 1;
  grid-column-end: 4;
}
.allnews-page__spinner {
  display: flex;
  justify-content: center;
}
@media (min-width: $mobile) and (max-width: 1180px) {
  .allnews-page {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: $mobile) {
  .allnews-page {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 32px;
    margin-bottom: 64px;
  }
  .allnews-page__button-block {
    .button-content {
      width: 100% !important;
    }
  }
}
</style>