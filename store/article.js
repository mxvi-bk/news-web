import config from "~/configs";

const state = () => ({
  articles: [],
  page: 0
});

const getters = {
  articles(state) {
    return state.articles;
  }
};

const mutations = {
  FETCH_ARTICLES(state, payload) {
    state.page = state.page + 1
    console.log('state.page', state.page);
    state.articles.push(...payload.articles);
  }
};

const actions = {
  async FETCH_ARTICLES({ commit, state }, { q }) {
    const url = config.API_HOST + config.API_PATH;
    const response = await this.$axios.get(url, {
      params: {
        q,
        apiKey: config.API_KEY,
        pageSize: 9,
        sortBy: 'publishedAt',
        page: state.page + 1
      }
    });
    
    const articles = response.data.articles
    commit("FETCH_ARTICLES", { articles });
  },

};

export default {
    state,
    getters,
    mutations,
    actions
}
