import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios' 
import Header from './components/Header'

Vue.component("my-header",Header)

axios.defaults.withCredentials=true;
axios.defaults.baseURL="http://127.0.0.1:3000/";
Vue.prototype.axios=axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
