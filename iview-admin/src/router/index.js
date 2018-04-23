import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/view/main.vue')
    },
    {
      path: '/ucnew',
      name: 'ucnew',
      component: () => import('@/view/ucnew/index.vue'),
      children: [
        { path: 'plan', title: '新建UC推广计划', name: 'ucplan', component: () => import('@/view/ucnew/components/plan.vue') },
        { path: 'unit', title: '新建UC推广计划', name: 'ucunit', component: () => import('@/view/ucnew/components/unit.vue') },
        { path: 'idea', title: '新建UC推广计划', name: 'ucidea', component: () => import('@/view/ucnew/components/idea.vue') },
    ]
    }
  ]
})
