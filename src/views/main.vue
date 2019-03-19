<template>
  <div>
    <maintop></maintop>
    <ll></ll>
    <award-list></award-list>
  </div>
</template>

<script>
import maintop from '@/components/maintop';
import ll from '@/components/lotteryList';
import awardList from '@/components/awardList';

export default {
  components: {
    maintop,
    'll': ll,
    'award-list':awardList
  }
}
</script>

<style lang="postcss" module>
@import "../base/global.css";
</style>
