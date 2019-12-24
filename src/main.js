import Vue from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import vuetify from '@/plugins/vuetify' // path to vuetify export
import store from './store/'
import route from "./routes/"
import VueFlipcard from 'vue-flipcard'

Vue.component('vue-flipcard', VueFlipcard)
Vue.config.productionTip = false
new Vue({
  router: route,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')