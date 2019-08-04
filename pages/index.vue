<template>
  <Home :articles="articles"></Home>
</template>

<script>
import Home from "~/components/Home";
import { mapState } from "vuex";
import Config from "~/configs";
export default {
  components: {
    Home
  },
  async fetch({ $axios, store }) {
    await store.dispatch("article/FETCH_ARTICLES", { q: "bitcoin", page: 1 });
  },
  computed: {
    ...mapState("article", {
      articles: state => state.articles
    })
  }
};
</script>
