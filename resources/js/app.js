/**
 * @Date:   2020-01-16T06:26:18+00:00
 * @Last modified time: 2020-03-10T13:24:05+00:00
 */



require('./bootstrap');
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
