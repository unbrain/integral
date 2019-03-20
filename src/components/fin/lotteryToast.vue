<template>
  <div
    :class="$style.lotterytoast"
    @touchmove.prevent
    @mousewheel.prevent
  >
    <div :class="$style.wrap">
      <div :class="$style.msgwrap">
        <div :class="$style.awardimg">
        </div>
        <div :class="$style.msg">
          <div>
            {{award.name}}
          </div>
          <div :style="{backgroundImage: `url(${award.url})`}">
          </div>
          <div></div>
        </div>
      </div>
      <div :class="$style.iconwrap">
        <svg
          :class="$style.icon"
          aria-hidden="true"
          @click="close"
        >
          <use xlink:href="#icon-close"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    award: {
      type: Object,
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  },
  data() {
    return {

    };
  }
};
</script>

<style lang="postcss" module>
@import "../../base/global.css";
.lotterytoast {
  @mixin flexbox;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 375px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.56);
}

.wrap {
  margin: 0 53px 10px 52px;
}

.iconwrap {
  display: flex;
  justify-content: center;
  padding-top: 24px;
}

.icon {
  width: 32px;
  height: 32px;
  vertical-align: -0.15em;
  fill: #d4d4d4;
  overflow: hidden;
}

.msgwrap {
  border: 1px solid transparent;
  border-radius: 12px;
  line-height: 28px;
  font-size: 20px;
  text-align: justify;
  color: #ff8200;
  & .awardimg {
    @mixin bg "../../assets/awardhead.png";
    width: 270px;
    height: 72px;
  }
  & .msg {
    @mixin flexbox;
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: column;
    background-color: #fff;
    border-bottom-radius: 0 10px;
    & > div:nth-child(2) {
      height: 80px;
      width: 80px;
      background-size: cover;
    }
    & > div:nth-child(3) {
      @mixin bg "../../assets/lotteytoastfotter.gif";
      height: 60px;
      width: 226px;
    }
  }
}
</style>
