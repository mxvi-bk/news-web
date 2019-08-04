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
  computed: {
    ...mapState("history", {
      articles: state => state.history
    })
  },
  mounted() {},
  async fetch({ $axios, store }) {
    await store.dispatch("history/FETCH_HISTORY");
  }
};
</script>
