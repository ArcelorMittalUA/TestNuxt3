<script lang="ts" setup>
const props = defineProps({
  post: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <div class="large-card">
    <div v-if="post.featuredImage" class="large-card__image">
      <AtomsTheImage :image="post.featuredImage.node" />
    </div>
    <div class="large-card__content">
      <div class="large-card__title">
        <h4 class="Heading-h4" v-html="post.title"></h4>
      </div>
      <div
        v-if="post.excerpt"
        class="large-card__excerpt"
        v-html="post.excerpt"
      />
      <div class="large-card__footer">
        
      </div>
    </div>
    <NuxtLink
      :to="localePath(`/media/news/${post.translation.slug}`)"
      class="large-card__link"
    ></NuxtLink>
  </div>
</template>
<style lang="scss">
.large-card {
  position: relative;
  &:hover {
    .image-element__picture {
      top: -8px;
      right: -8px;
      bottom: -8px;
      left: -8px;
    }
    .large-card__title .Heading-h4 {
      opacity: 0.75;
    }
  }
}
.large-card__image {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.large-card__content {
  display: flex;
  flex-direction: column;
}
.large-card__title {
  margin-top: 16px;
  margin-bottom: 16px;
}
.large-card__excerpt {
  font-size: 15px;
  line-height: 120%;
  color: #5f5f5f;
  flex-grow: 1;
  margin-bottom: 16px;
  transition: all 0.4s ease;
}
.large-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.large-card__icon-podcast {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 32px);
  height: 100%;
}
.large-card__link {
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
@media (max-width: 1024px) {
  .large-card {
    flex-direction: column;
  }
  .large-card__image {
    width: 100%;
    padding-right: 0;
    margin-bottom: 12px;
  }
  .large-card__content {
    width: 100%;
  }
  .large-card__title {
    margin-top: 8px;
    margin-bottom: 16px;
  }
  .large-card__excerpt {
    margin-bottom: 24px;
    font-size: 13px;
  }
  .large-card__icon-podcast {
    width: 100%;
  }
}
@media (min-width: 1025px) and (max-width: 1235px) {
  .large-card__title {
    .Heading-h3 {
      font-size: 21px;
      line-height: 120%;
    }
    .Heading-h4 {
      font-size: 18px;
      line-height: 120%;
    }
  }
}
</style>