import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.config.keyCodes.pageup = 33;
Vue.config.keyCodes.pagedown = 34;
Vue.config.keyCodes.home = 36;
Vue.config.keyCodes.end = 35;

new Vue({
  render: h => h(App),
}).$mount('#app')
