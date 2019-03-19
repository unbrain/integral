<template>
  <div
    :class="$style.wrap"
    @mousewheel.prevent
    @click="$emit('close')"
  >
    <div
      w-18-25
      c-fff
    >
      签到成功<span
        c-org
        v-text="integral"
      ></span>积分
    </div>
    <div :class="$style.coin">
      <img
        src="@/assets/bin_03.png"
        alt=""
      >
    </div>
    <div
      :class="$style.footer"
      c-fff
    >
      <img
        src="@/assets/bin_07.png"
        alt=""
      >
      低调分享并关注@微博任务
    </div>
  </div>
</template>

<script>
export default {
  props: ['integral']
}
</script>

<style lang="postcss" module>
@import "../base/global.css";
.wrap {
  @mixin flexbox;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 167px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #404040;
}
.coin {
  padding: 24px 0 35px 0;
  & img {
    height: 75px;
    width: 75px;
  }
}
.footer {
  & img {
    width: 10px;
    height: 10px;
  }
}
</style>
