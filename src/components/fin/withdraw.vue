<template>
  <div :class="$style.withdrawcontain">
    <div :class="$style.money">
      可提现金额：
      <span>{{balance}}元</span>
    </div>
    <button :class="$style.mybutton">查看</button>
  </div>
</template>

<script>
//传入可提现金额
export default {
  props: ['balance'],
  data() {
    return {
    };
  }
};
</script>

<style lang="postcss" module>
@import "../../base/global.css";

.withdrawcontain {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 14px 17px 16px 17px;
  border-bottom: 1px solid transparent;
  border-image: svg(1px-border param(--color #e6e6e6)) 1 stretch;
  line-height: 24px;
  font-size: 14px;
  & button {
    padding: 3px 24px 2px 24px;
    line-height: 16px;
    font-size: 12px;
    color: #FB802D;
  }
  & button::after{
    border-color: #FB802D;
  }
}

.money {
  & span {
    display: inline-block;
    color: #ff0000;
  }
}
</style>
