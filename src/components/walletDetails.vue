<template>
  <div :class="$style.wrap">
    <div
      w-14-20
      :class="$style.detailstitle"
    >
      <div>
        <div :class="$style.line"></div>
        <div>积分明细</div>
      </div>
      <div>
        <svg
          :class="$style.icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-question"></use>
        </svg>
        <div :class="$style.question">对此有疑问</div>
      </div>
    </div>
    <ul>
      <li
        :class="$style.list"
        v-for="(item, index) in listDetails"
        :key="index"
      >
        <div>
          <div
            w-16-22
            v-text="item.action"
          ></div>
          <div
            w-12-16
            c-999
            v-text="item.time"
          ></div>
        </div>
        <div>
          <div
            :class="$style.listend"
            w-16-19
            v-text="item.change"
          ></div>
          <div
            :class="$style.isdraw"
            w-12-16
            v-text="item.status"
          ></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listDetails: [
        {
          action: '签到奖励',
          time: '2018-01-20 14:12:33',
          change: '200积分',
          status: '审核通过'
        },
        {
          action: '任务奖励',
          time: '2018-01-20 14:12:33',
          change: '+3000积分',
          status: '审核未通过'
        },
        {
          action: '签到奖励',
          time: '2018-01-20 14:12:33',
          change: '200积分',
          status: '审核通过'
        },
        {
          action: '任务奖励',
          time: '2018-01-20 14:12:33',
          change: '+3000积分',
          status: '审核未通过'
        }
      ]
    }
  }
}
</script>

<style lang="postcss" module>
@import "../base/global.css";
.wrap {
}
.detailstitle {
  @mixin flexbox;
  justify-content: space-between;
  padding: 14px 0 10px 0;
  margin: 0 14px;
  border-bottom: 1px solid transparent;
  border-image: svg(1px-border param(--color #e6e6e6)) 1 stretch;
  color: #697480;
  & .line {
    margin-right: 6px;
    width: 3px;
    height: 12px;
    border-radius: 3px;
    background-color: #ff6e00;
  }
  & > div {
    display: flex;
    align-items: center;
  }
}
.list {
  @mixin flexbox;
  justify-content: space-between;
  margin: 0 14px;
  padding: 11px 0;
  border-bottom: 1px solid transparent;
  border-image: svg(1px-border param(--color #e6e6e6)) 1 stretch;
  color: #333;
}
.listend {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2px;
}
.isdraw {
  color: #1aba33;
}

.icon {
  width: 13px;
  height: 13px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  fill: #507daf;
}

.question {
  color: #507daf;
}
</style>
