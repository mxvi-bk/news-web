<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text"
      height="200px"
      lazy-src
      :src="article.urlToImage ? article.urlToImage  : 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
      :alt='article.urlToImage'
    >
      <div class="filter"></div>
      <v-card-title class="align-end fill-height cardTitle">{{ article.title }}</v-card-title>
    </v-img>

    <v-card-text>
      <span>{{ article.publishedAt }}</span><br>
      <span class="text--primary">
        <i>{{ article.source.name}}</i><br>
        <span class="cardDescription">{{ article.description }}</span>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="orange"
        :href="article.url"
        target="blank"
        @click="clickHandler"
        >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  mounted() {
  },
  methods: {
    clickHandler() {
      const article = this.article
      this.$store.dispatch('history/ADD_HISTORY', { article })
    }
  }
}
</script>