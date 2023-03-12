<script lang="ts" setup>
const props = defineProps({
  heading: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>

<template>
  <section
    v-if="heading.herovideoblock"
    class="section-hero-home"
    :style="{
      backgroundImage: `url(${heading.herovideoblock.videocover.sourceUrl})`,
    }"
  >
    <div class="container">
      <div class="section-hero-home__center">
        <div class="section-hero-home__company">
          <span>{{ $t("ArcelorMittal") }}</span> {{ $t("Kr") }}
        </div>
        <h1
          class="section-hero-home__title"
          v-html="heading.herovideoblock.title"
        ></h1>
        <p
          class="section-hero-home__description"
          v-html="heading.herovideoblock.description"
        ></p>
      </div>
    </div>

    <div class="section-hero-home__wrapper">
      <video
        class="hero-home-wrapper__video"
        playsinline=""
        autoplay=""
        muted=""
        loop=""
      >
        <source
          :src="`${heading.herovideoblock.videolink.mediaItemUrl}`"
          type="video/mp4"
        />
      </video>
    </div>
  </section>
</template>
<style lang="scss">
.section-hero {
  &-home {
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(90vh - 76px);
    overflow: hidden;
    &__center {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
      &::before {
        content: '';
        display: block;
        position: absolute;
        background: rgba(0, 0, 0, 0.3);
        width: 100%;
        height: calc(90vh - 76px);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
      }
    }
    &__title {
      max-width: 50%;
      color: #fff;
      font-size: 55px;
    }
  }
}
.hero-home-wrapper {
  &__video {
    position: absolute;
    display: block;
    height: calc(90vh - 76px);
    left: 0;
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    right: 0;
    width: 100%;
  }
}
.section-hero-home__description {
  color: rgba(255, 255, 255, 0.75);
  font-size: 18px;
  line-height: 150%;
  margin-top: 24px;
}

.section-hero-home__company {
  display: block;
  color: #ffffff;
  font-size: 22px;
  margin-bottom: 36px;
  span {
    font-weight: bold;
  }
}

@media (max-width: $mobile) {
  .section-hero-home,
  .hero-home-wrapper__video {
    height: calc(85vh - 64px);
  }
  .section-hero-home__title {
    max-width: 100%;
    font-size: 48px;
  }
  .section-hero-home__wrapper::before {
    height: calc(85vh - 64px);
  }
  .section-hero-home__company {
    font-size: 16px;
  }
}
</style>