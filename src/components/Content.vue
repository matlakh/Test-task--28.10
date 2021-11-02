<template>
  <div class="video-list__item" :key="video.id">
    <img class="video-list__img" :src="video.covers.main" alt="" />
    <div class="video-list__content">
      <p class="video-list__text" v-html="video.title"></p>
      <a
        :href="video.options.link"
        class="video-list__button"
        v-if="video.access"
      >
        <p class="button__text">Дивитися</p>
        <div class="button__circle">
          <img src="/src/assets/rigth.png" alt="Show" />
        </div>
      </a>
      <a :href="video.options.link" class="video-list__button bg_red" v-else>
        <p class="button__text">Придбати</p>
        <div class="button__circle">
          <img src="/src/assets/rigth.png" alt="Buy" />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: Object,
  },
};
</script>
