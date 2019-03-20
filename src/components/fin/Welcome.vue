<template>
  <div>
    <div :class="$style.wrap">
      <fin-head :head-detail="headDetail"></fin-head>
      <fin-top-bar></fin-top-bar>
      <fin-invite-limit :limit-num="limitNum"></fin-invite-limit>
      <fin-withdraw :balance="balance"></fin-withdraw>
    </div>
  </div>
</template>

<script>
import head from '@/components/fin/head';
import topBar from '@/components/fin/topBar';
import inviteLimit from '@/components/fin/inviteLimit';
import withdraw from '@/components/fin/withdraw';

export default {
  components: {
    'fin-head': head,
    'fin-top-bar': topBar,
    'fin-invite-limit': inviteLimit,
    'fin-withdraw': withdraw,
  },
  data: function () {
    return {
      headDetail: {
        headMsg: '立即分享赚钱',
        inviteCode: '27543222',
        headImageUrl: require('@/assets/fi_mask.png'),
        headTimerMsg: ['福利继续，邀请1！', '邀请2人赚30元！', '福利继续邀请3人赚30元！'],
      },
      severTime: '',
      limitNum: '10/30',
      balance: '14.00',
      howWithdrawTitle: '首次邀请3位老铁，30元怎么提？',
      luckyMoney: [5, 2, 3],
    };
  },
  methods: {
  }
};
</script>

<style lang="postcss" module>
.wrap {
  width: 100%;
  margin-bottom: 44px;
}
</style>
