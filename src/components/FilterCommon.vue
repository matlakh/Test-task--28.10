<template>
    <div class="aside__filter">
      <div class="filter__header">
        <div class="filter__title">
          <img :src="imageUrl" alt="video_icon" class="title__img" />
          <p class="title__text">{{ nameFilterCommon}}</p>
        </div>
        <img src="src/assets/chevron.svg" alt="chevron" class="filter__close" />
      </div>
        <slot></slot>
    </div>
</template>

<script>
import CheckBoxItem from "./CheckBoxItem.vue";
import FilterThemeItem from "./FilterThemeItem.vue"

export default {
  props: {
    filter: Object, nameFilterCommon:'', imageUrl:''
  },
  components: {
    CheckBoxItem,
    FilterThemeItem
  }
};
</script>
