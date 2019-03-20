<template>
  <div :class="$style.wrap">
    <div :class="$style.iconwrap">
      <svg
        :class="$style.icon"
        aria-hidden="true"
      >
        <use xlink:href="#icon-warning"></use>
      </svg>
    </div>
    <div>你暂时没有铁粉快去邀请吧</div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="postcss" module>
@import "../../base/global.css";
.wrap {
  @mixin flexbox;
  padding: 70px 0 70px 0;
  flex-direction: column;
  background-color: #fafafa;
  & .iconwrap {
    padding: 24px;
    border: 3px solid #d6d6d6;
    border-radius: 100%;
    margin-bottom: 20px;
  }
  & .icon {
    width: 64px;
    height: 64px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>
