import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from '../pages/index.vue';
import DetailsPage from '../pages/details.vue';
import DetailsCouPage from '../pages/detail/count.vue';
import DetailsAnsPage from '../pages/detail/analysis.vue';
import DetailsForePage from '../pages/detail/forecast.vue';
import DetailsPubPage from '../pages/detail/publish.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage,
    },
    {
      path: '/detail',
      component: DetailsPage,
      children:[
        {
          path:'count',
          component:DetailsCouPage
        },
        {
          path:'analysis',
          component:DetailsAnsPage
        },
        {
          path:'forecast',
          component:DetailsForePage
        },
        {
          path:'publish',
          component:DetailsPubPage
        },
      ]
    },
  ]
})
