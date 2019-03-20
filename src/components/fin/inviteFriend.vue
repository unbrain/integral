<template>
  <div>
    <div
      :class="$style.msgcontain"
      @click="$emit('show-rule')"
    >
      <div :class="$style.msg">查看规则</div>
    </div>
    <fin-invite-friend-image></fin-invite-friend-image>
    <fin-earn-list-with-friend></fin-earn-list-with-friend>
  </div>
</template>

<script>
/**
 * 邀请页面，有一个规则的 tips 需要向父组件 emit 以便让 app 弹出规则页
 * earnListWithFriend 组件是能邀请并获得奖金的朋友列表
 *  */
import inviteFriendImage from '@/components/fin/inviteFriendImage';
import earnListWithFriend from '@/components/fin/earnListWithFriend';

export default {
  components: {
    'fin-invite-friend-image': inviteFriendImage,
    'fin-earn-list-with-friend': earnListWithFriend
  },
  data: function () {
    return {
      balance: '14.00',
      limitNum: '10/30',
    };
  }
};
</script>

<style lang="postcss" module>
@import "../../base/global.css";
.msgcontain {
  padding: 9px 0px;
  background-color: #fffff7;
}
.msg {
  text-align: center;
  line-height: 16px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
}
</style>
