<template>
  <v-container fluid grid-list-xl>
    <v-layout row>
      <v-flex xs12 sm8 md4 v-for="(article, key) in articles" :key="key">
        <article-card :article="article"></article-card>
      </v-flex>
    </v-layout>
    <v-layout 
        row 
        align-center
        justify-center
    >
      <v-btn @click="loadMore" v-if="$route.name === 'index'">
          Load more 
          <v-icon v-if="loading">fas fa-circle-notch fa-spin</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

 <script>
import ArticleCard from "~/components/ArticleCard";
import { mapState } from 'vuex'
export default {
  components: {
    ArticleCard
  },
  props: {
      articles: {
          type: Array,
          required: true
      }
  },
  data() {
      return {
          loading: false
      }
  },
  mounted() {
  },
  methods: {
      async loadMore() {
          this.loading = true
          await this.$store.dispatch('article/FETCH_ARTICLES', { q: 'bitcoin'})
          this.loading = false
      }
  }
};
</script>