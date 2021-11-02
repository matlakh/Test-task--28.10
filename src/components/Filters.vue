<template>
<div class="main__aside">
  <filter-common :filter="filter"
  :imageUrl="'src/assets/video.svg'"
  :nameFilterCommon="'Відео'">
    <div class="filter__form">
      <check-box-item
        :count="
          getCountByFilter(true, false, false, filter.selectedThemeName).length
        "
        :optionName="'Акція'"
        :name="'saleItem'"
        :isCheck="filter.saleItem"
      ></check-box-item>
      <check-box-item
        :count="
          getCountByFilter(false, true, false, filter.selectedThemeName).length
        "
        :optionName="'Популярне'"
        :name="'countPopular'"
        :isCheck="filter.popularItem"
      ></check-box-item>
      <check-box-item
        :count="
          getCountByFilter(false, false, true, filter.selectedThemeName).length
        "
        :optionName="'Новинки'"
        :name="'countNew'"
        :isCheck="filter.dateItem"
      ></check-box-item>
    </div>
  </filter-common>
  <filter-common 
  :filter="filter"
  :nameFilterCommon="'ТЕМИ'"
  :imageUrl="'src/assets/list2.svg'">
    <ul class="filter__list">
        <filter-theme-item 
        v-for="theme in themes" 
        :isSelected="theme.name === filter.selectedThemeName"
        :key="theme.name"
        :theme="theme"
        :count="getCountByFilter(false, false, false, theme.name).length"
        @click="$emit('selected', theme.name)"
        ></filter-theme-item>
      </ul>
  </filter-common>
</div>
</template>

<script>

import CheckBoxItem from "./CheckBoxItem.vue";
import FilterThemeItem from "./FilterThemeItem.vue";
import FilterCommon from "./FilterCommon.vue";

export default {
  props: {
    filter: Object,
  },
  components: {
    CheckBoxItem,
    FilterThemeItem,
    FilterCommon,
  },
  methods: {
    getCountByFilter(isSale, isPopular, isNewDate, selectedName) {
      let fakeFilter = {
        searchItem: "",
        selectedThemeName: selectedName,
        saleItem: isSale,
        popularItem: isPopular,
        dateItem: isNewDate,
      };

      return this.$store.getters["videosStore/getFilteresVideos"](fakeFilter);
    },
  },
  computed: {
    themes: {
      get() {
        return this.$store.getters["filterThemeStore/getThemes"];
      },
    },
  },
};
</script>
