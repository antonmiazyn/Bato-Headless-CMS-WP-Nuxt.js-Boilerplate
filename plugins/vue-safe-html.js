import Vue from 'vue'
import VueSafeHTML from 'vue-safe-html'

Vue.use(VueSafeHTML, {
  allowedTags: ['span', 'em']
})
