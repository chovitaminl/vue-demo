import Vue from 'vue'
import Router from 'vue-router'
import Rank from '../components/rank/m-rank'
import Recommend from '@/components/recommend/m-recommend'
import Singer from '@/components/singer/m-singer'
import Search from '@/components/search/m-search'
import singerDetail from '@/components/singer-detail/singer-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: singerDetail
        }
      ]
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/recommend',
      component: Recommend
    }
  ]
})
