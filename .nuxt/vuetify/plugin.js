import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import options from './options'

Vue.use(Vuetify)

options.icons = options.icons || {}
options.icons.iconfont = 'mdi'

export default (ctx) => {
  const vuetify = new Vuetify(options)

  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}
