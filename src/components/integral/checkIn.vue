<template>
  <div
    :class="$style.wrap"
    @mousewheel.prevent
    @click="close"
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
      <div></div>
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
  props: ['integral'],
  methods:{
    close(){
      this.$emit('close');
    }
  },
  mounted(){
    setTimeout(() => {
      this.close();
    }, 2000);
  }
}
</script>

<style lang="postcss" module>
@import "../../base/global.css";
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
  background: rgba(40, 40, 40, 0.9);
}
.coin {
  padding: 24px 0 35px 0;
  transform-style: preserve-3d;
  & div {
    height: 75px;
    width: 75px;
    /* @mixin bg "@/assets/jinbi9.png";
    animation: move_jinbi 1s steps(8, start) infinite forwards; */
    @mixin bg "@/assets/jinbi.png";
    animation: rolls 2s steps(8, start) 1 reverse;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes rolls {
  to {
    background-position: 0 bottom;
  }
}
.footer {
  & img {
    width: 10px;
    height: 10px;
  }
}

@keyframes rt {
  0 {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(20deg);
  }
}

@keyframes move_jinbi {
  0 {
    @mixin bg "@/assets/jinbi0.png";
  }
  12.5 {
    @mixin bg "@/assets/jinbi1.png";
  }
  1/4 {
    @mixin bg "@/assets/jinbi2.png";
  }
  37.5% {
    @mixin bg "@/assets/jinbi3.png";
  }
  1/2 {
    @mixin bg "@/assets/jinbi4.png";
  }
  67.5% {
    @mixin bg "@/assets/jinbi5.png";
  }
  3/4 {
    @mixin bg "@/assets/jinbi7.png";
  }
  87.5% {
    @mixin bg "@/assets/jinbi8.png";
  }
  100% {
    @mixin bg "@/assets/jinbi9.png";
  }
}
</style>
