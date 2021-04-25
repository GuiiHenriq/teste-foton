import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faBook, faUser, faBookReader, faHeadphones, faShareSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faBook, faUser, faBookReader, faHeadphones, faShareSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.filter("filterStr", str => {
  if (!str) return '';

  str = str.toString();
  return str.split(",").shift();
})

Vue.filter("filterDesc", desc => {
  if (!desc) return '';

  desc = desc.toString();
  return desc.replace(/<p>/g, "").replace("</p>", "").replace(/<br>/g, " ").replace(/"/g, "");
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
