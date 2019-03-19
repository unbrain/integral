import Vue from 'vue';
import Router from 'vue-router';
import wallet from '@/views/wallet';
import withdraw from '@/views/withdraw';
import main from '@/views/main';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/withdraw',
      name: 'withdraw',
      component: withdraw,
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: wallet,
    },
    {
      path: '/',
      name: main,
      component: main
    }
  ]
});
