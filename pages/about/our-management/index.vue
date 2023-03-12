<script lang="ts" setup>
import getAllManagement from "@/graphql/getAllManagement.gql";
const { locale } = useI18n();
const route = useRoute();

const variables = {
  locale: locale.value.toUpperCase(),
};

const { data: getAllManagementData } = await useAsyncQuery(
  getAllManagement,
  variables
);
</script>
<template>
  <main class="page-content">
    <AtomsTheCoverImage :title="`${$t('pageAllManagement')}`" />
    <div class="container">
      <div class="allmanagement-page">
        <div
          v-for="card in getAllManagementData?.getAllManagement?.edges"
          :key="card.node.id"
          class="management-cards"
        >
          <div class="management-cards__image">
            <div v-if="card.node.featuredImage" class="image-card__container">
              <nuxt-picture
                :src="card.node.featuredImage.node.sourceUrl"
                loading="lazy"
                class="image-card__picture"
                :imgAttrs="{
                  class: 'image-card__img',
                  style: 'display:block',
                  'data-my-data': 'my-value',
                }"
              />
            </div>
          </div>

          <div class="management-cards__content">
            <h5 class="management-cards__title">{{ card.node.title }}</h5>
            <p class="management-cards__position">
              {{ card.node.ManagementPosition.position }}
            </p>
            <NuxtLink
              :to="
                localePath(
                  `/about/our-management/${card.node.translation.slug}`
                )
              "
              class="management-cards__more"
            >
              {{ $t("readMore") }}
            </NuxtLink>
          </div>
          <NuxtLink
            :to="
              localePath(`/about/our-management/${card.node.translation.slug}`)
            "
            class="management-cards__link"
          ></NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss">
.allmanagement-page {
  margin-top: 72px;
  margin-bottom: 96px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px 30px;
  row-gap: 32px;
  column-gap: 30px;
  flex-wrap: wrap;
}
.management-cards {
  position: relative;
  &__image {
    overflow: hidden;
    position: relative;
    background: #e1e1e1;
    margin-bottom: 24px;
    &::before {
      display: block;
      padding-top: 108.8888%;
      content: "";
    }
  }
  &:hover {
    .image-card__picture {
      top: -8px;
      right: -8px;
      bottom: -8px;
      left: -8px;
    }
    .management-cards__more {
      background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(currentColor),
        to(currentColor)
      );
      background-image: linear-gradient(currentColor, currentColor);
      color: var(--color-primary);
      -webkit-animation: line 0.25s ease-in-out;
      animation: line 0.25s ease-in-out;
    }
  }
  &__title {
    display: block;
    margin-bottom: 16px;
  }
  &__position {
    display: block;
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 120%;
  }
  &__more {
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    font-family: inherit;
    padding-bottom: 2px;
    text-decoration: none;
  }
  &__link {
    &:after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2;
      content: "";
    }
  }
}

.image-card__container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.image-card__picture {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.15s ease-in-out 0s;
}
.image-card__img {
  -o-object-fit: cover;
  object-fit: cover;
  font-family: "object-fit: cover;object-position: center;";
  -o-object-position: center;
  object-position: center;
  width: 100%;
  height: 100%;
}
@media (min-width: $mobile) and (max-width: 1180px) {
  .allmanagement-page {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: $mobile) {
  .allmanagement-page {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 32px;
    margin-bottom: 64px;
  }
}
</style>