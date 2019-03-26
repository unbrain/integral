<template>
  <div :class="$style.wrap">
    <div
      :class="$style.fwrap"
      w-12-16
    >
      <div
        :class="$style.left"
        @click="gomain"
      >
        新玩法来袭
      </div>
      <div
        :class="$style.right"
        @click="actionShow=true"
      >
        规则
      </div>
    </div>
    <div
      w-16-19
      :class="$style.top"
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
    <button
      :class="[$style.mybutton,$style.mainbtn]"
      @click="go"
    >
      <div>兑换</div>
    </button>
    <fin-action-description v-show="actionShow" @close="actionShow = false"></fin-action-description>
  </div>
</template>

<script>
import actionDescription from '@/components/fin/actionDescription';
export default {
  components: {
    'fin-action-description': actionDescription
  },
  data() {
    return {
      actionShow: false
    }
  },
  methods: {
    go() {
      this.$router.push('/wallet');
    },
    gomain() {
      this.$router.push('/main');
    }
  }
}
</script>

<style lang="postcss" module>
@import "../../base/global.css";
.wrap {
  @mixin bg "@/assets/bg1.png";
  @mixin flexbox;
  position: relative;
  flex-direction: column;
  width: 100vw;
  height: 135px;
  color: #fff;
}
.fwrap {
  @mixin flexbox;
  position: absolute;
  top: 8px;
  justify-content: space-between;
  width: 100vw;
}
.left {
  left: 1px;
  padding: 6px 12px 8px 8px;
  background-image: linear-gradient(-134deg, #fbe438 0%, #ff9925 100%);
  border-bottom-right-radius: 32px;
  border-top-right-radius: 32px;
  font-weight: 600;
}
.right {
  margin-left: 18px;
  padding: 2px 8px;
  border-radius: 21px;
}
.right:active {
  background: rgba(240, 240, 240, 0.66);
}
.top {
  display: flex;
  align-items: center;
  & img {
    margin-right: 4px;
  }
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
