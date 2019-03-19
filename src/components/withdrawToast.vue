<template>
  <div
    :class="$style.toastwrap"
    v-show="isShow"
    @mousewheel.prevent
  >
    <div :class="$style.toast">
      <img
        src="../assets/close.png"
        alt=""
        :class="$style.close"
        @click="$emit('change')"
      >
      <div
        w-17-24
        c-333
      >
        兑换现金
      </div>
      <input
        type="text"
        :class="$style.input"
        v-model="input"
        placeholder="至少输入10积分"
        @focus="focus"
      >
      <div
        w-11-15
        :class="$style.withdraw"
      >
        <div c-999>可兑换现金<span
            c-org
            v-text="canDraw"
          ></span><span c-org>元</span></div>
        <div c-blu>全部兑换</div>
      </div>
      <button :class="[$style.toastbtn, {[$style.candraw]: status}]">
        兑换
      </button>
      <div
        c-999
        w-11-15
      >
        今日兑换率<span c-org>{{rate | formatRate}}积分＝1元现金</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isShow'],
  data() {
    return {
      rate: 1 / 1000,
      canDraw: '0.0',
      input: '',
      status: false
    }
  },
  filters: {
    formatRate(c) {
      return 1 / c;
    }
  },
  watch: {
    input(newValue) {
      if (newValue >= 10) {
        this.canDraw = this.input * this.rate;
        this.status = true;
      } else {
        this.canDraw = '0.0';
        this.status = false;
      }
    }
  },
  methods: {
    focus() {
      this.input = '';
    }
  }
}
</script>

<style lang='postcss' module>
@import "../base/global.css";

.toastwrap {
  @mixin flexbox;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.56);
}
.toast {
  position: relative;
  padding: 27px 20px;
  margin: 0px 57px 110px 57px;
  width: 221px;
  background-color: #fff;
  border-radius: 15px;
}
.close {
  position: absolute;
  top: 15px;
  left: 15px;
  height: 12px;
  width: 12px;
}
.input {
  margin-top: 12px;
  margin-bottom: 7.5px;
  width: 221px;
  height: 30px;
  border: 1px solid #e8e8e8;
  border-radius: 50px;
  font-size: 17px;
  line-height: 24px;
  color: #636363;
  text-align: center;
}
.withdraw {
  @mixin flexbox;
  justify-content: space-between;
}
.toastbtn {
  margin-top: 23px;
  margin-bottom: 11px;
  width: 221px;
  height: 40px;
  border-radius: 50px;
  background-color: #dadada;
  font-size: 17px;
}
.candraw {
  background-image: linear-gradient(-45deg, #ffc74d 0%, #ff8800 100%);
}
</style>
