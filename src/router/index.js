import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      component: () =>
        import(/* webpackChunkName: "notfound" */ '@/components/pages/NotFound')
    },
    {
      path: '/',
      component: () =>
        import(/* webpackChunkName: "splash" */ '@/components/pages/Splash')
    },
    {
      path: '/home',
      component: () =>
        import(/* webpackChunkName: "home" */ '@/components/pages/Home')
    },
    {
      path: '/profile',
      component: () =>
        import(/* webpackChunkName: "profile" */ '@/components/pages/Profile')
    },
    {
      path: '/skill',
      component: () =>
        import(/* webpackChunkName: "skill" */ '@/components/pages/Skill')
    },
    {
      path: '/portfolio/:tag',
      component: () =>
        import(/* webpackChunkName: "portfolio" */ '@/components/pages/Portfolio')
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
