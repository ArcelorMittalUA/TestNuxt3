<script lang="ts" setup>
const props = defineProps({
  attributes: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <div class="image-block">
    <div class="container">
      <figure v-if="attributes" class="image-block__figure">
        <nuxt-picture
          :src="attributes.url"
          loading="lazy"
          legacyFormat="webp"
          class="image-block__picture"
          :imgAttrs="{
            class: 'image-block__img',
            style: 'display:block',
            'data-my-data': 'my-value',
          }"
        />
      </figure>
      <figcaption>
        <p class="image-block__caption" v-html="attributes.caption" />
      </figcaption>
    </div>
  </div>
</template>
<style lang="scss">
.image-block {
    margin-top: 24px;
    margin-bottom: 64px;
    position: relative;
    &__caption {
        margin-top: 16px;
        font-size: 14px;
    }
    &__img {
      max-width: 100%;
    }
}
</style>