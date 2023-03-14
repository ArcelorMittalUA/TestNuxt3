<script lang="ts" setup>
const route = useRoute();

const props = defineProps({
  slug1: {
    type: String,
    default: () => ({}),
  },
  parent: {
    type: String,
    default: () => ({}),
  },
  breadcrumbs: {
    type: Array,
    default: () => ({}),
  },
});

const managementPage = computed(() => {
  return (
    route.name === "about-our-management-id___uk" ||
    route.name === "about-our-management-id___en"
  );
});

const allmanagementPage = computed(() => {
  return (
    route.name === "about-our-management___uk" ||
    route.name === "about-our-management___en"
  );
});

const allnewsPage = computed(() => {
  return (
    route.name === "media-news-id___uk" || route.name === "media-news-id___en"
  );
});

const searchPage = computed(() => {
  return route.name === "search___uk" || route.name === "search___en";
});
</script>
<template>
  <nav class="breadcrumbs-container">
    <ul v-if="breadcrumbs" class="breadcrumbs-list">
      <li v-for="item in breadcrumbs" :key="item.url" class="breadcrumbs-item">
        <AtomsTheCutBreadcrumbs :url="item.url" :text="item.text" />
      </li>
    </ul>
    <ul v-else class="breadcrumbs-list">
      <li class="breadcrumbs-item">
        <NuxtLink :to="localePath('/')" class="breadcrumbs-link">
          {{ $t("breadCrumbMain") }}
        </NuxtLink>
      </li>
      <li v-if="managementPage || allmanagementPage" class="breadcrumbs-item">
        <NuxtLink :to="localePath('/about')" class="breadcrumbs-link">
          {{ $t("aboutPageBreadcrumbs") }}
        </NuxtLink>
      </li>
      <li v-if="managementPage" class="breadcrumbs-item">
        <NuxtLink
          :to="localePath('/about/our-management')"
          class="breadcrumbs-link"
        >
          {{ $t("pageAllManagement") }}
        </NuxtLink>
      </li>
      <li v-if="allnewsPage" class="breadcrumbs-item">
        <NuxtLink :to="localePath('/media/news')" class="breadcrumbs-link">
          {{ $t("pageAllNews") }}
        </NuxtLink>
      </li>
      <li v-if="parent" class="breadcrumbs-item">
        <NuxtLink
          :to="localePath({ path: `/${parent.slug}` })"
          class="breadcrumbs-link"
          >{{ parent.title }}
        </NuxtLink>
      </li>
      <li class="breadcrumbs-item">
        <span
          class="breadcrumbs-link breadcrumbs-link--noactive"
          v-html="slug1"
        >
        </span>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.breadcrumbs-container {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 24px;
  overflow: hidden;
}
.breadcrumbs-list {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.breadcrumbs-item {
  position: relative;
  margin-left: 16px;
  &:first-child {
    margin-left: 0;
  }
  &::after {
    position: absolute;
    height: 18px;
    top: 2px;
    right: -6px;
    content: "";
    width: 1px;
    background: #ffffff;
    -webkit-transform: rotate(26deg);
    transform: rotate(26deg);
  }
  &:last-child::after {
    content: none;
    display: none;
  }
  &:last-child span {
    color: rgba(255, 255, 255, 0.6);
  }
}
.breadcrumbs-link {
  white-space: nowrap;
  font-size: 18px;
  color: #ffffff;
  margin-right: 8px;
  &--noactive {
    color: rgba(255, 255, 255, 0.6);
  }
}

.hero-content--black-text {
  .breadcrumbs-link {
    color: var(--color);
  }
  .breadcrumbs-item::after {
    background: var(--color);
  }
  .breadcrumbs-item:last-child span {
    color: rgba(0, 0, 0, 0.48);
  }
}

@media (max-width: $mobile) {
  .breadcrumbs-container {
    position: relative;
    overflow: hidden;
    margin-bottom: 0;
  }
  .breadcrumbs-list {
    padding-top: 15px;
    padding-bottom: 8px;
    overflow-x: auto;
  }
  .breadcrumbs-item {
    &::after {
      top: 2px;
      height: 16px;
    }
  }
  .breadcrumbs-link {
    font-size: 14px;
  }
}
</style>