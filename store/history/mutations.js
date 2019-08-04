const mutations = {
  UPDATE_HISTORY(state, payload) {
    state.history = payload.history;
  },
  DEL_HISTORY(state, payload) {
    state.history.splice(payload.index);
  }
};

export default mutations;
