<script lang="ts" setup>
const props = defineProps({
  linktitle: {
    type: String,
    default: () => ({}),
  },
  linkUrl: {
    type: String,
    default: () => ({}),
  },
  linkImage: {
    type: String,
    default: () => ({}),
  },
  color: {
    type: String,
    default: () => ({}),
  },
});

const urlRemove = computed(() => {
  const cutDomain = new URL(props.linkUrl);
  const url = props.linkUrl;
  const hostname = cutDomain.hostname;
  const pathname = cutDomain.pathname.split("/").slice(1);
  if (pathname[0] === "wp-content") {
    return url;
  } else if (hostname === "ukraine-api.arcelormittal.com") {
    return url.replace(/^.*?:\/\/.*?(?=\/|$)/, "");
  } else {
    return url;
  }
});

const urlSet = computed(() => {
  const cutDomain = new URL(props.linkUrl);
  const pathname = cutDomain.pathname.split("/").slice(1);
  const hostname = cutDomain.hostname;
  if (pathname[0] === "wp-content") {
    return false;
  } else if (hostname === "ukraine-api.arcelormittal.com") {
    return true;
  } else {
    return false;
  }
});
</script>
<template>
  
    <div class="section-links__slide">
      <div
        class="section-links__content"
        :class="[color === 'black' ? 'black-color' : '']"
      >
        <h4 class="section-links__title">{{ linktitle }}</h4>
        <NuxtLink :to="urlRemove" class="section-links__readMore">{{
          $t("readMore")
        }}</NuxtLink>
      </div>
      <figure class="section-links__figure">
        <nuxt-picture
          :src="linkImage"
          loading="lazy"
          class="section-links__picture"
          :imgAttrs="{
            class: 'section-links__img',
            style: 'display:block',
          }"
        />
      </figure>
      <NuxtLink
        v-if="urlSet"
        :to="localePath(urlRemove)"
        class="section-links__link"
      ></NuxtLink>
      <a
        v-else
        :href="urlRemove"
        class="section-links__link"
        target="_blank"
      ></a>
    </div>

</template>
<style lang="scss">
.section-links__figure {
  position: relative;
  z-index: -1;
  overflow: hidden;
  &::after {
    display: table;
    border-radius: inherit;
    content: "";
    padding-bottom: 106.666%;
  }
}
.section-links__slide {
  position: relative;
  display: block !important;
  width: 100%;
  overflow: hidden;
  &:hover {
    .section-links__picture {
      top: -16px;
      right: -16px;
      bottom: -16px;
      left: -16px;
    }
  }
}

.section-links__content {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  padding: 32px;
}

.section-links__picture {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.5s ease-in-out 0s;
}
.section-links__img {
  position: absolute;
  top: 0;
  left: 50%;
  z-index: -1;
  display: block;
  min-width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center top;
  object-position: center top;
  transform: translateX(-50%);
}

.section-links__title {
  color: rgb(255 255 255);
  mix-blend-mode: darken;
  position: relative;
  z-index: 1;
  display: block;
}

.links-item__title {
  font-size: 21px;
  font-weight: 800;
}

.section-links__readMore {
  color: #fff;
  margin-top: 24px;
  display: inline-block;
  font-weight: bold;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(currentColor),
    to(currentColor)
  );
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  font-family: inherit;
  padding-bottom: 4px;
  text-decoration: none;
}

.black-color {
  .section-links__title,
  .section-links__readMore {
    color: #000;
  }
}

.section-links__link {
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
}
@media (min-width: 1920px) {
  .section-links__figure::after {
    padding-bottom: 86.666%;
  }
}
@media (max-width: $mobile) {
  .section-links__title {
    font-size: 28px;
  }
  .section-links__wrapper {
    display: flex;
    row-gap: 0;
  }
  .section-links__right,
  .section-links__left {
    width: 100%;
  }
  .section-links__img {
    width: auto;
  }
  .section-links__figure::after {
    padding-bottom: 136.666%;
  }
}
</style>