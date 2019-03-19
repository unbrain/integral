<template>
  <div
    c-333
    :class="$style.wrap"
  >
    <div :class="$style.icon"></div>
    <div w-21-29>提现申请已提交</div>
    <div
      w-14-20
      c-999
      :class="$style.time"
    >预计到账时间：2018年3月15日</div>
    <div :class="$style.details">
      <div>到账</div>
      <div c-999>微信钱包</div>
    </div>
    <div>
      <div>金额</div>
      <div>16.5</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" module>
@import "../base/global.css";

.wrap {
  text-align: center;
}
.icon {
  @mixin flexbox;
  @mixin bg "@/assets/lucky.png";
  padding: 40px 0 24px 0;
  width: 70px;
  height: 70px;
}
.time {
  padding-top: 6px;
  padding-bottom: 24px;
  border-bottom: 1px solid transparent;
  border-image: svg(1px-border param(--color #e6e6e6)) 1 stretch;
}
.details {
  padding: 11px 20px;
  border-bottom: 1px solid transparent;
  border-image: svg(1px-border param(--color #e6e6e6)) 1 stretch;
}
</style>
