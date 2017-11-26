import Vue from 'vue';
import Router from 'vue-router';
import indexHome from '@/page/index';
import content from '@/page/content';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: indexHome,
    },
    {
      path: '/index/',
      name: 'index',
      component: indexHome
    },
    {
      path: '/content/:id',
      name: 'content',
      component: content
    }
  ]
});
