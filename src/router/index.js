import { createRouter, createWebHashHistory } from 'vue-router';
import { ENUMS } from 'config';

const { ROUTE_NAME } = ENUMS;

const routes = [
  {
    path: '',
    name: ROUTE_NAME.DASHBOARD.value,
    component: () => import(/* webpackChunkName: "dashboard" */ 'views/MainDashboard.vue'),
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'Home' },
  },
];

const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;

