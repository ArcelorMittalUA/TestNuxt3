<script lang="ts" setup>
const props = defineProps({
  attributes: {
    type: Object,
    default: () => ({}),
  },
});
const fileType = computed(() => {
  const fileName = props.attributes.href;
  const fileSplit = fileName.split(".");
  const fileSplitReverse = fileSplit.reverse();
  const fileType = fileSplitReverse[0];
  return fileType;
});
</script>
<template>
  <div v-if="attributes.fileName" class="file-block text-block-width">
    <div class="file-block__left">
      <div class="file-block__icon">
        <AtomsIconsThePdf v-if="fileType === 'pdf'" />
        <AtomsIconsTheDocs v-else-if="fileType === 'docx'" />
        <AtomsIconsTheXlsx v-else-if="fileType === 'xlsx'" />
        <AtomsIconsTheJpg v-else-if="fileType === 'jpg'" />
        <AtomsIconsTheFile v-else />
      </div>
      <div class="file-block__name">
        {{ attributes.fileName }}.{{ fileType }}
      </div>
    </div>
    <div class="file-block__right">
      <a :href="attributes.href" target="_blank" class="file-block__download">
        {{ $t("download") }}
      </a>
    </div>
  </div>
</template>
<style lang="scss">
.file-block {
  border: 1px solid;
  padding: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  justify-content: space-between;
  &__left {
    display: flex;
    align-items: center;
  }
  &__icon {
    margin-right: 8px;
    svg {
      display: flex;
    }
  }
  &__name {
    font-size: 21px;
    margin-left: 8px;
    margin-right: 24px;
  }
  &__download {
    font-size: 21px;
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
    padding-bottom: 2px;
    text-decoration: none;
    &:hover {
      background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(currentColor),
        to(currentColor)
      );
      background-image: linear-gradient(currentColor, currentColor);
      color: #ff3700;
      -webkit-animation: draw-line 0.25s ease-in-out;
      animation: draw-line 0.25s ease-in-out;
    }
  }
}
@media (max-width: $mobile) {
  .file-block {
    flex-direction: column;
    align-items: flex-start;
  }
  .file-block__name {
    font-size: 16px;
    margin-left: 0;
    margin-right: 0;
  }
  .file-block__right {
    margin-top: 24px;
  }
  .file-block__download {
    font-size: 18px;
  }
}
</style>