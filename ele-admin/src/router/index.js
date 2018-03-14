import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'components/dashboard/dashboard'
import Setting from 'components/setting/setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'management',
      component: Dashboard
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    }
  ]
})
