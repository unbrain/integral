<template>
  <div :class="$style.container">
    <div :class="$style.title">如何邀请铁粉拿红包</div>
    <div :class="$style.titlemsg">
      <div
        v-for="(item,index) in images"
        :key="index"
        :class="$style.titlemsgchild"
      >
        <img
          :src="item.imageUrls"
          alt
        >
        <div
          :class="$style.titlemsgdetail"
          v-html="item.imageDetails"
        >
        </div>
      </div>
    </div>
    <div :class="$style.titlemsglist">
      <ol>
        <li
          v-for="(item, index) in listDetails"
          :key="item"
          :class="$style.titlemsglistli"
        >
          <div>
            <div
              v-text="index+1"
              :class="$style.titlemsglistcircle"
            ></div>
          </div>
          <div v-text="item"></div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      images: [
        {
          imageUrls: require('@/assets/lucky_3.png'),
          imageDetails: '点击按钮<div>分享给好友</div>'
        },
        {
          imageUrls: require('@/assets/lucky_2.png'),
          imageDetails: '好友打开链接<div>下载安装</div>'
        },
        {
          imageUrls: require('@/assets/lucky_1.png'),
          imageDetails: '好友注册/登录<div>您获得红包</div>'
        }],
      listDetails: [
        '邀请亲朋好友、同学及同事成为铁粉的成功率最高哟~',
        '分享到3个及以上的微信群、QQ群，铁粉的收益率会提升200%哦~',
        '可以告诉您的朋友：注册可领1元现金，可微信立即提现'
      ],
    };
  }
};
</script>

<style lang="postcss" module>
@import "../../base/global.css";

.container {
  line-height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Medium;
  color: #333;
  & .title {
    padding-bottom: 10px;
    text-align: center;
  }
  & .titlemsg {
    display: flex;
    position: relative;
    justify-content: space-between;
    padding-left: 8px;
    padding-right: 12px;
    & .titlemsgchild {
      flex-direction: cloumn;
      padding-left: 8px;
      padding-right: 8px;
      background-color: #fff;
    }
    & .titlemsgchild:first-child::after {
      display: block;
      position: absolute;
      top: 37px;
      z-index: -1;
      width: 330px;
      border: 1px dashed #979797;
      content: "";
    }
    & img {
      width: 80px;
    }
  }
  & .titlemsgdetail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    flex-direction: column;
    line-height: 16px;
    font-size: 12px;
    color: #999999;
  }
  & .titlemsglist {
    padding-left: 22px;
    padding-right: 16px;
    line-height: 16px;
    font-size: 12px;
    color: #333;
    & .titlemsglistli {
      display: flex;
      padding-bottom: 12px;
    }
    & .titlemsglistcircle {
      @mixin flexbox;
      width: 15px;
      height: 15px;
      background-color: #fb7c26;
      border-radius: 100%;
      margin-right: 12px;
      color: #fff;
    }
  }
}
</style>
