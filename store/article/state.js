import config from "~/configs";

const state = () => ({
  articles: [],
  page: 0,
  q: config.DEFAULT_KEYWORD
});

export default state;
