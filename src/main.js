import Vue from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import vuetify from '@/plugins/vuetify' // path to vuetify export
import Vuex from 'vuex'
import route from "./routes/"
Vue.use(Vuex)
Vue.config.productionTip = false
new Vue({
  router:route,
  vuetify,
  render: h => h(App)
}).$mount('#app')