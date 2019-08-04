<template>
  <v-container fluid grid-list-xl>
    <h1>{{ title }}</h1>
    <v-layout row>
      <v-flex xs12 sm8 md4 v-for="(article, key) in articles" :key="key">
        <article-card :article="article"></article-card>
      </v-flex>
    </v-layout>
    <v-layout row align-center justify-center>
      <v-alert v-if="showAlert" type="info">No article found.</v-alert>
      <v-btn @click="loadMore" v-if="showLoadMore">
        Load more
        <v-icon v-show="loading">fas fa-circle-notch fa-spin</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

 <script>
import ArticleCard from "~/components/ArticleCard";
import SearchBox from "~/components/SearchBox";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    ArticleCard,
    SearchBox
  },
  props: {
    articles: {
      type: Array,
      default: []
    }
  },
  computed: {
    ...mapState("article", {
      page: state => state.page
    }),
    showAlert() {
      return !this.articles || this.articles.length === 0;
    },
    showLoadMore() {
      return this.$route.name === 'index' && this.articles.length > 0
    },
    title() {
      return this.$route.name === "history" ? "History" : "Home";
    }
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    ...mapActions({
      fetchArticle: "article/FETCH_ARTICLES" 
    }),
    async loadMore() {
      const page = this.page + 1;
      this.loading = true;
      await this.fetchArticle({ page });
      this.loading = false;
    }
  }
};
</script>