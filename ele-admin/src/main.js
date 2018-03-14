// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import attachFastClick from 'fastclick'
import '@/common/scss/index.scss'
// import elementUI from 'element-ui'
// Vue.use(elementUI)
import {
  Col,
  Row,
  Radio,
  RadioGroup,
  RadioButton,
  Breadcrumb,
  BreadcrumbItem,
  Tooltip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Container,
  Header,
  Footer,
  Aside,
  Main} from 'element-ui'
Vue.config.productionTip = false
Vue.use(Col)
Vue.use(Row)
Vue.use(Radio)
Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tooltip)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Container)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Main)

attachFastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
