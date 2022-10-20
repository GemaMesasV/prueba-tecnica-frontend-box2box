import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './tailwind'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons'

library.add(faEye)
library.add(faHeart)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')