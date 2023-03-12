<script lang="ts" setup>
const props = defineProps({
  attributes: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <div class="slider-block">
    <div class="swiper container">
      <div class="swiper-wrapper">
        <div
          v-for="image in attributes"
          :key="image.mediaItem.node.__typename"
          class="swiper-slide"
        >
          <div class="slider-content">
            <nuxt-picture
              :src="image.mediaItem.node.sourceUrl"
              class="slider-content__picture"
              :imgAttrs="{
                class: 'slider-content__img',
                style: 'display:block',
                'data-my-data': 'my-value',
              }"
            />
          </div>
        </div>
      </div>
      <div class="slider-block__controls">
        <div class="slider-block__next"><AtomsIconsTheNextIcon /></div>
        <div class="swiper-pagination"></div>
        <div class="slider-block__prev"><AtomsIconsTheNextIcon /></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.slider-block {
  background: var(--text-secondary);
  padding: 96px 0;
  margin-bottom: 48px;
  overflow: hidden;
  &__controls {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 16px;
    .swiper-pagination {
      position: relative;
    }
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      margin: 0 10px;
      background: rgba(255, 255, 255, 0.2);
    }
    .swiper-pagination-bullet-active {
      background: #ffffff;
    }
  }
  &__next {
    display: block;
    cursor: pointer;
    color: #ffffff;
    margin-right: 24px;
    .next-icon-slider {
      display: flex;
    }
  }
  &__prev {
    display: block;
    cursor: pointer;
    color: #ffffff;
    margin-left: 24px;
    .next-icon-slider {
      display: flex;
      transform: rotate(180deg);
    }
  }
}
.swiper {
  position: relative;
}
.swiper-wrapper {
  align-items: center;
}
.swiper-slide {
  align-items: center;
  display: flex;
  justify-content: center;
}
.slider-content {
  position: relative;
  &__picture {
    position: relative;
  }
  img {
    max-width: 100%;
    max-height: 460px;
  }
}
</style>