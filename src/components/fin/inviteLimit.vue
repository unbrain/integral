<template>
  <div :class="$style.msgcontain">
    <div :class="$style.msg">今日可邀请上线{{limitNum}}</div>
  </div>
</template>

<script>
export default {
  props: ['limitNum'],
  data() {
    return {};
  }
};
</script>

<style lang="postcss" module>
@import "../../base/global.css";
.msgcontain {
  padding: 9px 0px;
  background-color: #f7f7f7;
  border-bottom: 1px solid transparent;
  border-image: svg(1px-border param(--color #e6e6e6)) 1 stretch;
}
.msg {
  text-align: center;
  line-height: 16px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
}
</style>
