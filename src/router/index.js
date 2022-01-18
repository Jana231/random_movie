import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Escolhido from '../views/Escolhido.vue';
import Selecao from '../views/Selecao.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/escolhido',
      name: 'escolhido',
      component: Escolhido,
      props: true,
    },
    {
      path: '/selecao',
      name: 'selecao',
      component: Selecao,
      props: true,
    },
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0 });
  },
});
