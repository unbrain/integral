<template>
  <div>
    <div :class="$style.topbar">
      <ul>
        <li
          @click="sliderchange(index)"
          v-for="(item, index) in sliderMsg"
          :key="index"
        >
          <a
            href="#"
            v-on:click.self.prevent
            :class="{[$style.active]: sliderShow[index]}"
            v-text="sliderMsg[index]"
          >
          </a>
          <div
            :class="$style.focus"
            v-show="sliderShow[index]"
          >
            <div></div>
          </div>
        </li>

      </ul>
    </div>
    <fin-how-invite
      v-if="sliderShow[0]"
      :body-detail="bodyDetail"
    ></fin-how-invite>

    <fin-invite-friend
      v-else-if="sliderShow[1]"
      @show-rule="$emit('show-rule')"
    ></fin-invite-friend>

    <fin-my-friends v-else></fin-my-friends>
  </div>
</template>

<script>
// 有三个 tab 切换
import howInvite from '@/components/fin/howInvite';
import inviteFriend from '@/components/fin/inviteFriend.vue';
import myFriends from '@/components/fin/myFriends';

export default {
  components: {
    'fin-how-invite': howInvite,
    'fin-invite-friend': inviteFriend,
    'fin-my-friends': myFriends
  },
  props: ['bodyDetail'],
  data: function () {
    return {
      sliderShow: [1, 0, 0],
      sliderMsg: ['如何邀请', '唤醒老铁(12)', '我的老铁(0)'],
    };
  },
  methods: {
    sliderchange: function (index) {
      this.sliderShow = [0, 0, 0];
      this.sliderShow[index] = 1;
    },
  }
};
</script>


<style lang="postcss" module>
@import "../../base/global.css";

.topbar {
  font-family: PingFangSC-Medium;
  border-bottom: 1px solid transparent;
  color: #999999;
  border-image: svg(1px-border param(--color #e6e6e6)) 1 stretch;
  & ul {
    padding-top: 12px;
  }
  & ul {
    display: flex;
  }
  & a.active {
    color: #333;
  }
  & a {
    display: inline-block;
    text-align: center;
    line-height: 20px;
    font-size: 14px;
    color: #999999;
  }
  & li:first-child {
    padding: 0px 53px 0px 34px;
  }
  & li:nth-child(2) {
    padding-right: 45px;
  }
}

.line {
  height: 1px;
  background: white svg(square param(--color #e6e6e6));
}

.focus {
  @mixin flexbox;
  margin: 4px 0 5px 0;
  & div {
    width: 24px;
    height: 3px;
    background-image: linear-gradient(90deg, #fa8823 0%, #fa7023 100%);
    border-radius: 4px;
    transition: width 1s;
  }
}

li:active {
  & .focus {
    & div {
      width: 3px;
    }
  }
}

@keyframes slidein {
  from {
    width: 5px;
  }
  to {
    width: 24px;
  }
}
</style>

