<template>
  <div>
    <ul :class="$style.wrap">
      <li
        v-for="(item, index) in lotteryDetails"
        :key="index"
        :class="$style.liwrap"
      >
        <div
          :class="$style.circle"
          w-11-11
        >
          <div v-html="item.value"></div>
        </div>
        <div
          v-text="item.date"
          w-10-14
        ></div>
      </li>
    </ul>
    <div :class="[$style.footer]"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lotteryDetails: [
        {
          value: '已领<div>+20</div>',
          date: '8月23日'
        },
        {
          value: '已领<div>+20</div>',
          date: '8月23日'
        },
        {
          value: '已领<div>+20</div>',
          date: '8月23日'
        },
        {
          value: '已领<div>+20</div>',
          date: '8月23日'
        },
        {
          value: '已领<div>+20</div>',
          date: '8月23日'
        },
        {
          value: '已领<div>+20</div>',
          date: '8月23日'
        },
        {
          value: '已领<div>+20</div>',
          date: '8月23日'
        },
      ]
    }
  }
}
</script>

<style lang="postcss" module>
@import "../base/global.css";
.wrap {
  @mixin flexbox;
  justify-content: space-around;
  width: 100vw;
}
.liwrap {
  @mixin flexbox;
  flex-direction: column;
  color: #636363;
}
.circle {
  @mixin flexbox;
  margin: 5px 0;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background-image: linear-gradient(-132deg, #fbe438 0%, #ff9925 100%);
  color: #fff;
}
.footer {
  position: relative;
  color: #999;
  display: inline-block;
  height: 14px;
  padding: 15px 0 13px 27px;
}
/* .footer {
  position: relative;
  padding: 15px 0 13px 27px;
  color: #999;
  font-size: 10px;
  line-height: 14px;
} */
.footer::after {
  position: absolute;
  display: block;
  content: "连续签到7天即可转盘抽奖,每日所得任务积分记得领取,每日24:00会过期哦";
  white-space: nowrap;
  font-size: 20px;
  line-height: 28px;
  transform: scale(0.5);
  transform-origin: 0 0;
}
</style>
