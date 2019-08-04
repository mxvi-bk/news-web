<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text"
      height="200px"
      lazy-src
      :src="article.urlToImage ? article.urlToImage  : 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
      :alt="article.urlToImage"
    >
      <div class="filter"></div>
      <v-card-title class="align-end fill-height cardTitle">{{ article.title }}</v-card-title>
    </v-img>

    <v-card-text>
      <span>{{ publishedAt }}</span>
      <br />
      <span class="text--primary">
        <i>{{ article.source.name}}</i>
        <br />
        <span class="cardDescription">{{ article.description }}</span>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn text color="orange" :href="article.url" target="blank" @click="clickHandler" width="100%">Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    publishedAt() {
      let date = new Date(this.article.publishedAt)
      return date.toUTCString()
    }
  },
  methods: {
    ...mapActions({
      addHistory: 'history/ADD_HISTORY'
    }),
    clickHandler() {
      const article = this.article;
      this.addHistory({ article });
    }
  }
};
</script>