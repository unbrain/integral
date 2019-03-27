<template>
  <div :class="$style.wrap">
    <div :class="$style.whitewrap">
      <div :class="$style.title">每成功邀请1位老铁，赠送一次抽奖，<span>100％</span>中奖</div>
      <ul :class="$style.svgContain">
        <li
          v-for="(item, index) in svgIcons"
          :key="index"
          :class="$style.svgwrap"
          ref="svg"
        >
          <div :class="{[$style.svgactive]:item.active}">
          </div>
          <div
            :class="{[$style.icon]: true}"
            :style="{backgroundImage: `url(${item.url})`}"
          >
          </div>
          <div v-text="item.name"></div>
        </li>
        <li :class="$style.start">
          <div :class="$style.rstart">
            <div>
              <div
                @click="play"
                :class="$style.letpaly"
              >立即抽奖</div>
              <div :class="$style.countswrap">
                <div :class="$style.counts">
                  剩{{changeData.counts}}次抽奖机会
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div :class="$style.awardrecord">
        <router-link to="/record">中奖纪录</router-link>
      </div>
    </div>
    <fin-lottery-toast
      v-show="showToast"
      @close="showToast=false"
      :award="award"
    ></fin-lottery-toast>
  </div>
</template>

<script>
import lotteryToast from '@/components/fin/lotteryToast';
/**
 * starNum 开始位置左上角为 0
 * speed 速度
 * direction 方向默认为真顺时针
 */
export default {
  components: { 'fin-lottery-toast': lotteryToast },
  props: {
    startNum: {
      type: Number,
      default: 0
    },
    speed: {
      type: Number,
      default: 50
    },
    direction: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      svgIcons: [
        {
          url: require('@/assets/award.png'),
          active: false,
          name: '200积分'
        },
        {
          url: require('@/assets/award.png'),
          active: false,
          name: '160积分'
        },
        {
          url: require('@/assets/award.png'),
          active: false,
          name: '80积分'
        },
        {
          url: require('@/assets/award.png'),
          active: false,
          name: '20积分'
        },
        {
          url: require('@/assets/award.png'),
          active: false,
          name: '400积分'
        },
        {
          url: require('@/assets/award.png'),
          active: false,
          name: '800积分'
        },
        {
          url: require('@/assets/award.png'),
          active: false,
          name: '10积分'
        },
        {
          url: require('@/assets/award.png'),
          active: false,
          name: '5积分'
        },
        {
          url: require('@/assets/award.png'),
          active: false,
          name: '0积分'
        },
      ],
      start: false, // 图标切换
      timer1: '',
      currentIndex: 0,
      currentSpeed: 0,
      order: [0, 1, 2, 5, 8, 7, 6, 3],
      turnsNum: 0, // 圈数
      showToast: false,
      award: {
        url: '',
        name: '',
        active: false,
      },
      imgUrl: undefined,
      baseUrl: this.$Url + 'changedata',
      changeData: {
        counts: 0,
        stopIndex: 0
      }
    };
  },
  watch: {
    turnsNum(newValue) {
      if (newValue === 5) {
        clearInterval(this.timer1);
        this.timer1 = this.playDetails(this.currentSpeed * 2);
      } else if (newValue === 6) {
        clearInterval(this.timer1);
        this.timer1 = this.playDetails(this.currentSpeed * 6, true);
      }
    }
  },
  methods: {
    play() {
      if (this.changeData.counts) {
        this.start = true;
        this.timer1 = this.playDetails(this.currentSpeed);
      } else {
        this.$toast('没有机会啦！！！', { svg: '#icon-waring' });
      }
    },
    /**
     * speed 速度
     * stop 是否停止，默认为不停止
     * @return 一个定时器
     */
    playDetails(speed, stop = false) {
      return setInterval(() => {
        if (this.currentIndex === 0) {
          this.turnsNum++;// 计算圈数
        }
        const last = (this.currentIndex === 0) ? this.order[7] : this.order[this.currentIndex - 1];
        this.svgIcons[last].active = false;
        this.svgIcons[this.order[this.currentIndex]].active = true;
        // 判断是否需要停止
        if (this.currentIndex === this.changeData.stopIndex && stop) {
          this.stop();
          this.changeData.counts -= 1;
          this.award = this.svgIcons[this.order[this.currentIndex]];
          this.showToast = true;
        }
        this.currentIndex = (this.currentIndex < 7) ? this.currentIndex + 1 : 0;
      }, speed);
    },
    getChangeData() {
      this.$axios.get(this.baseUrl).then((res) => {
        if (res.data && res.data.counts > 0) {
          this.changeData = res.data;
        } else if (res.data.counts === 0) {
          this.$toast('没有机会啦！！！', { svg: '#icon-waring' });
        } else {
          this.stop();
          this.$toast('服务器繁忙，请稍后再来', { svg: '#icon-waring' });
        }
      }).catch((err) => {
        this.stop();
        console.log(err);
        this.$toast('服务器繁忙，请稍后再来', { svg: '#icon-waring' });
      });
    },
    /**
     *  数据初始化
    */
    stop() {
      clearInterval(this.timer1);
      this.turnsNum = 0;
      this.currentSpeed = this.speed;
      this.start = false;
    }
  },
  created() {
    // 获取真实可抽奖所需数据
    this.getChangeData();
    this.currentIndex = this.startNum;
    this.currentSpeed = this.speed;
    // 逆时针改变数组的的顺序
    if (!this.direction) {
      this.order = this.order.slice(0, 1).concat(this.order.slice(1).reverse());
    }
  },
  beforeDestroy() {
    clearInterval(this.timer1);
  }
};
</script>

<style lang="postcss" module>
@import "../../base/global.css";

.wrap {
  padding: 9px 18px;
  background-image: linear-gradient(180deg, #ffecb0 0%, #ffaf00 100%);
}

.title {
  margin-top: 2px;
  margin-bottom: 11px;
  font-size: 13px;
  line-height: 18px;
  color: #585858;
  & span {
    color: #f00;
  }
}

.whitewrap {
  @mixin flexbox;
  flex-direction: column;
  background-color: #fff;
  padding: 13px 30px;
  border-radius: 26px;
}

.svgContain {
  @mixin flexbox;
  position: relative;
  flex-wrap: wrap;
  padding: 9px;
  border-radius: 25px;
  background-image: linear-gradient(-180deg, #fad961 0%, #f76b1c 100%);
}

.svgwrap {
  @mixin flexbox;
  @mixin awardwrap;
  position: relative;
  flex-direction: column;
  margin: 3px;
  background-image: linear-gradient(-180deg, #fffce7 0%, #ffffff 100%);
  box-shadow: inset 0 1px 11px 0 #ffeac9;
  color: #ffad27;
  font-size: 12px;
  line-height: 15px;
}

.svgactive {
  @mixin awardwrap;
  position: absolute;
  background: linear-gradient(
    -45deg,
    rgba(255, 231, 116, 0.5) 0,
    rgba(255, 231, 116, 0.5) 9%,
    rgba(252, 208, 70, 0.5) 0,
    rgba(252, 208, 70, 0.5) 18%,
    rgba(255, 231, 116, 0.5) 0,
    rgba(255, 231, 116, 0.5) 27%,
    rgba(252, 208, 70, 0.5) 0,
    rgba(252, 208, 70, 0.5) 36%,
    rgba(255, 231, 116, 0.5) 0,
    rgba(255, 231, 116, 0.5) 45%,
    rgba(252, 208, 70, 0.5) 0,
    rgba(252, 208, 70, 0.5) 54%,
    rgba(255, 231, 116, 0.5) 0,
    rgba(255, 231, 116, 0.5) 63%,
    rgba(252, 208, 70, 0.5) 0,
    rgba(252, 208, 70, 0.5) 72%,
    rgba(255, 231, 116, 0.5) 0,
    rgba(255, 231, 116, 0.5) 81%,
    rgba(252, 208, 70, 0.5) 0,
    rgba(252, 208, 70, 0.5) 90%,
    rgba(255, 231, 116, 0.5) 0,
    rgba(255, 231, 116, 0.5) 100%
  );
}

.start {
  @mixin awardwrap;
  position: absolute;
  background-image: linear-gradient(-222deg, #fe854c 0%, #bb2a2a 100%);
  box-shadow: 0 4px 7px 0 rgba(148, 0, 0, 0.22);
}

.rstart {
  position: relative;
}

.rstart > div {
  @mixin flexbox;
  @mixin awardwrap;
  position: absolute;
  top: -3px;
  flex-direction: column;
  font-size: 16px;
  background: linear-gradient(
    -45deg,
    #ffe774 0,
    #ffe774 9%,
    #fcd046 0,
    #fcd046 18%,
    #ffe774 0,
    #ffe774 27%,
    #fcd046 0,
    #fcd046 36%,
    #ffe774 0,
    #ffe774 45%,
    #fcd046 0,
    #fcd046 54%,
    #ffe774 0,
    #ffe774 63%,
    #fcd046 0,
    #fcd046 72%,
    #ffe774 0,
    #ffe774 81%,
    #fcd046 0,
    #fcd046 90%,
    #ffe774 0%,
    #ffe774 100%
  );
  box-shadow: -4px -4px 70px 0 rgba(148, 0, 0, 0.22);
}

.icon {
  width: 52px;
  height: 52px;
  background-size: cover;
  margin-bottom: 3px;
}

.awardrecord {
  padding-top: 10px;
  font-size: 12px;
  line-height: 16px;
  color: #507daf;
}

.letpaly {
  font-family: MF-FangHei-Noncommercial-Regular;
  font-size: 15px;
  line-height: 15px;
  color: #642400;
}

.countswrap {
  position: relative;
  width: 66px;
  height: 13px;
}

.counts {
  position: absolute;
  width: 100%;
  margin-top: 5.5px;
  font-size: 20px;
  line-height: 26px;
  white-space: nowrap;
  color: #ff5b00;
  transform: scale(0.5);
  transform-origin: 0 0;
}
</style>
