import config from "~/configs";

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

export default actions;
