const state = {
    all: []
};
const getters = {
    getVideosByTheme: state => themeName => {
        return themeName == 'all' ? state.all :
            state.all.filter(video => video.theme === themeName);
    },
    getFilteresVideos: state => filter => {

        let filteredItem = filter.selectedThemeName == 'all' ? state.all :
            state.all.filter(video => video.theme === filter.selectedThemeName);

        let result = filteredItem
            .filter(video => !filter.saleItem || video.options.sale)
            .filter(video => !filter.popularItem || video.options.popular)
            .filter(video => !filter.dateItem || new Date(video.date).getMonth() === 6)
            .filter(video => {
                return filter.searchItem == '' || video.title.toLowerCase().indexOf(filter.searchItem.toLowerCase()) !== -1;
            });

        return result;
    }
}

const mutations = {
    INIT_VIDEOS(state, videos) {
        state.all = videos;
    },
}

const actions = {
    SAVE_VIDEOS(context) {
        fetch('https://storage.7eminar.ua/content/test_task_front/data.json', {
                method: "GET",
                headers: { "Content-Type": "text/plain" },
            })
            .then(response => response.json())
            .then(value => {
                context.commit('INIT_VIDEOS', value)
            })
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}