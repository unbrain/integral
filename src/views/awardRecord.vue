<template>
  <div :class="$style.awardwrap">
    <ul>
      <li
        :class="$style.listwrap"
        v-for="(item, index) in awardList"
        :key="index"
      >
        <div :class="$style.leftwrap">
          <div :class="$style.imagewrap">
            <div :style="{backgroundImage: `url(${item.img})`}">
            </div>
          </div>
          <div :class="$style.imagedetails">
            <div
              :class="$style.awardname"
              v-text="item.name"
            ></div>
            <div
              :class="$style.awardtime"
              v-text="item.date"
            ></div>
          </div>
        </div>
        <div :class="[$style.rightwrap,{[$style.rightwrapget]: item.status===0, [$style.rightwrapgot]: item.status===1}]">
          {{item.status | formatStatus}}
        </div>
      </li>
    </ul>
    <div :class="$style.footer">仅记录实物中奖，积分中奖查看<a @click="">积分明细</a></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      awardList: [
        {
          img: require('@/assets/award.png'),
          name: '200积分',
          date: '2018-12-12 08:24',
          status: 0
        },
        {
          img: '',
          name: '奖品名称',
          date: '2018-12-12 08:24',
          status: 1
        },
        {
          img: require('@/assets/award.png'),
          name: '奖品名称',
          date: '2018-12-12 08:24',
          status: 2
        }
      ],
      statusMessage: ''
    };
  },
  filters: {
    formatStatus(num) {
      if (num === 2) {
        return '过期作废';
      } else if (num === 1) {
        return '已领取';
      }
      return '未领取';
    }
  }
};
</script>

<style lang="postcss" module>
@import "../base/global.css";
.awardwrap {
  padding: 0 15px;
  font-family: PingFangSC-Regular;
}

.listwrap {
  @mixin flexbox;
  padding-top: 15px;
  padding-bottom: 13px;
  justify-content: space-between;
  border-bottom: 1px solid transparent;
  border-image: svg(1px-border param(--color #e8e8e8)) 2 2 stretch;
}
.leftwrap {
  @mixin flexbox;
}

.imagewrap {
  margin-right: 9px;
  width: 64px;
  height: 64px;
  border-radius: 6px;
  background-image: linear-gradient(
    1deg,
    rgba(246, 236, 165, 0.17) 0%,
    #ffe8c0 100%
  );
  & > div {
    @mixin fullsize;
    background-size: cover;
  }
}
.imagedetails {
  & .awardname {
    font-size: 17px;
    line-height: 24px;
    color: #282f3c;
  }
  & .awardtime {
    font-size: 12px;
    line-height: 15px;
    color: #808080;
  }
}
.rightwrap {
  font-size: 14px;
  line-height: 20px;
  color: #aaaaaa;
}
.rightwrapget {
  color: #ffb132;
}
.rightwrapgot {
  color: #1aba33;
}
.footer {
  padding: 11px;
  line-height: 16px;
  text-align: center;
  font-size: 12px;
  color: #aaa;
  & a {
    color: #507daf;
  }
}
</style>
