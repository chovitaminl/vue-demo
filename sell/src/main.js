// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VuResource from 'vue-resource';
import 'common/stylus/index.styl';

Vue.use(VuResource);

Vue.config.productionTip = false;
// template version
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
