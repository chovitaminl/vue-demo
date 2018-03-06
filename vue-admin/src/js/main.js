import Vue from 'vue'
import Main from '../view/Main.vue'
import Router from './router'

const app = new Vue({
  el: '#main',
  Router,
  render: h => h(Main)
})