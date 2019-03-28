<template>
  <div :class="$style.headerwrap">
    <withdraw-toast
      :is-show="isShow"
      @change="isShow = false"
      @withdraw="withdraw"
      :current-integral="currentIntegral"
    ></withdraw-toast>
    <div :class="$style.topwrap">
      <div :class="$style.top">
        <div
          w-12-16
          :class="$style.headertop"
        >我的积分</div>
        <div
          w-40-52
          v-text="currentIntegral"
        ></div>
        <button
          w-12-16
          :class="$style.withdrawbtn"
          @click="changeMoney"
        >换钱</button>
      </div>
      <div :class="$style.top">
        <div
          w-12-16
          :class="$style.headertop"
        >当前收益</div>
        <div w-40-52><span :class="$style.moneyicon">￥</span>{{currentGet}}</div>
        <button
          w-12-16
          :class="$style.withdrawbtn"
          @click="withdrawCash"
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
import withdrawToast from '@/components/integral/withdrawToast';

export default {
  components: {
    'withdraw-toast': withdrawToast
  },
  data() {
    return {
      currentIntegral: 2560,
      currentGet: 34.5,
      isShow: false,
    }
  },
  methods: {
    changeMoney() {
      this.isShow = !this.isShow;
    },
    withdrawCash() {
      this.$router.push({ name: 'cash' });
    },
    withdraw(arr) {
      this.currentGet = this.currentGet + Number(arr[0]);
      this.currentIntegral = this.currentIntegral - arr[1];
    }
  }
}
</script>

<style lang="postcss" module>
@import "../../base/global.css";
.headerwrap {
  background-image: linear-gradient(-58deg, #ffd53e 0%, #ff9925 100%);
  text-align: center;
  color: #fff;
}
.topwrap {
  @mixin flexbox;
  justify-content: space-around;
  & .top:nth-child(1) {
    position: relative;
  }
  & .top:nth-child(1)::after {
    content: "";
    display: block;
    position: absolute;
    width: 1px;
    height: 64px;
    background-color: #fff;
    right: -53px;
    top: 40px;
    transform: scale(0.5);
  }
}
.headertop {
  padding-top: 18px;
}
.withdrawbtn {
  margin-bottom: 14px;
  padding: 3px 18px;
  border: 1px solid #fff;
  border-radius: 50px;
  background-color: transparent;
  color: #fff;
}
.footerwrap {
  padding: 11px 0;
  background-image: linear-gradient(
    90deg,
    rgba(255, 158, 34, 1) 0%,
    rgba(255, 201, 54, 0.3) 100%
  );
}
.moneyicon {
  font-size: 25px;
  line-height: 25px;
}
</style>
