<template>
  <div>
    <wallet-header></wallet-header>
    <wallet-details></wallet-details>
    <fix-footer></fix-footer>
  </div>
</template>

<script>
import walletHeader from '@/components/walletHeader';
import walletDetails from '@/components/walletDetails';
import fixFooter from '@/components/fixFooter';
export default {
  components: {
    'wallet-header': walletHeader,
    'wallet-details': walletDetails,
    'fix-footer': fixFooter
  }
}
</script>

<style lang="postcss" module>
</style>
