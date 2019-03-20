import Vue from 'vue';
import VueRouter from 'vue-router';
import vueclipboard from 'vue-clipboard2';
import axios from 'axios';
import router from './router';
import App from './App.vue';
import plugin from './plugin.js';
import 'normalize.css';
Vue.prototype.$axios = axios;
Vue.prototype.$Url = 'http://localhost:3000/';
Vue.use(VueRouter);
Vue.use(plugin);
Vue.use(vueclipboard);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
