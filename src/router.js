import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Tana from './views/Tana.vue';
import Otsin from './views/Otsin.vue';
import Toetajale from './views/Toetajale.vue';
import Varjupaigast from './views/Varjupaigast.vue';

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
      path: '/tana_varjupaigas',
      name: 'tana',
      component: Tana,
    },
    {
      path: '/otsin_leidsin',
      name: 'otsin',
      component: Otsin,
    },
    {
      path: '/toetajale',
      name: 'toetajale',
      component: Toetajale,
    },
    {
      path: '/varjupaigast',
      name: 'varjupaigast',
      component: Varjupaigast,
    },
  ],
});
