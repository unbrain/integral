<template>
  <div>
    <int-main-top></int-main-top>
    <int-lottery-list></int-lottery-list>
    <int-award-list></int-award-list>
  </div>
</template>

<script>
import maintop from '@/components/integral/maintop';
import lotteryList from '@/components/integral/lotteryList';
import awardList from '@/components/integral/awardList';

export default {
  components: {
    'int-main-top': maintop,
    'int-lottery-list': lotteryList,
    'int-award-list':awardList
  }
}
</script>

<style lang="postcss" module>
@import "../base/global.css";
</style>
