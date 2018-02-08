import Vue from 'vue'
import App from './App.vue'

import './asset/images/background.jpg'
import './asset/styles/test.css'
import './asset/styles/index.styl'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render: (h)=>h(App)
}).$mount(root);