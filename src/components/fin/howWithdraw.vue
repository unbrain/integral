<template>
  <div :class="$style.howdrawcontain">
    <div
      :class="$style.title"
      v-text="howWithdrawTitle"
    ></div>
    <div :class="$style.titlemsg">老铁注册登录后，7日内任意3天访问，微博/微博极速版客户端，即可拿到当天的对应奖励</div>
    <ul :class="$style.detail">
      <li
        v-for="(item, index) in luckyMoney"
        :key="index"
      >
        <div :class="$style.lucky">
          <div>{{item}}<span>元</span></div>
        </div>
        <div :class="$style.flexcontain">
          <div :class="$style.circlecontain">
            <div :class="[$style.circle]"></div>
          </div>
        </div>
        <div :class="[$style.flexcontain, $style.day]">第{{index+1}}天</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['howWithdrawTitle'],
  data: function () {
    return {
      luckyMoney: [5, 2, 3]
    };
  }
};
</script>

<style lang="postcss" module>
@import "../../base/global.css";
.howdrawcontain {
  @mixin flexbox;
  flex-direction: column;
  text-align: center;
  line-height: 20px;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #333333;
}
.title {
  margin: 21px 0 10px 0;
}
.titlemsg {
  margin-left: 22px;
  margin-right: 23px;
  line-height: 16px;
  font-size: 12px;
  color: #999999;
}
.detail {
  display: flex;
  width: 100%;
  padding: 28px 0 21px 0;
  list-style: none;
  & li:nth-child(1) {
    margin: 0 75px 17px 25px;
  }
  & li:nth-child(2) {
    margin-right: 70px;
  }
}
.lucky {
  @mixin flexbox;
  width: 58px;
  height: 27px;
  @mixin bg "@/assets/i_guide.svg";
  font-family: Helvetica;
  font-size: 20px;
  color: #ffffff;
  & span {
    font-family: PingFangSC-Regular;
    display: inline-block;
    font-size: 15px;
  }
}
.flexcontain {
  @mixin flexbox;
}
.circlecontain {
  padding: 0 11px;
  background-color: #fff;
}
.circle {
  width: 10px;
  height: 10px;
  margin: 19px 0 10px 0;
  background: #fa6e23;
  border-radius: 100%;
  position: relative;
}
.day {
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
}

// 对第一个 div 写虚线
li:nth-child(1) > div:nth-child(2) > div > div {
  position: relative;
}

li:nth-child(1) > div:nth-child(2) > div > div::after {
  content: "";
  display: block;
  position: absolute;
  top: 5px;
  z-index: -1;
  width: 262px;
  border: 1px dashed #979797;
}
</style>
