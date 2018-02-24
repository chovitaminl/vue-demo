// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import attachFastClick from 'fastclick'
import {
  Col,
  Row,
  Breadcrumb,
  BreadcrumbItem,
  Tooltip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Menu,
  MenuItem,
  MenuItemGroup,
  Header,
  Footer,
  Aside,
  Main} from 'element-ui'

attachFastClick.attach(document.body)

Vue.config.productionTip = false
Vue.use(Col)
Vue.use(Row)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tooltip)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Main)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
