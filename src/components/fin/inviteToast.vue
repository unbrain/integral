<template>
  <div
    :class="$style.invitetoast"
    @touchmove.prevent
    @mousewheel.prevent
  >
    <div :class="$style.wrap">
      <div :class="$style.msgwrap">
        <div>
          <div :class="$style.msgwraptitle">已私信通知改好有，但是通过微信、QQ邀请好友，成功率更高哦～快去邀请好友一起赚钱吧！</div>
          <div :class="$style.msgwrapbuttonwrap">
            <div
              v-for="(item, index) in buttonObj"
              :key="index"
              :class="$style.msgwrapbutton"
            >
              <img :src="item.url"><span v-text="item.name"></span>
            </div>
          </div>
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
  methods: {
    close() {
      this.$emit('close');
    }
  },
  data() {
    return {
      buttonObj: [
        {
          name: '微信',
          url: require('@/assets/i_wechat.png')
        },
        {
          name: 'QQ',
          url: require('@/assets/i_qq.png')
        }
      ]
    };
  }
};
</script>

<style lang="postcss" module>
@import "../../base/global.css";
.invitetoast {
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
  padding: 40px 25px 21px 25px;
  background-color: #fff;
  border-radius: 12px;
  line-height: 20px;
  font-size: 14px;
  text-align: justify;
  color: #585858;
  & .msgwraptitle {
    padding-bottom: 28px;
  }
  & .msgwrapbuttonwrap {
    display: flex;
    justify-content: space-between;
    & .msgwrapbutton {
      @mixin flexbox;
      padding: 5px 21px;
      border-radius: 22px;
      color: #fff;
      & img {
        display: inline-block;
        width: 30px;
        height: 30px;
      }
    }
    & .msgwrapbutton:nth-child(1) {
      background-color: #67d267;
      box-shadow: 0 4px 20px 0 rgba(173, 247, 76, 0.3);
    }
    & .msgwrapbutton:nth-child(1):hover {
      transition: 0.5s;
      background-color: #006400;
      box-shadow: 0 4px 10px 0 rgba(173, 247, 76, 0.3);
    }
    & .msgwrapbutton:nth-child(2) {
      background-color: #5fb8ff;
      box-shadow: 0 4px 20px 0 rgba(95, 200, 255, 0.3);
    }
    & .msgwrapbutton:nth-child(2):hover {
      background-color: #06508d;
      box-shadow: 0 4px 20px 0 rgba(95, 200, 255, 0.3);
    }
  }
}
</style>
