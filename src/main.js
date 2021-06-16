import './assets/styles/style.scss';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
import BootstrapVue from 'bootstrap-vue';


Vue.use(BootstrapVue);

new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount("#app");
