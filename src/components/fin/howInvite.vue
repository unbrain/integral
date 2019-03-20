<template>
  <div>
    <fin-invite-limit :limit-num="bodyDetail.limitNum"></fin-invite-limit>
    <fin-withdraw :balance="bodyDetail.balance"></fin-withdraw>
    <fin-how-withdraw :how-withdraw-title="bodyDetail.howWithdrawTitle" :lucky-money="bodyDetail.luckyMoney"></fin-how-withdraw>
    <fin-get-luckymoney></fin-get-luckymoney>
  </div>
</template>

<script>
// 仅是分成四个组件方便些样式 除了传值没有逻辑代码
import inviteLimit from '@/components/fin/inviteLimit';
import withdraw from '@/components/fin/withdraw';
import howWithdraw from '@/components/fin/howWithdraw';
import getLuckymoney from '@/components/fin/getLuckymoney';

export default {
  props: ['bodyDetail'],
  components: {
    'fin-invite-limit': inviteLimit,
    'fin-withdraw': withdraw,
    'fin-how-withdraw': howWithdraw,
    'fin-get-luckymoney': getLuckymoney,
  }
};
</script>

<style>
</style>
