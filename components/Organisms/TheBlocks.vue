<script lang="ts" setup>
const props = defineProps({
  blocks: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <div class="site-content">
    <section
      v-for="block in blocks"
      :key="block.order"
      class="ar-block-container"
    >
      <!-- <div v-html="block.saveContent"></div>-->
      <div
        v-if="block.__typename == 'CoreParagraphBlock'"
        class="container container-sm"
      >
        <AtomsBlocksCoreParagraphBlock :attributes="block.attributes" />
      </div>
      <div v-else-if="block.__typename == 'CoreGalleryBlock'">
        <AtomsBlocksCoreGalleryBlock :attributes="block.innerBlocks" />
      </div>
      <div
        v-else-if="block.__typename == 'CoreListBlock'"
        class="container container-sm"
      >
        <AtomsBlocksCoreListBlock :attributes="block" />
      </div>
      <div v-else-if="block.__typename == 'CoreGroupBlock'">
        <AtomsBlocksCoreGroupBlock :attributes="block" />
      </div>
      <div
        v-else-if="block.__typename == 'CoreHeadingBlock'"
        class="container container-sm"
      >
        <AtomsBlocksCoreHeadingBlock :attributes="block.attributes" />
      </div>
      <div
        v-else-if="block.__typename == 'CoreFileBlock'"
        class="container container-sm"
      >
        <AtomsBlocksCoreFileBlock :attributes="block.attributes" />
      </div>
      <div v-else-if="block.__typename == 'CoreQuoteBlock'" class="quote-block">
        <AtomsBlocksCoreQuoteBlock :attributes="block" />
      </div>
      <div v-else-if="block.__typename == 'CoreImageBlock'">
        <AtomsBlocksCoreImageBlock :attributes="block.attributes" />
      </div>
      <div v-else-if="block.__typename == 'CoreButtonsBlock'">
        <AtomsBlocksCoreButtonsBlock :attributes="block" />
      </div>
      <div
        v-else-if="block.__typename == 'CoreEmbedBlock'"
        class="container container-sm"
      >
        <AtomsBlocksCoreEmbedBlock :attributes="block" />
      </div>
      <div
        v-else-if="block.__typename == 'CoreHtmlBlock'"
        class="container container-sm"
      >
        <div v-html="block.originalContent" class="html-block"></div>
      </div>
      <div
        v-else-if="block.__typename == 'CoreTableBlock'"
        class="container container-sm"
      >
        <AtomsBlocksCoreTableBlock :block="block" />
      </div>
      <div
        v-else-if="block.__typename == 'CoreColumnsBlock'"
        class="container container-sm"
      >
        <AtomsBlocksCoreColumnsBlock :attributes="block" />
      </div>
    </section>
  </div>
</template>
<style lang="scss">
.ar-block-container {
  position: relative;
  h2 {
    margin-bottom: 32px;
  }
  .alignfull {
  }
  .wp-block-media-text {
    .wp-block-media-text__content {
      margin-left: 8.33333%;
    }
  }
  .has-media-on-the-right {
    .wp-block-media-text__content {
      margin-right: 8.33333%;
      margin-left: 0;
    }
  }
  .is-vertically-aligned-center,
  .wp-block-columns {
    display: flex;
    align-items: center;
  }
  .wp-block-columns {
    padding-top: 96px;
    padding-bottom: 96px;
    justify-content: space-between;
  }
  .has-blue-background-color {
    background: var(--blue);
  }
  .has-black-background-color {
    background: #3f3f3f;
  }
  .has-dark-background-color {
    background: #5f5f5f;
  }
  .has-grey-background-color {
    background: #e1e1e1;
  }
  .has-light-blue-background-color {
    background: #e6eaef;
  }
  .wp-block-media-text__content {
    display: block;
    width: 45%;
    padding-top: 96px;
    padding-bottom: 96px;
    .has-white-color {
      color: #fff;
    }
    h3 {
      margin-bottom: 24px;
    }
    p {
      font-size: 16px !important;
      line-height: 150%;
      display: block;
    }
    p.has-white-color {
      color: rgba(255, 255, 255, 0.65);
    }
    p.has-black-color {
      color: #3f3f3f !important;
    }
  }
  .wp-block-media-text__media {
    position: relative;
    width: 55%;
    padding-top: 64px;
    padding-bottom: 64px;
    img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  .wp-block-buttons {
    margin-top: 48px;
  }
  .wp-block-button__link {
    background-image: none;
    &:hover {
      background-image: none;
    }
    &.has-text-color:hover {
      color: #fff !important;
    }
  }
}

.container-management {
  align-items: flex-start !important;
  .card-management {
    flex-basis: 0;
    flex-grow: 1;
    .wp-block-image {
      width: 100%;
      flex: 1;
      position: relative;
      &::before {
        display: block;
        padding-top: 103.333%;
        content: '';
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
      }
    }
  }
  .card-management__title {
    margin-top: 24px;
  }
  .card-management__position {
    margin-top: 16px;
  }
  .card-management__link {
    display: inline-block;
    margin-top: 24px;
    border-bottom: 1px solid;
  }
}
.quote-block {
  background-color: #f8f6f2;
  padding: 48px 0;
  margin-bottom: 32px;
}

.html-block {
  width: 100%;
}

.ar-block-container:first-child .block-title {
  margin-top: 0;
}

@media (max-width: $mobile) {
  .ar-block-container {
    h2 {
      font-size: 28px !important;
      margin-bottom: 24px;
    }
    .wp-block-columns {
      gap: 0;
      padding-top: 86px;
      padding-bottom: 86px;
    }
  }
  .container-management {
    display: flex;
    flex-direction: column;
    align-items: inherit !important;
  }
  .ar-block-container .has-dark-background-color .has-media-on-the-right {
    flex-direction: column-reverse;
  }
  .ar-block-container .is-vertically-aligned-center,
  .ar-block-container .wp-block-columns {
    flex-direction: column;
  }
  .ar-block-container .wp-block-column,
  .ar-block-container .wp-block-buttons {
    width: 100%;
  }
  .ar-block-container .wp-block-media-text__media {
    padding-top: 86px;
    padding-bottom: 0;
    width: 100%;
  }
  .ar-block-container .wp-block-media-text__content {
    padding-top: 24px;
    width: 100%;
  }
  .ar-block-container .has-media-on-the-right .wp-block-media-text__content,
  .ar-block-container .wp-block-media-text .wp-block-media-text__content {
    margin: 0 15px;
    padding-bottom: 86px;
  }
  .wp-block-button {
    max-width: 100%;
  }
  .wp-block-button__link {
    width: 100%;
  }
}
</style>