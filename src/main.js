import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import VueTelInput from 'vue-tel-input'
 
// Vue.use(VueTelInput);
Vue.config.productionTip = false
// Vue.component('field-tel-input')

new Vue({
  router,
  // VueTelInput,
  render: h => h(App)
}).$mount('#app')
