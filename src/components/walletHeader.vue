<template>
  <div :class="$style.headerwrap">
    <div :class="$style.topwrap">
      <div :class="$style.top">
        <div
          w-12-16
          :class="$style.headertop"
        >我的积分</div>
        <div w-40-52>2560</div>
        <button
          w-12-16
          :class="$style.withdrawbtn"
        >换钱</button>
      </div>
      <div :class="$style.top">
        <div
          w-12-16
          :class="$style.headertop"
        >当前收益</div>
        <div w-40-52><span :class="$style.moneyicon">￥</span>19.8</div>
        <button
          w-12-16
          :class="$style.withdrawbtn"
        >提现</button>
      </div>
    </div>
    <div
      :class="$style.footerwrap"
      w-11-15
    >
      昨日汇率:1000互积分＝1.00元<strong>查看原因</strong>
      <div>积分转换汇率受平台收益影响(会有浮动)</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" module>
@import "../base/global.css";
.headerwrap {
  background-image: linear-gradient(-58deg, #ffd53e 0%, #ff9925 100%);
  text-align: center;
  color: #fff;
}
.topwrap {
  @mixin flexbox;
  justify-content: space-around;
}
.headertop {
  padding-top: 18px;
}
.withdrawbtn {
  margin-bottom: 14px;
  padding: 3px 18px;
  border: 2px solid #fff;
  border-radius: 50px;
  background-color: transparent;
  color: #fff;
}
.footerwrap {
  padding: 11px 0;
  background-image: linear-gradient(
    -174deg,
    rgba(255, 111, 0, 0.3) 0%,
    rgba(255, 130, 0, 0.1) 100%
  );
}
.moneyicon {
  font-size: 25px;
  line-height: 25px;
}
</style>
