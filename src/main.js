import { createApp } from 'vue'

import { createStore } from 'vuex';
import videosStore from "./store/modules/videosStore";
import filterThemeStore from "./store/modules/filterThemeStore";
import App from './App.vue'
import './css/index.css'
import './css/mobile.css'

const store = createStore({
    modules: {
        videosStore,
        filterThemeStore
    }
});

createApp(App).use(store).mount('#app')