// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import { BASE_URL, _URL } from '@/router/config';
import axios from 'axios';
import VueScroller from 'vue-scroller';

/* axios.defaults.baseURL = 'http://172.16.0.51/fastadmin/public'; // api/ */
Vue.prototype.baseUrl = BASE_URL;
Vue.prototype._url = _URL;
Vue.prototype.$axios = axios;
Vue.use(VueScroller);
Vue.config.productionTip = false;

/* eslint-disable no-new */  /* mode: 'history', */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
