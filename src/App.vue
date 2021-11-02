<template>
  <header class="header">
    <mobile
      :filter="filter"
      @selected="selectedTheme"
      :isShowMenu="isShowMenu"
    ></mobile>
  </header>
  <section class="main">
    <div class="container">
      <div class="main__bg" @click="closeMenu"></div>
      <filters 
      :filter="filter" 
      @selected="selectedTheme"
      ></filters>

      <div class="main__content">
        <div class="content__header">
          <h1 class="header__title">Усі відео</h1>
          <div class="header__items">
            <input
              class="items__search"
              type="text"
              v-model="filter.searchItem"
            />
            <div class="item__buttons">
              <img
                class="items__grids"
                src="/src/assets/grid.svg"
                alt="grid"
                @click="isList = false"
              />
              <img
                class="items__list"
                src="/src/assets/list.svg"
                alt="list"
                @click="isList = true"
              />
            </div>
          </div>
        </div>

        <div
          :class="isList ? 'content__video-list list' : 'content__video-list '">
          <content
            v-for="video in filteresVideos"
            :key="video.id"
            :video="video"
          ></content>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Filters from "./components/Filters.vue";
import Content from "./components/Content.vue";
import Mobile from "./components/Mobile.vue";

export default {
  name: "App",
  data() {
    return {
      videosInfo: [],
      isShowMenu: false,
      isList: false,
      checkedFilters: [],

      filter: {
        searchItem: "",
        selectedThemeName: "all",
        saleItem: false,
        popularItem: false,
        dateItem: false,
      },
    };
  },
  components: {
    Filters,
    Content,
    Mobile,
  },
  methods: {
    selectedTheme(name) {
      this.filter.selectedThemeName = name;
    },
  },
  created() {
    this.$store.dispatch("videosStore/SAVE_VIDEOS");
    this.$store.dispatch("filterThemeStore/SAVE_THEMES");
  },
  computed: {
    filteresVideos: {
      get() {
        return this.$store.getters["videosStore/getFilteresVideos"](
          this.filter
        );
      },
    },
  },
  mounted() {
    this.isList = JSON.parse(localStorage.getItem("isList"));
  },
  watch: {
    isList: {
      handler() {
        localStorage.setItem("isList", JSON.stringify(this.isList));
      },
      deep: true,
    },
  },
};
</script>
