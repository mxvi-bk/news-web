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

export default mutations;
