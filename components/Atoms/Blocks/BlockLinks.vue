<template>
  <section class="ar-block-container section-links">
    <div class="swiper">
      <div class="swiper-wrapper">
        <BlockLinksSlide
          v-if="links.linkslist.linkItem1"
          :linktitle="links.linkslist.linkItem1.title"
          :linkUrl="links.linkslist.linkItem1.url"
          :linkImage="links.linkslist.image1.sourceUrl"
          :color="links.linkslist.colortext1"
          class="swiper-slide"
        />
        <BlockLinksSlide
          v-if="links.linkslist.linkItem2"
          :linktitle="links.linkslist.linkItem2.title"
          :linkUrl="links.linkslist.linkItem2.url"
          :linkImage="links.linkslist.image2.sourceUrl"
          :color="links.linkslist.colortext2"
          class="swiper-slide"
        />
        <BlockLinksSlide
          v-if="links.linkslist.linkItem3"
          :linktitle="links.linkslist.linkItem3.title"
          :linkUrl="links.linkslist.linkItem3.url"
          :linkImage="links.linkslist.image3.sourceUrl"
          :color="links.linkslist.colortext3"
          class="swiper-slide"
        />
        <BlockLinksSlide
          v-if="links.linkslist.linkItem4"
          :linktitle="links.linkslist.linkItem4.title"
          :linkUrl="links.linkslist.linkItem4.url"
          :linkImage="links.linkslist.image4.sourceUrl"
          :color="links.linkslist.colortext4"
          class="swiper-slide"
        />
        <BlockLinksSlide
          v-if="links.linkslist.linkItem5"
          :linktitle="links.linkslist.linkItem5.title"
          :linkUrl="links.linkslist.linkItem5.url"
          :linkImage="links.linkslist.image5.sourceUrl"
          :color="links.linkslist.colortext5"
          class="swiper-slide"
        />
      </div>
    </div>
  </section>
</template>
<script>
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  props: {
    links: {},
  },
  mounted() {
    // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    // previously it was before export default. Moved here for performance issues. Move back in case of problems.
    // add or remove unused modules

    Swiper.use([Navigation, Pagination, Autoplay])

    // init Swiper:
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3.2,
      spaceBetween: 0,
      reverseDirection: true,
      speed: 300,
      // remove unused modules if needed
      modules: [Navigation, Pagination, Autoplay],
      // Pagination if needed
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      // Autoplay if needed
      autoplay: {
        delay: 3000,
      },
      // Navigation arrows if needed
      navigation: {
        nextEl: '.slider-block__next',
        prevEl: '.slider-block__prev',
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.1,
          spaceBetween: 0,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1.1,
          spaceBetween: 0,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 3.2,
          spaceBetween: 0,
        },
      },
      // Configure other options. Not tested
    })
  },
  computed: {
    urlRemove() {
      return this.links.linkslist.linkItem1.url.replace(
        /^.*?:\/\/.*?(?=\/|$)/,
        ''
      )
    },
  },
}
</script>
<style lang="scss">
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

</style>