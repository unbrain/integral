<template>
  <div>
    <int-wallet-header></int-wallet-header>
    <int-wallet-details></int-wallet-details>
    <int-fix-footer></int-fix-footer>
  </div>
</template>

<script>
import walletHeader from '@/components/integral/walletHeader';
import walletDetails from '@/components/integral/walletDetails';
import fixFooter from '@/components/integral/fixFooter';
export default {
  components: {
    'int-wallet-header': walletHeader,
    'int-wallet-details': walletDetails,
    'int-fix-footer': fixFooter
  }
}
</script>

<style lang="postcss" module>
</style>
