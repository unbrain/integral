<template>
  <div :class="$style.father">
    <div
      :class="$style.container"
      @click="buttonClick"
    >
      <div
        :class="$style.message"
        @click.stop
      >
        <div
          :class="$style.close"
          @click="buttonClick"
        ></div>
        <div :class="$style.content">
          <div>
            <div :class="$style.title">活动说明</div>
            <div
              :class="{[$style.detail]:true,[$style.detailhidden]: true}"
              ref="content"
            >
              <ul>
                <li
                  v-for="(item,index) in nativeRules"
                  :key="index"
                  v-html="item"
                ></li>
              </ul>
              <div
                :class="$style.more"
                @click="moreRules"
                v-show="!hidden"
              >
                点击展开更详细规则
                <img
                  src="@/assets/Combined Shape.png"
                  alt
                >
              </div>
            </div>
            <button
              :class="[$style.fine, $style.mybutton]"
              @click="buttonClick"
            >我知道了</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data: function () {
    return {
      hidden: false,
      nativeRules: [],
      showRules: [
        '参与本次活动前，请用户详细阅读活动规则及相关条款。凡参与本次活动，则视为用户已阅读、理解并同意活动规则及注意事项全部内容。',
        '<br>',
        '【邀请规则】', '一、你所邀请的每位好友需首先满足以下两种情况之一，才能帮你获得5元现金奖励：',
        '1. TA是之前从未注册过微博与微博极速版的新用户，在活动期间，通过手机号成功注册微博新帐号；',
        '2. TA是近30日内未登录过微博的老用户，在活动期间首次登录微博。',
        '二、你邀请的每位好友可以通过以下方式帮助你获得5元现金奖励：',
        '1. 好友在注册后15日内通过填写邀请码页面，成功绑定你的邀请码，即会成为你的铁粉，同时TA将会关注你的微博帐号；',
        '2. 若你的铁粉满足上述规则（一）中两种情况之一，则当TA在活动期间首次连续参与每日签到活动则你将获得相应现金奖励，累计3日。所有奖励将直接发至你的邀请活动收益。',
        '三、你邀请的每位好友将通过以下方式获得现金奖励：',
        '1.满足上述规则（一）中两种情况之一的好友当日首次登录微博，1元现金即会直接发至TA的邀请活动收益；',
        '2.满足上述规则（一）中两种情况之一的好友在注册后15日内通过填写邀请码页面，成功绑定你的邀请码，0.5元现金即会直接发至TA的邀请活动收益，同时TA也将会关注你的微博帐号；',
      ],
      hiddenRules: [
        '3.你邀请的每位好友连续参与签到领红包活动，可领更多现金奖励，每周最高可达100元。',
        '4.每个新用户只能被邀请一次，同一个登录账号、同一个手机号、同一个设备或同一提现账户，都视为同一个用户。注意：新用户完成注册15日内才能填写邀请码。',
        '5.邀请收益累计一定现金且达到提现额度后，即可提现（微博将以私信的形式发至微博钱包），每日限定提现一次，每次提现最高金额为100元，提交订单并通过审核后预计7个工作日内到账，如遇双休日、节假日或提现高峰期，提现到账时间可能会出现延迟，请耐心等待。',
        '6.本平台保留在法律法规的规定范围内对上述规则解释的权利。'
      ]
    };
  },
  created() {
    this.nativeRules = this.showRules;
  },
  methods: {
    buttonClick() { // 点击底部item
      this.$refs.content.scrollTop = 0;
      this.$emit('close');
      this.hidden = false;
      this.nativeRules = this.showRules;
    },
    moreRules() {
      this.hidden = !this.hidden;
      this.nativeRules = this.showRules.concat(this.hiddenRules);
    }
  },
};
</script>


<style lang="postcss" module>
@import "../../base/global.css";

.container {
  @mixin flexbox;
  @mixin fullsize;
  z-index: 3;
  padding-bottom: 29px;
  background: rgba(0, 0, 0, 0.56);
  overflow: hidden;
  & .message {
    position: relative;
    width: 299px;
    height: 463px;
    background-color: #fff;
    border-radius: 15px;
    & .close {
      position: absolute;
      top: 16px;
      left: 17px;
      width: 12px;
      height: 12px;
      @mixin bg "@/assets/close.png";
    }
  }
}
/* .somecontenthidden {
  overflow: auto;
} */
.content {
  overflow: hidden;
  padding: 21px 23px 23px 21px;
  line-height: 16px;
  font-size: 12px;
  font-family: PingFangSC-Regular;
  & .title {
    padding: 0px 0 8px 0;
    color: #000;
    text-align: center;
    line-height: 24px;
    font-size: 17px;
  }
  & .detail {
    color: #585858;
    text-indent: 24px;
    overflow: hidden;
    height: 298px;
  }
  & .detailhidden {
    height: 324px;
    overflow: auto;
  }
  & .more {
    display: block;
    width: 100%;
    padding-top: 11px;
    text-align: center;
    color: #507daf;
    & img {
      width: 13px;
      height: 13px;
    }
  }
  & .fine {
    margin-top: 22px;
    width: 100%;
    padding: 9px 0 10px 0;
    line-height: 20px;
    font-size: 14px;
    color: #fb802d;
  }
  & .fine::after {
    border-color: #fb802d;
  }
}
.father {
  z-index: 2;
  width: 375px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  & ::-webkit-scrollbar {
    width: 5px;
  }

  /* 滚动条滑块 */
  & ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
  }
}
</style>

