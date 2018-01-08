import 'babel-polyfill'
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import 'common/stylus/index.styl'

FastClick.attach(document.body)
Vue.use(VueLazyLoad, {
  loading: require('common/image/lazy-origin.png')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
