import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Chart from './views/Chart.vue';
import Query from './views/Query.vue';
import Settings from './views/Settings.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart,
    },
    {
      path: '/query',
      name: 'query',
      component: Query,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
  ],
});
