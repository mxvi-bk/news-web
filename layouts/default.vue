<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-toolbar
      dense
      floating
      v-if="$route.name === 'index'"
    >
      <v-text-field
        hide-details
        prepend-icon="fa-search"
        append-icon="fa-time"
        single-line
        v-model="search"
      ></v-text-field>


    </v-toolbar>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'History',
          to: '/history'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'News',
      search: ''
    }
  },
  watch: {
    search: function (newVal, oldVal) {
      this.debouncedGetAnswer()
    }
  },
  created() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  mounted() {
  },
  methods: {
    async getAnswer() {
      var vm = this
      await this.$store.dispatch('article/FETCH_ARTICLES', {
        q: vm.search
      })
    }
  }
}
</script>
