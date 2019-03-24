<template>
  <div :class="$style.wrap">
    <div :class="$style.right"></div>
    <p
      c-333
      w-21-29
    >提现申请已提交</p>
    <p
      c-999
      w-14-20
      :class="$style.cashtime"
    >预计到账时间：{{date.getFullYear()}}年{{date.getMonth() + 1}}月{{date.getDate()}}日</p>
    <div
      c-333
      w-16-22
      :class="$style.detailswrap"
    >
      <div :class="$style.details">
        <div>到账</div>
        <div>微信钱包</div>
      </div>
      <div :class="$style.details">
        <div>金额(元)</div>
        <div v-text="$route.query.cash"></div>
      </div>
    </div>
    <button
      :class="$style.cashbutton"
      @click="$router.push('/wallet')"
    >完成</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: (new Date((new Date()).valueOf() + 60 * 60 * 24 * 1000))
    }
  }
}
</script>

<style lang="postcss" module>
@import "../base/global.css";
.wrap {
  @mixin flexbox;
  flex-direction: column;
}
.right {
  @mixin bg "@/assets/right.gif";
  width: 78px;
  height: 78px;
  margin: 40px 0 24px 0;
}
p {
  margin: 0;
}
.cashtime {
  margin-top: 6px;
  margin-bottom: 24px;
}
.detailswrap {
  width: 100vw;
  border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;
  border-image: svg(1px-border param(--color #c9d1d5)) 1 stretch;
  & > div:nth-child(1) {
    border-bottom: 1px solid transparent;
    border-image: svg(1px-border param(--color #c9d1d5)) 1 stretch;
  }
}
.details {
  @mixin flexbox;
  padding: 11px 20px;
  justify-content: space-between;
  & div:nth-child(2) {
    color: #999;
    font-size: 14px;
    line-heigh: 20px;
  }
}
.cashbutton {
  margin: 40px 46px;
  padding: 9px 110px;
  border-radius: 4px;
  background: #1b9af4;
}
</style>
