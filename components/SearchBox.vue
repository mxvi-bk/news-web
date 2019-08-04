<template>
  <v-toolbar dense floating>
    <v-text-field
      hide-details
      prepend-icon="fa-search"
      append-icon="fa-time"
      single-line
      v-model="search"
    ></v-text-field>
    <v-icon v-show="loading">fas fa-circle-notch fa-spin</v-icon>
  </v-toolbar>
</template>

<script>
import _ from "lodash";
import { mapActions } from "vuex";
import config from '~/configs'

export default {
  data() {
    return {
      search: "",
      loading: false
    };
  },
  watch: {
    search: function(newVal, oldVal) {
      this.debouncedFetchArticle();
    }
  },
  created() {
    this.debouncedFetchArticle = _.debounce(this.fetchArticle, 500);
  },
  methods: {
    ...mapActions({
      fetchArticleStore: "article/FETCH_ARTICLES"
    }),
    async fetchArticle() {
      let vm = this;
      let q = _.trim(vm.search)  

      if(q === '') q = config.DEFAULT_KEYWORD
      vm.loading = true
      await this.fetchArticleStore({
        q,
        page: 1
      });
      vm.loading = false
    }
  }
};
</script>