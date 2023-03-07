<template>
  <div>
    <div class="layout">
      <div class="banner-test">
        <p>{{ $t("testText") }}</p>
      </div>
      <OrganismsTheHeader />
      <slot />
    </div>
  </div>
</template>
<style lang="scss">
.splashScreen {
  background: #ffffff;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  animation: 1s linear 0s infinite alternate none running granimate;
  &__logo {
    position: relative;
    z-index: 2;
    svg {
      width: 16vw;
      height: 10vh;
    }
  }
  &__shape {
    position: absolute;
    left: 0;
    top: 0;
    left: 0;
    z-index: 1;
    svg {
      display: flex;
      width: 100%;
      height: 103vh;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
  transition-delay: 0.75s;
  visibility: visible;
  .splashScreen {
    animation-name: visibility;
  }
  .splashScreen__logo {
    animation-name: scale;
    animation-duration: 1s;
    transition: opacity 0.8s;
  }
  .splashScreen__logo-bottom {
    animation-name: down;
    animation-duration: 1s;
  }
  .splashScreen__shape {
    animation-name: left;
    animation-duration: 3s;
    animation-delay: 0.3s;
  }
}
.fade-leave-to,
.fade-enter {
  opacity: 0;
  .splashScreen__logo {
    opacity: 0;
  }
}

.loader {
  --color: white;
  --size-mid: 6vmin;
  --size-dot: 7.5vmin;
  --size-bar: 0.2vmin;
  --size-square: 13vmin;

  display: block;
  position: relative;
  width: 100%;
  display: grid;
  place-items: center;
  margin-top: 16px;
}

.loader::before,
.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
}

.loader.--4::before {
  height: var(--size-bar);
  width: 16vw;
  background-color: var(--color);
  animation: loader-4 1.8s cubic-bezier(0, 0, 0.03, 0.9) infinite;
}

@keyframes loader-4 {
  0%,
  44%,
  88.1%,
  100% {
    transform-origin: left;
  }

  0%,
  100%,
  88% {
    transform: scaleX(0);
  }

  44.1%,
  88% {
    transform-origin: right;
  }

  33%,
  44% {
    transform: scaleX(1);
  }
}

@keyframes scale {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.6);
  }
}

@keyframes down {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(70px);
  }
}

@keyframes granimate {
  0% {
    z-index: 999;
  }
  100% {
    z-index: -1;
  }
}

@keyframes left {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-18em, -18em);
    visibility: hidden;
  }
}
@media (max-width: $mobile) {
  .splashScreen__logo {
    svg {
      width: 56vw;
    }
  }
  .loader {
    margin-top: 0;
  }
  .loader.--4::before {
    width: 56vw;
  }
  .splashScreen__shape {
    svg {
      width: 120vw;
      height: 100%;
    }
  }
}
</style>