<template>
  <div :class="$style.wrap">
    <div
      w-16-19
      title="$style.top"
    >
      <img
        src="../assets/Group 17.png"
        alt=""
        :class="$style.star"
      >
      积分
    </div>
    <div w-40-52>
      2500
    </div>
    <button :class="[$style.mybutton,$style.mainbtn]">
      兑换
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" module>
@import "../base/global.css";
.wrap {
  @mixin bg ../assets/bg.png;
  @mixin flexbox;
  flex-direction: column;
  width: 100%;
  height: 120px;
  color: #fff;
}
.top {
  display: flex;
  align-items: center;
}
.star {
  width: 16px;
  height: 16px;
}
.mainbtn {
  padding: 5px 25px;
}
</style>
