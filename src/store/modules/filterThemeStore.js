const state = {
    all: []
};
const getters = {
    getThemes: (state) => {
        return state.all;
    }
}
const mutations = {
    SET_THEMES(state, themes) {
        state.all = themes
    }
}
const actions = {
    SAVE_THEMES(context) {
        fetch('/data/theme.json', {
                method: "GET",
                headers: { "Content-Type": "text/plain" },
            })
            .then(response => response.json())
            .then(value => {
                context.commit('SET_THEMES', value)
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