const actions = {
  async FETCH_HISTORY({ commit, state }) {
    const history = JSON.parse(localStorage.getItem("history", state.history));

    commit("UPDATE_HISTORY", { history });
  },
  async ADD_HISTORY({ commit, state }, { article }) {
    const stateHistory = state.history;
    let history = [article];

    if (stateHistory && stateHistory.length > 0) {
      history = stateHistory.filter(art => art.url !== article.url);
      history.unshift(article);
    }
    commit("UPDATE_HISTORY", { history });
    localStorage.setItem("history", JSON.stringify(state.history));
  }
};

export default actions;
