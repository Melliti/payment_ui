import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTelInput from 'vue-tel-input'
 
// require(VueTelInput).default
Vue.use(VueTelInput);
Vue.config.productionTip = false
// Vue.component('field-tel-input').default

new Vue({
  router,
  VueTelInput,
  render: h => h(App)
}).$mount('#app')
