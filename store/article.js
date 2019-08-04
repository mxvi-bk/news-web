import config from "~/configs";

const state = () => ({
  articles: [],
  page: 0,
  q: config.DEFAULT_KEYWORD
});

const getters = {
  articles(state) {
    return state.articles;
  },
  page(state) {
    return state.page;
  },
  q(state) {
    return state.q;
  }
};

const mutations = {
  FETCH_ARTICLES(state, payload) {
    state.page = payload.page;
    state.articles = payload.articles;
    state.q = payload.q;
  },
  ADD_ARTICLES(state, payload) {
    state.page = payload.page;
    state.articles.push(...payload.articles);
  }
};

const actions = {
  async FETCH_ARTICLES({ commit, state }, { q, page }) {
    if (!q) q = state.q;

    const url = config.API_HOST + config.API_PATH;
    const response = await this.$axios.get(url, {
      params: {
        q,
        apiKey: config.API_KEY,
        pageSize: config.PAGE_SIZE,
        sortBy: config.DEFAULT_SORT,
        page
      }
    });
    const articles = response.data.articles;

    if (page === 1) {
      commit("FETCH_ARTICLES", { articles, page, q });
    } else {
      commit("ADD_ARTICLES", { articles, page });
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
