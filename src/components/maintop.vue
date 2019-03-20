<template>
  <div :class="$style.wrap">
    <div
      w-16-19
      title="$style.top"
    >
      <img
        src="@/assets/Group 17.png"
        alt=""
        :class="$style.star"
      >
      积分
    </div>
    <div w-30-44>
      2500
    </div>
    <button :class="[$style.mybutton,$style.mainbtn]" @click="go">
      兑换
    </button>
  </div>
</template>

<script>
export default {
  methods:{
    go(){
      this.$router.push('/wallet');
    }
  }
}
</script>

<style lang="postcss" module>
@import "../base/global.css";
.wrap {
  @mixin bg ../assets/bg.png;
  @mixin flexbox;
  flex-direction: column;
  width: 100%;
  height: 135px;
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
  display: block;
  @mixin flexbox;
  width: 60px;
  height: 25px;
  font-size: 12px;
  line-height: 20px;
}
</style>
