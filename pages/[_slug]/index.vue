<script lang="ts" setup>
import getPages from "@/graphql/getPages.gql";
const { locale } = useI18n();
const route = useRoute();

const variables = {
  locale: locale.value.toUpperCase(),
  uri: route.params._slug,
};

const { result: getPagesData } = await useQuery(getPages, variables);

useHead({
  title: () => getPagesData?.value?.getPages?.translation?.seo?.title,
});

</script>
<template>
  <main class="page-content">
    <AtomsTheCoverImage
      :image="getPagesData?.getPages?.featuredImage"
      :title="getPagesData?.getPages?.translation?.title"
      :breadcrumbs="getPagesData?.getPages?.translation?.seo?.breadcrumbs"
    />
    <OrganismsTheBlocks :blocks="getPagesData?.getPages?.translation?.blocks" />
  </main>
</template>