import Vue from 'vue';
import VueRouter from 'vue-router';
import Goods from '@/components/goods/goods';
import Ratings from '@/components/ratings/ratings';
import Sellers from '@/components/sellers/sellers';
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/sellers',
      name: 'Sellers',
      component: Sellers
    }
  ],
  linkActiveClass: 'active'
});
