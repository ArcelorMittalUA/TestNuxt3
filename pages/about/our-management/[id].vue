<script lang="ts" setup>
import getManagement from "@/graphql/getManagement.gql";
const { locale } = useI18n();
const route = useRoute();

const variables = {
  locale: locale.value.toUpperCase(),
  slug: route.params.id,
};

const { data: getManagementData } = await useAsyncQuery(
  getManagement,
  variables
);
</script>
<template>
  <main class="page-content">
    <div class="container">
      <MoleculesBreadcrumbs
        :slug1="getManagementData?.getManagement?.translation?.title"
        class="breadcrumbs-container--page-no-cover"
      />
      <div class="wrapper-block">
        <div class="wrapper-block__content">
          <h3 class="wrapper-block__title">
            {{ getManagementData?.getManagement?.translation?.title }}
          </h3>
          <p class="wrapper-block__label">
            {{ getManagementData?.getManagement?.translation?.ManagementPosition.position }}
          </p>
          <div
            v-html="getManagementData?.getManagement?.translation?.content"
            class="wrapper-block__text"
          ></div>
        </div>
        <div class="wrapper-block__image">
          <nuxt-picture
            v-if="getManagementData?.getManagement?.translation?.featuredImage"
            :src="
              getManagementData?.getManagement?.translation?.featuredImage.node
                .sourceUrl
            "
            loading="lazy"
            class="wrapper-block__picture"
            :imgAttrs="{
              class: 'image-element__img',
              style: 'display:block',
              'data-my-data': 'my-value',
            }"
          />
          <div v-else class="wrapper-block__picture--loading"></div>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss">
.wrapper-block {
  margin-top: 64px;
  margin-bottom: 96px;
  display: flex;
  justify-content: space-between;
  &__content {
    position: relative;
    width: calc(50% - 15px);
  }
  &__image {
    display: block;
    height: 100%;
    min-height: 698px;
    position: relative;
    width: calc(50% - 15px);
  }
  &__title {
    margin-bottom: 4px;
  }
  &__label {
    position: relative;
    color: var(--color-primary);
  }
  &__text {
    margin-top: 32px;
    p {
      font-size: 21px;
      line-height: 150%;
      margin-bottom: 32px;
    }
  }
  &__picture {
    position: relative;
    &::before {
      content: "";
      display: table;
      padding-bottom: 112.2222%;
    }
    .image-element__img {
      z-index: 1;
    }
    &--loading {
      background: #e1e1e1;
      min-height: 698px;
    }
  }
}
@media (max-width: $mobile) {
  .wrapper-block {
    margin-top: 32px;
    margin-bottom: 64px;
    flex-direction: column-reverse;
    &__content,
    &__image {
      width: 100%;
      margin-bottom: 32px;
      min-height: auto;
    }
    &__text {
      margin-top: 24px;
      p {
        font-size: 16px;
      }
    }
  }
}
</style>