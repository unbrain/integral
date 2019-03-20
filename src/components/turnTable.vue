<template>
  <div
    :class="$style.wrap"
    @mousewheel.prevent
    @click="$emit('close')"
  >
    <img
      src="@/assets/turnup_03.png"
      alt=""
      :class="$style.turnup"
    >
    <div :class="$style.turntable">
      <img
        src="@/assets/pan1.png"
        alt=""
        :class="$style.turntableimg"
        :style="degChange"
      >
      <div :class="$style.point">
        <img
          src="@/assets/go.png"
          alt=""
          @click="go"
        >
      </div>
    </div>
    <div
      :class="$style.footer"
      c-fff
    >
      <img
        src="@/assets/bin_07.png"
        alt=""
      >
      炫耀一下
    </div>
  </div>
</template>

<script>
export default {
  props: ['integral'],
  data() {
    return {
      currentDeg: 0,
      isTurn: false,
      turnsNum: 0,
      timer: '',
      stopNum: 5,
      degArr: [30, 90, 150, 210, 270, 330]
    }
  },
  computed: {
    degChange() {
      return {
        transform: `rotate(${this.currentDeg}deg)`
      }
    }
  },
  watch: {
    turnsNum(newValue) {
      if (newValue === 5) {
        clearInterval(this.timer);
        this.timer = this.goDetails(10)
      } else if (newValue === 6) {
        clearInterval(this.timer);
        this.timer = this.goDetails(5)
      } else if (newValue === 7) {
        clearInterval(this.timer);
        this.timer = this.goDetails(1, true)
      }
    }
  },
  methods: {
    go() {
      if (!this.isTurn) {
        this.timer = this.goDetails(30);
        this.isTurn = true;
      }
    },
    goDetails(speed, stop = false) {
      return setInterval(() => {
        if (this.currentDeg >= 360) {
          this.turnsNum++;
        }
        this.currentDeg = (this.currentDeg >= 360) ? 0 : this.currentDeg + speed;
        if (stop === true && this.currentDeg >= this.degArr[this.stopNum]) {
          clearInterval(this.timer);
          this.currentDeg = this.degArr[this.stopNum];
          this.isTurn = false;
          this.turnsNum = 0;
        }
      }, 30)
    }

  }
}
</script>

<style lang="postcss" module>
@import "../base/global.css";
.wrap {
  @mixin flexbox;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #404040;
}
.turnup {
  height: 150px;
  width: 249px;
}
.turntable {
  @mixin bg ../assets/pan0.png;
  @mixin flexbox;
  position: relative;
  height: 314px;
  width: 314px;
}
.turntableimg {
  height: 250px;
  width: 250px;
  margin-left: 2px;
  margin-bottom: 2px;
}
.point {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -58%);
  & img {
    height: 130px;
    width: 112px;
  }
}
.footer {
  & img {
    width: 10px;
    height: 10px;
  }
}
</style>
