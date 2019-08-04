const state = () => ({
  history: []
});

const getters = {
  history(state) {
    return state.history;
  }
};

const mutations = {
  UPDATE_HISTORY(state, payload) {
    state.history = payload.history;
  },
  DEL_HISTORY(state, payload) {
    state.history.splice(payload.index);
  }
};

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

export default {
  state,
  getters,
  mutations,
  actions
};
