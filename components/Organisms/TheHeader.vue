<script lang="ts" setup>
import getMenu from "@/graphql/getMenu.gql";
const { locale, locales, setLocale, onBeforeLanguageSwitch } = useI18n();
import { useI18n } from "vue-i18n";

const isOpen = ref(null);
const isOpenobile = ref(false);
const isSearch = ref(false);
const searchText = ref("");
const managementPageAll = computed(() => {
  const route = useRoute();
  return (
    route.name === "about-our-management___uk" ||
    route.name === "about-our-management___en"
  );
});

interface MenuItem {
  node: {
    parentId: string;
  };
}

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

const variables = {
  locale: locale.value.toUpperCase(),
};

const { data } = await useAsyncQuery(getMenu, variables)


const menuParent = computed(() => {
  return data.value?.getMenu.edges.filter(
    (i: MenuItem) => i.node.parentId === null
  );
});

const clearInput = () => {
  searchText.value = "";
};

const handleSCroll = () => {
  const scrollPos = 70;
  const nav = document.querySelector(".sticky-header");

  const windowY = window.scrollY;
  if (windowY >= scrollPos) {
    // Scrolling UP
    nav?.classList.add("header-desktop--light");
  } else {
    // Scrolling DOWN
    nav?.classList.remove("header-desktop--light");
  }
};

const valueTimeOut = ref<NodeJS.Timeout>();

const mouseover = (paramID: number, event?: MouseEvent) => {
  window.clearTimeout(valueTimeOut.value!);
  valueTimeOut.value = window.setTimeout(() => {
    isOpen.value = paramID;
  }, 400);
  if (event) {
    event.target.classList.add("header-navigation__item--active");
  }
};

const mouseleave = (event?: MouseEvent) => {
  window.clearTimeout(valueTimeOut.value!);
  valueTimeOut.value = window.setTimeout(() => {
    isOpen.value = false;
  }, 200);
  if (event) {
    event.target.classList.remove("header-navigation__item--active");
  }
};

const openMenuMobile = () => {
  isOpenobile.value = !isOpenobile.value;
};

const closeMenuMobile = () => {
  isOpenobile.value = false;
};

const openSearch = () => {
  isSearch.value = true;
};

const closeSearch = () => {
  isSearch.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleSCroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleSCroll);
});
</script>
<template>
  <header class="header">
    <div
      class="sticky-header header-desktop header-desktop--dark"
      :class="[
        isSearch ? 'header-desktop--light' : '',
        isOpen || isOpenobile ? 'header-desktop--light' : '',
        $route.name === 'about-our-management-id___uk' ||
        $route.name === 'about-our-management-id___en'
          ? 'header-desktop--light-page'
          : '',
        $route.name === 'search___uk' || $route.name === 'search___en'
          ? 'header-desktop--light-page-text-black'
          : '',
        $route.name === 'about-our-management___uk' ||
        $route.name === 'about-our-management___en'
          ? 'header-desktop--light-page-text-black'
          : '',
        $route.name === 'media-news___uk' || $route.name === 'media-news___en'
          ? 'header-desktop--light-page-text-black'
          : '',
      ]"
    >
      <div v-if="!isSearch" class="header-desktop__container container">
        <NuxtLink :to="localePath('/')" class="header-desktop__logo">
          <AtomsIconsTheLogoColor />
        </NuxtLink>
        <nav
          class="header-navigation"
          :class="{ 'header-navigation--search': isSearch }"
        >
          <ul class="header-navigation__list">
            <li
              v-for="item in menuParent"
              :key="item.node.id"
              class="header-navigation__item"
            >
              <NuxtLink
                v-if="item.node.childItems.edges.length === 0"
                :to="localePath(item.node.path)"
                class="header-navigation__link"
              >
                {{ item.node.label }}
              </NuxtLink>
              <span
                v-else
                @mouseenter="mouseover(item.node.id, $event)"
                @mouseleave="mouseleave($event)"
              >
                <AtomsMenuLink
                  :item="item.node"
                  arrow="0"
                  class="header-navigation__link"
                  :class="{
                    'header-navigation__item--active': isOpen === item.node.id,
                  }"
                />
              </span>
            </li>
          </ul>
        </nav>
        <div class="header-toolbar">
          <div class="header-toolbar__lang">
            <div>
              <a
                href="#"
                v-for="locale in availableLocales"
                :key="locale.code"
                class="toolbar-text"
                @click.prevent.stop="setLocale(locale.code)"
                >{{ locale.code }}</a
              >
            </div>
          </div>
          <div class="header-toolbar__search">
            <span
              v-if="isSearch"
              @click="closeSearch()"
              class="toolbar-search__close"
            >
              <AtomsIconsTheClose />
            </span>
            <span
              v-else
              @click="
                openSearch();
                closeMenuMobile();
              "
              class="toolbar-search"
            >
              <AtomsIconsTheSearch />
            </span>
          </div>
          <div class="header-toolbar__menu" @click="openMenuMobile()">
            <AtomsIconsTheClose v-if="isOpenobile" />
            <AtomsIconsTheMenu v-else />
          </div>
        </div>
      </div>
      <div v-else class="header--search container">
        <div class="header-search">
          <AtomsIconsTheSearch class="header-search__icon" />
          <input
            type="search"
            placeholder="Пошук"
            class="input header-search__input"
            name="searchText"
            id="searchText"
            v-model="searchText"
            autocomplete="off"
            @keyup.enter="submitSearch"
          />
          <span @click="closeSearch()" class="hero-search-container__clear">
            <AtomsIconsTheClose />
          </span>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss">
.header {
  position: relative;
  z-index: 4;
  display: block;
}
.header-desktop {
  display: flex;
  align-items: center;
  background: rgba(21, 21, 21, 0.15);
  backdrop-filter: blur(35px);
  border-bottom: 2px solid $primary;
  height: 76px;
  width: 100%;
  z-index: 999;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
}
.header-desktop--dark {
  .logo-shape,
  .logo-text,
  .header-toolbar__search,
  .toolbar-text {
    color: #fff;
  }
}
.header-desktop--light,
.header-desktop--light-page {
  background: rgba(255, 255, 255, 0.85) !important;
  backdrop-filter: blur(35px) !important;
  transition: all 0.3s;
  .logo-shape {
    color: $primary;
  }
  .logo-text,
  .header-toolbar__search,
  .toolbar-text,
  .header-navigation__link {
    color: var(--color);
  }
  .header-toolbar__lang {
    border-right: 1px solid #000;
  }
  .header-toolbar__menu {
    border-left: 1px solid #212121;
    svg {
      color: var(--color);
    }
  }
}
.header-desktop--light-page-text-black {
  background: transparent;
  backdrop-filter: none;
  .logo-shape {
    color: var(--color-primary);
  }
  .logo-text,
  .header-toolbar__search,
  .toolbar-text,
  .header-navigation__link {
    color: var(--color);
  }
  .header-toolbar__lang {
    border-right: 1px solid #000;
  }
  .header-toolbar__menu {
    border-left: 1px solid #212121;
    svg {
      color: var(--color);
    }
  }
}
.sticky-header {
  position: fixed;
  &.header-desktop--light {
    top: 0;
  }
}
.header-desktop__container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  //overflow: hidden;
}
.header-navigation {
  display: flex;
  align-items: center;
  &--search {
    width: 100%;
    margin: 0 48px;
  }
}
.header-navigation__list {
  display: flex;
  align-items: center;
}

.header-navigation__link.header-navigation__item--active {
  color: var(--color-primary) !important;
}
.header-navigation__link {
  color: #ffffff;
  font-family: "Gilroy";
  font-weight: 800;
  padding: 15px 20px 5px;
}
.header-toolbar {
  display: flex;
  align-items: flex-end;
}
.header-toolbar__lang {
  display: block;
  border-right: 1px solid rgba(255, 255, 255, 0.35);
  margin-right: 16px;
}
.header-toolbar__menu {
  display: none;
}
.toolbar-text {
  font-size: 17px;
  margin-right: 16px;
  text-transform: uppercase;
  font-weight: 400;
}
.header-toolbar__search {
  cursor: pointer;
}
.toolbar-search {
  &__close {
    cursor: pointer;
    display: flex;
  }
  svg {
    display: flex;
  }
}

.header-search {
  opacity: 1;
  width: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
  &__input {
    display: block;
    width: 100%;
    border: 0;
    background-color: transparent;
    color: #000;
    font-size: 16px;
    padding: 0 30px 0 16px;
    border-radius: 0;
    outline: none;
  }
}

.hero-search-container__clear {
  display: flex;
  cursor: pointer;
  svg {
    display: flex;
    height: 16px;
  }
}
@media (min-width: $mobile) and (max-width: 1280px) {
  .header-navigation__link {
    font-size: 14px;
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media (max-width: $tablet) {
  .header-navigation {
    display: none;
  }
  .header-toolbar__menu {
    display: block;
    border-left: 1px solid rgba(255, 255, 255, 0.35);
    padding-left: 16px;
    svg {
      display: flex;
      color: #fff;
    }
  }
  .header-desktop {
    height: 54px;
  }
  .header-desktop__logo {
    svg {
      display: flex;
      width: 70px;
      height: 30px;
      margin-top: 1px;
    }
  }
  .header-toolbar {
    align-items: center;
  }
  .header-toolbar__lang {
    border-right: 0;
    margin-right: 0;
  }
  .toolbar-text {
    font-size: 21px;
    line-height: 0;
    margin-top: 1px;
    display: block;
  }
  .header-toolbar__menu svg {
    height: 16px;
  }
  .header-desktop--light {
    .header-toolbar__lang {
      border-right: 0;
    }
    .header-toolbar__menu {
      border-left: 1px solid #212121;
      svg {
        color: var(--color);
      }
    }
  }
  .header-toolbar__search {
    margin-right: 16px;
  }
  .header-search {
    position: relative;
    margin-top: 8px;
  }
  .header-search__input {
    background: rgb(0, 0, 0, 0.08);
    padding: 6px 6px 6px 36px;
    border-radius: 8px;
    margin-right: 6px;
  }
  .header-search__icon {
    position: absolute;
    left: 8px;
  }
}
@media (max-width: $mobile) {
  .header {
  }
}
</style>