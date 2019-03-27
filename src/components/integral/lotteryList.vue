<template>
  <div>
    <check-in
      v-show="checkInShow"
      :integral="currentIntegral"
      @close="checkInShow = false"
    ></check-in>
    <turn-table
      v-show="turnTableShow"
      @close="turnTableShow = false"
    ></turn-table>
    <ul :class="$style.wrap">
      <li
        v-for="(item, index) in lotteryDetails"
        :key="index"
        :class="$style.liwrap"
      >
        <div
          :class="[$style.circle,{[$style.grey]: item.status === 0,[$style.pink]: item.status=== 2}]"
          w-11-11
        >
          <div
            v-html="item.value"
            v-if="item.value"
            :class="$style.value"
          ></div>
          <div v-else>
            <img
              src="@/assets/pan04.png"
              alt=""
              @click="showCheck(index)"
            >
          </div>
          <div
            :class="[$style.colorbar,{[$style.missbar]: item.status === 2}]"
            v-show="index !== 0"
          ></div>
        </div>
        <div :class="[$style.datewrap,{[$style.dateorg]: item.status === 1,[$style.dategrey]: item.status === 0}]">
          <div
            v-text="item.date"
            :class="$style.date"
          ></div>
        </div>
      </li>
    </ul>
    <div :class="$style.footer">
      <div
        :class="$style.footercontext"
        v-text="slogan"
      ></div>
    </div>
  </div>
</template>

<script>
import checkIn from '@/components/integral/checkIn';
import turnTable from '@/components/integral/turnTable';
export default {
  components: {
    'check-in': checkIn,
    'turn-table': turnTable
  },
  data() {
    return {
      slogan: '连续签到7天即可转盘抽奖,每日所得任务积分记得领取,每日24:00会过期哦',
      checkInShow: false,
      turnTableShow: false,
      currentIntegral: '',
      lotteryDetails: [
        {
          value: '已领<div>+20</div>',
          date: '8月23日',
          status: 1
        },
        {
          value: '+20',
          date: '8月24日',
          status: 0
        },
        {
          value: '已领<div>+20</div>',
          date: '8月25日',
          status: 1
        },
        {
          value: '+20',
          date: '8月26日',
          status: 2
        },
        {
          value: '+50',
          date: '8月27日',
          status: 2
        },
        {
          value: '+20',
          date: '8月28日',
          status: 2
        },
        {
          value: '',
          date: '8月29日',
          status: 2
        },
      ]
    }
  },
  methods: {
    showCheck(index) {
      if (this.lotteryDetails[index].value === '') {
        this.turnTableShow = true;
      } else if (this.lotteryDetails[index].status === 2) {
        this.currentIntegral = this.lotteryDetails[index].value;
        this.checkInShow = true;
        this.lotteryDetails[index].value = '已领<div>' + this.lotteryDetails[index].value + '</div>'
        this.lotteryDetails[index].status = 1;
      }
    },
  },
  mounted() {
    this.showCheck(3);
  }
}
</script>

<style lang="postcss" module>
@import "../../base/global.css";
.wrap {
  @mixin flexbox;
  justify-content: space-around;
  width: 100vw;
  & img {
    width: 40px;
    height: 40px;
  }
}
.liwrap {
  @mixin flexbox;
  align-items: flex-start;
  flex-direction: column;
  color: #636363;
}
.circle {
  @mixin flexbox;
  position: relative;
  margin: 5px 0;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background-image: linear-gradient(-132deg, #fbe438 0%, #ff9925 100%);
  color: #fff;
}
.grey {
  background-image: none;
  background-color: #f5f5f5;
  color: #dedede;
}
.pink {
  background-image: none;
  background-color: #fff8e6;
  color: #ff8200;
}
.datewrap {
  position: relative;
  height: 14px;
}
.date {
  @mixin halffontsize;
  font-size: 20px;
  line-height: 28px;
}
.dateorg {
  color: #ff8200;
}
.dategrey {
  color: #b6b6b6;
}
.footer {
  position: relative;
  color: #999;
  display: inline-block;
  height: 14px;
  padding: 15px 0 13px 27px;
}
.footer::before {
  position: absolute;
  display: block;
  content: "";
  width: 3px;
  height: 3px;
  background-color: #f4cca4;
  border-radius: 100%;
  left: 20px;
  top: 50%;
}
.footercontext {
  @mixin halffontsize;
  font-size: 20px;
  line-height: 28px;
}
.value {
  font-weight: 600;
  & > div {
    margin-top: 2px;
  }
}
.colorbar {
  position: absolute;
  z-index: -1;
  width: 40px;
  height: 4px;
  background-image: linear-gradient(132deg, #fbe438 0%, #ff9925 100%);
  top: 50%;
  right: 100%;
  transform: translateY(-50%);
}
.missbar {
  background-image: none;
  background-color: #fff8e6;
}
</style>
