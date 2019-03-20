<template>
  <div
    ref="scroll"
    :class="$style.loadingwrap"
  >
    <svg
      :class="{[$style.iconactionactive]: fetchStatus,[$style.iconaction]:1}"
      aria-hidden="true"
    >
      <use
        xlink:href="#icon-loading"
        v-if="fetchStatus"
      ></use>
      <use
        xlink:href="#icon-error"
        v-else
      ></use>
    </svg>
    <div v-show="!fetchStatus">请稍后再试</div>
  </div>
</template>

<script>
export default {
  props: {
    handler: {
      type: Function,
      required: true
    },
    shouldHandle: {
      type: Boolean,
      default: true
    },
    fetchStatus: {
      type: Boolean,
      default: false
    },
    fetchEnd: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.checkInView();
  },
  methods: {
    checkInView() {
      const triggers = ['scroll', 'resize'];
      const execute = () => {
        const inView = this.eleInView(this.$refs.scroll);
        if (this.shouldHandle && inView) {
          this.handler();
        }
      };
      execute();
      //一秒只执行一次
      this.check = this.throttle(execute, 1000);
      triggers.forEach(event => window.addEventListener(event, this.check));
    },
    throttle(func, wait) {
      let rtn;
      let timeoutID;
      let last = 0;
      function call() {
        timeoutID = 0;
        last = +new Date();
        rtn = func();
      }
      return function throttled() {
        const delta = new Date() - last;
        if (!timeoutID) {
          if (delta >= wait) call();
          else timeoutID = setTimeout(call, wait - delta);
        }
        return rtn;
      };
    },
    eleInView(element, { offset = 0 } = {}) {
      if (element) {
        const {
          top,
          right,
          bottom,
          left,
        } = element.getBoundingClientRect();

        const intersection = {
          t: bottom,
          r: window.innerWidth - left,
          //减去 footer 的高
          b: window.innerHeight - top - 44,
          l: right
        };

        return (
          intersection.t >= (offset.top || offset) &&
          intersection.r >= (offset.right || offset) &&
          intersection.b >= (offset.bottom || offset) &&
          intersection.l >= (offset.left || offset)
        );
      }
      return null;
    },
  },
  beforeDestroy() {
    const triggers = ['scroll', 'resize'];
    triggers.forEach(event => this.$refs.scroll.removeEventListener(event, this.check));
  }
};
</script>

<style lang='postcss' module>
@import "../../base/global.css";
.loadingwrap {
  @mixin flexbox;
  flex-direction: column;
  padding: 12px;
  font-size: 12px;
  color: #b0b0b0;
}
.iconaction {
  @mixin flexbox;
  width: 1.5rem;
  height: 1.5rem;
}

.iconactionaction {
  animation: myRotate 0.5s linear infinite;
}
@keyframes myRotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
