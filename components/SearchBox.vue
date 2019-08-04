<template>
  <v-toolbar dense floating>
    <v-text-field
      hide-details
      prepend-icon="fa-search"
      append-icon="fa-time"
      single-line
      v-model="search"
    ></v-text-field>
  </v-toolbar>
</template>

<script>
import _ from "lodash";
import { clone } from "@babel/types";

export default {
  data() {
    return {
      search: ""
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
    async fetchArticle() {
      var vm = this;

      await this.$store.dispatch("article/FETCH_ARTICLES", {
        q: vm.search,
        page: 1
      });

      this.$route.query.q = vm.search;
    }
  }
};
</script>