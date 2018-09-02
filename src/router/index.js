import Vue from 'vue';
import Router from 'vue-router';
import home from '@/pages/home';
import strategyPattern from '@/pages/strategy-pattern';
import factoryPattern from '@/pages/factory-pattern';

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
        },
        {
          path: '/patterns/factory',
          name: 'factory-pattern',
          component: factoryPattern,
        },
      ],
    },
  ],
});
