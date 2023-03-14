<script lang="ts" setup>
const route = useRoute();

const props = defineProps({
  title: {
    type: String,
    default: () => ({}),
  },
  image: {
    type: Object, String,
    default: () => ({}),
  },
  parent: {
    type: Object, String,
    default: () => ({}),
  },
  date: {
    type: Object, String,
    default: () => ({}),
  },
  breadcrumbs: {
    type: Object,
    default: () => ({}),
  },
  baseUrl: {
    type: String,
    default: () => ({}),
  },
  description: {
    type: String,
    default: () => ({}),
  },
});

const newsPage = computed(() => {
  return (
    route.name === "media-news-id___uk" || route.name === "media-news-id___en"
  );
});

const newsPageAll = computed(() => {
  return route.name === "media-news___uk" || route.name === "media-news___en";
});

const managementPageAll = computed(() => {
  return (
    route.name === "about-our-management___uk" ||
    route.name === "about-our-management___en"
  );
});
</script>
<template>
  <section class="cover-image">
    <div
      class="cover-image__container"
      :class="[
        managementPageAll ? 'cover-background__container' : '',
        newsPageAll ? 'cover-background__container' : '',
      ]"
    >
      <figure v-if="image" class="cover-image__figure">
        <nuxt-picture
          :src="image.node.sourceUrl"
          class="cover-image__picture"
          :alt="image.node.altText"
          :imgAttrs="{
            class: 'cover-image__img',
            style: 'display:block',
            'data-my-data': 'my-value',
          }"
        />
        <figcaption>
          <span
            v-html="image.node.caption"
            class="cover-image__figcaption"
          ></span>
        </figcaption>
      </figure>
      <figure v-else-if="!image && !managementPageAll && !newsPageAll">
        <nuxt-picture
          src="/images/images-null.png"
          class="cover-image__picture"
          alt="test"
          :imgAttrs="{
            class: 'cover-image__img',
            style: 'display:block',
            'data-my-data': 'my-value',
          }"
        />
      </figure>
      <div
        v-else-if="[managementPageAll && newsPageAll]"
        class="cover-background"
        :class="[
          managementPageAll ? 'bg-blue' : '',
          newsPageAll ? 'bg-yellow' : '',
        ]"
      ></div>

      <figure v-else>
        <nuxt-picture
          src="/images/images-null.png"
          class="cover-image__picture"
          alt="test"
          :imgAttrs="{
            class: 'cover-image__img',
            style: 'display:block',
            'data-my-data': 'my-value',
          }"
        />
      </figure>
    </div>

    <div
      class="hero-content"
      :class="[
        newsPage ? 'hero-content--news' : '',
        managementPageAll ? 'hero-content--black-text' : '',
        newsPageAll ? 'hero-content--black-text' : '',
      ]"
    >
      <div class="container">
        <div class="hero-content__left">
          <MoleculesTheBreadcrumbs
            :slug1="title"
            :parent="parent"
            :breadcrumbs="breadcrumbs"
          />
          <div v-if="newsPage" class="hero-content-news__header">
            <h1 class="hero-content-news__title" v-html="title"></h1>

            <AtomsShareNews
              :title="title"
              :baseUrl="baseUrl"
              :description="description"
            />
          </div>
          <h1 v-else class="hero-content__title">
            {{ title }}
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.loading-page {
  height: 500px;
  position: relative;
  display: block;
  background: red;
}
.cover-image {
  position: relative;
  min-height: 400px;
  background: #000;
  &__container {
    width: 100%;
    height: 100vh;
    max-height: 632px;
    overflow: hidden;
    position: relative;
    z-index: 0;
    min-height: 500px;
  }
  &__picture {
    &::after {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 3;
      background: rgba(21, 21, 21, 0.66);
    }
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    -o-object-fit: cover;
    object-position: center;
    -o-object-position: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.cover-background__container {
  max-height: 400px;
  min-height: 400px;
}

.hero-content__date {
  font-size: 16px;
  margin-top: 64px;
  color: rgba(255, 255, 255, 0.65);
}
.hero-content {
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1;
  width: 100%;
  transform: translateY(-50%);
  &__title {
    color: #fff;
  }
  &--news {
    top: 100px;
    height: calc(100% - 100px);
    transform: inherit;
    .container,
    .hero-content__left {
      height: 100%;
    }
    .hero-content__left {
      display: flex;
      flex-direction: column;
    }
  }
}

.hero-content--black-text {
  .hero-content__title {
    color: var(--text);
  }
}

.hero-content-news {
  &__header {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: flex-end;
    margin-bottom: 76px;
  }
  &__date {
    color: #fff;
    margin-bottom: 16px;
  }
  &__title {
    width: 80%;
    font-size: 50px;
    line-height: 120%;
    color: #fff;
  }
}

.cover-background {
  background: #ececec;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

@media (max-width: $mobile) {
  .hero-content__left {
    height: 100%;
  }
  .hero-content--news {
    top: 64px;
    height: calc(100% - 64px);
  }
  .hero-content-news__header {
    margin-bottom: 48px;
  }
  .hero-content-news__title {
    width: 100%;
    font-size: 36px;
    line-height: 120%;
  }
}
</style>