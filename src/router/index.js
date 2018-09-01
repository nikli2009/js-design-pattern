import Vue from 'vue';
import Router from 'vue-router';
import home from '@/pages/home';
import strategyPattern from '@/pages/strategy-pattern';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/patterns/strategy',
          name: 'strategy-pattern',
          component: strategyPattern,
        }
      ]
    },
  ],
});
