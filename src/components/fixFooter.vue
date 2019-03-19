<template>
  <div :class="$style.footer">
    <div
      :class="$style.title"
      w-14-20
    >累计收益 <span w-18-20>34.5元</span> 炫耀一下</div>
    <ul :class="$style.footerchild">
      <li
        v-for="(item,index) in imageUrls"
        :key="index"
      >
        <img
          :src="item.url"
          :class="$style.imagestyle"
        >
        <a
          href
          v-text="item.detail"
          :class="$style.astyle"
        ></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      imageUrls: [
        {
          url: require('../assets/i_icon_wechat.svg'),
          detail: '微信邀请'
        },
        {
          url: require('../assets/i_icon_wechat_pyq.svg'),
          detail: '朋友圈邀请'
        },
        {
          url: require('../assets/i_icon_qq.svg'),
          detail: 'QQ邀请'
        }],
    };
  }
};
</script>


<style lang="postcss" module>
@import "../base/global.css";
.title {
  padding-bottom: 18px;
  padding-top: 5px;
  text-align: center;
  & span {
    color: #ee6723;
  }
}
.footer {
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 375px;
  padding: 7px 0 7px 0;
  background: #fafafa;
  border-top: 1px solid transparent;
  border-image: svg(1px-border param(--color #e8e8e8)) 1 stretch;
  box-shadow: 4px 10px 20px -4px rgba(0, 0, 0, 0.75);
  line-height: 21px;
  font-family: PingFangSC-Regular;
  font-size: 15px;
  color: #697480;
  & .footerchild {
    display: flex;
    & li {
      @mixin flexbox;
    }
    & li:first-child {
      padding-left: 18px;
      padding-right: 13px;
      & img {
        margin-right: 5px;
      }
    }
    & li:nth-child(2) {
      padding-left: 12px;
      padding-right: 14px;
      border-left: 1px solid transparent;
      border-right: 1px solid transparent;
      border-image: svg(1px-border param(--color #d8d8d8)) 1 stretch;
      & img {
        padding-right: 2px;
      }
    }
    & li:nth-child(3) {
      padding-left: 11px;
      padding-right: 18px;
      & img {
        padding-right: 2px;
      }
    }
    & .imagestyle {
      display: inline-block;
      width: 30px;
    }
    & .astyle {
      display: inline-block;
      font-size: 14px;
      color: #999999;
    }
  }
}
</style>
