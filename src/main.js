// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import tools from './plugins/tools.js'
import Element from 'element-ui'
import pageSwitcher from './plugins/page-switcher.js'
import './assets/css/transition.css'
import AV from './plugins/init-leancloud.js'
const appId = '9VCYnqf2LbmdINmnqhuRcnqA-gzGzoHsz';
const appKey = 'Dfp1LWAGD3Wc9j6ydKYAlaVz';
const masterKey = 'lnBTbyu9V3nQne1AH1ffvgSf';

Vue.use(AV, {appId: appId, appKey: appKey, masterKey: masterKey});
Vue.use(Element);
Vue.use(tools);
Vue.prototype.axios = axios;
window.axios = axios;

Vue.config.productionTip = false
// 验证码 480992
/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  data: {
    animation: ''
  },
  router,
  template: '<App/>',
  components: { App }
})

Vue.use(pageSwitcher, { router: router, vm: app, defaultBackward: 'fade' });
window.Vue = Vue;