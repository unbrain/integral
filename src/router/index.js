import Vue from 'vue';
import Router from 'vue-router';
import wallet from '@/views/wallet';
import withdraw from '@/views/withdraw';
import best from '@/views/best';
import main from '@/views/main.vue';
import awardRecord from '@/views/awardRecord.vue';
import cash from '@/views/cash';

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
      name: best,
      component: best
    },
    {
      path: '/main',
      name: 'main',
      component: main,
    },
    {
      path: '/record',
      name: 'record',
      component: awardRecord,
      props: true
    },
    {
      path: '/cash/:cash',
      name: 'cash',
      component: cash
    }
  ]
});
