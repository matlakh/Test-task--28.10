<template>
  <div class="hamburger-menu">
    <div class="hamburger__btn" @click="showMenu">
      <img class="btn__img" src="/src/assets/menu.png" alt="menu" />
      <p class="btn__text">МЕНЮ</p>
    </div>
    <div :class="visibleMenu ? 'menu__box show__menu' : 'menu__box'">
      <ul class="menu__box-list">
        <filter-common
          :filter="filter"
          :imageUrl="'src/assets/video.svg'"
          :nameFilterCommon="'Відео'"
        >
          <div class="filter__form">
            <div class="form__checkbox">
              <input
                type="checkbox"
                class="custom-checkbox"
                id="saleItem"
                v-model="filter.saleItem"
              />
              <label for="saleItem"
                >Акція ({{
                  getCountByFilter(true, false, false, filter.selectedThemeName)
                    .length
                }})</label
              >
            </div>

            <div class="form__checkbox">
              <input
                type="checkbox"
                class="custom-checkbox"
                id="countPopular"
                v-model="filter.popularItem"
              />
              <label for="countPopular"
                >Популярне ({{
                  getCountByFilter(false, true, false, filter.selectedThemeName)
                    .length
                }})</label
              >
            </div>

            <div class="form__checkbox">
              <input
                type="checkbox"
                class="custom-checkbox"
                id="countNew"
                v-model="filter.dateItem"
              />
              <label for="countNew"
                >Новинки ({{
                  getCountByFilter(false, false, true, filter.selectedThemeName)
                    .length
                }})</label
              >
            </div>
          </div>
        </filter-common>
        <filter-common
          :filter="filter"
          :nameFilterCommon="'ТЕМИ'"
          :imageUrl="'src/assets/list2.svg'"
        >
          <ul class="filter__list">
            <li
              v-for="theme in getThemes"
              :class="
                theme.name === filter.selectedThemeName
                  ? 'active-filter-item'
                  : ''
              "
              @click="$emit('selected', theme.name)"
              :key="theme.name"
            >
              <p>
                {{ theme.localName }} ({{
                  getCountByFilter(false, false, false, theme.name).length
                }})
              </p>
            </li>
          </ul>
        </filter-common>
      </ul>
    </div>
  </div>
</template>

<script>
import CheckBoxItem from "./CheckBoxItem.vue";
import FilterThemeItem from "./FilterThemeItem.vue";
import FilterCommon from "./FilterCommon.vue";

export default {
  components: {
    CheckBoxItem,
    FilterThemeItem,
    FilterCommon,
  },
  props: {
    filter: Object,
    isShowMenu: Boolean,
  },
  data() {
    return {
      visibleMenu: this.isShowMenu,
    };
  },
  emits: ["selected"],
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
    showMenu() {
      let that = this;
      let mainBg = document.querySelector(".main__bg");
      that.visibleMenu = !that.visibleMenu;
      if (that.visibleMenu) {
        mainBg.classList.add("bm-overlay");
        mainBg.onclick = function () {
          that.visibleMenu = false;
          mainBg.classList.remove("bm-overlay");
        };
      } else {
        mainBg.classList.remove("bm-overlay");
      }
    },
  },
  computed: {
    getThemes: {
      get() {
        return this.$store.getters["filterThemeStore/getThemes"];
      },
    },
  },
};
</script>
