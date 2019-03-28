<template>
  <div :class="$style.head">
    <div
      :class="$style.invite"
      :style="{backgroundImage: `url(${headDetail.headImageUrl})`}"
    >
      <div :class="$style.rule">
        <div :class="$style.rulebutton">
          <div @click="$emit('show-rule')">规则</div>
        </div>
      </div>
    </div>
    <div :class="$style.flexbox">
      <button
        :class="$style.earnbutton"
        v-text="headDetail.headMsg"
      ></button>
    </div>
    <div :class="[$style.code,$style.flexbox]">
      <span :class="[$style.codenum]">邀请码： {{headDetail.inviteCode}}</span>
      <button
        :class="[$style.mybutton, $style.codebutton]"
        @click="copyText"
      >复制</button>
    </div>
    <div :class="$style.actiontimer">
      <div :class="$style.actiontimermsg">
        <fin-message-strip
          :headTimerMsg="headDetail.headTimerMsg"
          :direction="true"
          :speed="5"
        ></fin-message-strip>
      </div>
      <div>
        <div :class="$style.actiontimertimewrap">
          <div>
            <div :class="$style.actiontimertime">
              活动倒计时
              <div :class="$style.actiontimertimechild">
                <div>{{hours | formatDate}}</div>
              </div>
              时
              <div :class="$style.actiontimertimechild">
                <div>{{minutes | formatDate}}</div>
              </div>
              分
              <div :class="$style.actiontimertimechild">
                <div>{{second | formatDate}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div :class="$style.actiontimertimewrap">
        <div :class="$style.actiontimertime">
          活动倒计时
          <div :class="$style.actiontimertimechild">
            <div>{{hours | formatDate}}</div>
          </div>
          时
          <div :class="$style.actiontimertimechild">
            <div>{{minutes | formatDate}}</div>
          </div>
          分
          <div :class="$style.actiontimertimechild">
            <div>{{second | formatDate}}</div>
          </div>
        </div>
      </div> -->
    </div>
    <fin-lottery></fin-lottery>
  </div>
</template>

<script>
// 消息滚播组件
import messageStrip from '@/components/fin/messageStrip';
import lottery from '@/components/fin/lottery';

export default {
  components: {
    'fin-message-strip': messageStrip,
    'fin-lottery': lottery
  },
  props: ['headDetail'],
  data: function () {
    return {
      date: new Date(),
      hours: 0,
      minutes: 0,
      second: 0, //以上数据都是为了计算倒计时
      timer: '',
    };
  },
  methods: {
    //使用插件 vue-clipboard2 进行复制操作
    copyText() {
      this.$copyText(this.headDetail.inviteCode).then(() => {
        this.$toast('<b>已复制去邀请好友吧</b>', { autoClose: true, enableHtml: true });
        console.log('复制成功' + this.headDetail.inviteCode);
      }, () => {
        console.log('复制失败了');
      });
    }
  },
  filters: {
    formatDate: function (v) {
      if (Number(v) < 10) {
        return '0' + v;
      }
      return v;
    }
  },
  mounted: function () {
    this.timer = setInterval(() => {
      const min = (this.headDetail.deadLine - new Date());
      this.second = Math.round(min / 1000 % 60);
      this.minutes = Math.floor(min / 1000 / 60 % 60);
      this.hours = Math.floor(min / 1000 / 60 / 60);
    }, 1000);
  },
  beforeDestory: function () {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
};
</script>

<style lang="postcss" module>
@import "../../base/global.css";
.head {
  & > div {
    font-family: PingFangSC-Regular;
    color: #fff;
  }
  @mixin bg "@/assets/firsthead.png";
}

button,
input[type="submit"],
input[type="reset"] {
  padding: 0;
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.invite {
  height: 149px;
  background-size: cover;
}

.rule {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 24px 0 20px 0;
}

.rulebutton {
  @mixin bg "@/assets/Mask.png";
  box-shadow: 0 4px 8px 0 rgba(209, 0, 0, 0.5);
  border-radius: 24px 0 0 24px;
  line-height: 16px;
  font-size: 12px;
  & div {
    padding: 4px 13px 4px 17px;
  }
}

.flexbox {
  @mixin flexbox;
}

.earnbutton {
  padding: 9px 101px 9px 101px;
  background-image: linear-gradient(0deg, #ffbf00 0%, #ffe600 100%);
  box-shadow: 0 8px 20px 0 rgba(189, 0, 0, 0.3);
  border-radius: 50px;
  text-align: center;
  line-height: 25px;
  font-size: 18px;
  color: #f33d05;
}

.earnbutton:active {
  background-image: linear-gradient(0deg, #ff9d00 0%, #ffbf00 100%);
}

.code {
  padding: 11px 0 10px 0;
  line-height: 24px;
  font-size: 17px;
}

.codenum {
  margin-right: 12px;
}

.codebutton {
  padding: 2px 17px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
}

.orgenbutton::after {
  border-color: #fff;
}

.actiontimer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  padding: 5px 8px 6px 17px;
  background: #ffecb0;
  font-size: 12px;
}

.actiontimermsg {
  width: 154px;
}

.actiontimermsg li {
  width: 100%;
  color: #a05220;
}

.actiontimertimewrap {
  border-radius: 50px;
  background-image: linear-gradient(-90deg, #F23805 0%, #F6681E 48%, #FF8D2D 100%);
  padding: 4px 10px;
  /* background-size: 100%; */
  /* height: 23px; */
}

.actiontimertime {
  @mixin flexbox;
  font-size: 12px;
  & .actiontimertimechild {
    @mixin flexbox;
    height: 18px;
    width: 20px;
    margin: 0 4px 0 4px;
    background-color: #fff;
    border-radius: 4px;
    color: #fa0000;
    & > div {
      @mixin flexbox;
      line-height: 18px;
      height: 18px;
    }
  }
}

@media screen and (max-width: 370px) {
  .actiontimer {
    white-space: nowrap;
  }
  .actiontimermsg,
  .actiontimertime {
    -webkit-transform: scale(0.93);
  }
}

@media screen and (max-width: 320px) {
  .actiontimer {
    white-space: nowrap;
  }
  .actiontimermsg,
  .actiontimertime {
    transform: scale(0.83);
  }
}
</style>
