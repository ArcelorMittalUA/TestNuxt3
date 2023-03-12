<script lang="ts" setup>
const props = defineProps({
  links: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <section class="ar-block-container section-links">
    <Swiper
      class="swiper-cards"
      :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
      :slides-per-view="3.2"
      :space-between="0"
      :reverseDirection="true"
      :loop="true"
      :speed="300"
      :autoplay="{
        delay: 3000,
      }"
      :navigation="{
        nextEl: '.slider-block__next',
        prevEl: '.slider-block__prev',
      }"
      :breakpoints="{
        320: {
          slidesPerView: 1.1,
          spaceBetween: 0,
        },
        480: {
          slidesPerView: 1.1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3.2,
          spaceBetween: 0,
        },
      }"
    >
      <SwiperSlide v-if="links?.linkslist?.linkItem1">
        <AtomsBlocksBlockLinksSlide
          :linktitle="links.linkslist.linkItem1.title"
          :linkUrl="links?.linkslist?.linkItem1.url"
          :linkImage="links?.linkslist?.image1.sourceUrl"
          :color="links?.linkslist?.colortext1"
          class="swiper-slide"
        />
      </SwiperSlide>
      <SwiperSlide v-if="links?.linkslist?.linkItem2">
        <AtomsBlocksBlockLinksSlide
          :linktitle="links?.linkslist?.linkItem2.title"
          :linkUrl="links?.linkslist?.linkItem2.url"
          :linkImage="links?.linkslist?.image2.sourceUrl"
          :color="links?.linkslist?.colortext2"
          class="swiper-slide"
        />
      </SwiperSlide>
      <SwiperSlide v-if="links?.linkslist?.linkItem3">
        <AtomsBlocksBlockLinksSlide
          :linktitle="links.linkslist.linkItem3.title"
          :linkUrl="links?.linkslist?.linkItem3.url"
          :linkImage="links?.linkslist?.image3.sourceUrl"
          :color="links?.linkslist?.colortext3"
          class="swiper-slide"
        />
      </SwiperSlide>
      <SwiperSlide v-if="links?.linkslist?.linkItem4">
        <AtomsBlocksBlockLinksSlide
          :linktitle="links?.linkslist?.linkItem4.title"
          :linkUrl="links?.linkslist?.linkItem4.url"
          :linkImage="links?.linkslist?.image4.sourceUrl"
          :color="links?.linkslist?.colortext4"
          class="swiper-slide"
        />
      </SwiperSlide>
      <SwiperSlide v-if="links?.linkslist?.linkItem5">
        <AtomsBlocksBlockLinksSlide
          :linktitle="links?.linkslist?.linkItem5.title"
          :linkUrl="links?.linkslist?.linkItem5.url"
          :linkImage="links?.linkslist?.image5.sourceUrl"
          :color="links?.linkslist?.colortext5"
          class="swiper-slide"
        />
      </SwiperSlide>
    </Swiper>
  </section>
</template>
<style>
.section-links {
  overflow: hidden;
  position: relative;
}
.section-links__wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 32px 30px;
  row-gap: 56px;
  column-gap: 30px;
  flex-wrap: wrap;
}
.section-links__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #212121;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
</style>