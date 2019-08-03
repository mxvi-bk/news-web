<template>
  <Home :articles="articles" @scroll="onScroll"></Home>
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
    await store.dispatch("article/FETCH_ARTICLES", { q: "bitcoin" });
  },
  computed: {
    ...mapState("article", {
      articles: state => state.articles
    })
  },
  created() {
    if (process.browser) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  mounted() {},
  destroyed() {
    if (process.browser) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
  methods: {
    onScroll ({ target: { scrollTop, clientHeight, scrollHeight }}) {
      console.log('object');
      if (scrollTop + clientHeight >= scrollHeight) {
        // this.loadMorePosts()
        alert('ok')
      }
    },
    handleScroll() {
    }
  }
};
</script>
