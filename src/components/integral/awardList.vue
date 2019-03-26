<template>
  <div>
    <div
      :class="$style.top"
      w-14-20
    >
      <div></div>限时福利
    </div>
    <ul>
      <li
        :class="$style.list"
        v-for="(item ,index) in awardDetails"
        :key="index"
      >
        <div :class="[$style.listfirst, {[$style.listfirstlast]: index === awardDetails.length-1 && !item.show}]">
          <div>
            <div :class="$style.titlewrap">
              <div
                w-16-22
                v-text="item.title"
              ></div>
              <div
                w-14-20
                :class="$style.titledetails"
                c-org
              >
                <img
                  src="@/assets/Group 17.png"
                  alt=""
                  :class="$style.star"
                >
                <div v-text="'+'+item.integral">
                </div>
              </div>
            </div>
            <div
              :class="$style.barwrap"
              v-show="item.all"
            >
              <div :class="$style.bar">
                <div
                  :class="[$style.barinner, {[$style.fullbarinner]: item.total === item.all}]"
                  :style="{width: `calc(100% * ${item.total} / ${item.all})`}"
                ></div>
              </div>
              <div
                c-b8b8b8
                w-11-11
              >
                <span
                  c-org
                  v-text="item.total"
                ></span>/{{item.all}}
              </div>
            </div>
          </div>
          <div :class="$style.listright">
            <img
              src="@/assets/down.png"
              alt=""
              :class="[$style.down,{[$style.up]: item.show === true}]"
              @click="down(index)"
            >
            <button
              :class="[$style.mybutton,$style.button, {[$style.greybutton]: item.total-item.all===0}]"
              c-org
              w-12-17
              v-if="item.total !== item.all || item.status !== 0"
              :disabled=" item.total-item.all===0"
              @click="plus(index)"
            >
              <div v-if="item.total < item.all">
                去完成
              </div>
              <div v-else-if="item.status === 3">去邀请</div>
              <div v-else-if="item.total === item.all">已领取</div>

            </button>
            <button
              :class="$style.getbutton"
              v-else
              @click="changeStatus(index)"
            >
              <div :class="$style.getbuttoncontext">领取{{item.integral}}积分</div>
            </button>
          </div>
        </div>
        <transition name="listc">
          <div
            :class="$style.listsec"
            c-999
            w-14-20
            v-if="item.show"
          >
            暂未开放，感谢体验
          </div>
        </transition>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      awardDetails: [
        {
          title: '唤醒老铁',
          integral: '300',
          status: 3,
          show: false,
        },
        {
          title: '刷微博',
          integral: '30',
          total: 0,
          all: 3,
          status: 0,
          show: false,
        },
        {
          title: '点赞',
          integral: '50',
          total: 1,
          all: 10,
          status: 0,
          show: false
        },
        {
          title: '关注',
          integral: '20',
          total: 5,
          all: 5,
          status: 0,
          show: false
        },
        // {
        //   title: '标题标题标题',
        //   integral: '50',
        //   total: 4,
        //   all: 10,
        //   status: 0,
        //   show: false
        // },
        // {
        //   title: '标题标题标题',
        //   integral: '50',
        //   total: 5,
        //   all: 10,
        //   status: 0,
        //   show: false
        // }
      ]
    }
  },
  methods: {
    down(index) {
      // this.$toast('暂未开放，感谢体验', { svg: "#icon-warning" });
      this.awardDetails[index].show = !this.awardDetails[index].show;
    },
    plus(index) {
      if (this.awardDetails[index].status === 3) {
        this.$router.push('/main');
      } else {
        this.awardDetails[index].total = (this.awardDetails[index].total >= this.awardDetails[index].all) ? this.awardDetails[index].all : this.awardDetails[index].total + 1;
      }
    },
    changeStatus(index) {
      this.awardDetails[index].status = 1;
    },
  }
}
</script>

<style lang="postcss" module>
@import "../../base/global.css";

.top {
  display: flex;
  align-items: center;
  color: #000;
  & div {
    width: 3px;
    height: 14px;
    margin-right: 5px;
    margin-left: 16px;
    border-radius: 10px;
    background-color: #ff8200;
    color: #363636;
  }
}
.list {
}

.listfirst {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 21px 0;
  margin: 0 16px 10px 16px;
  border-bottom: 1px solid transparent;
  border-image: svg(1px-border param(--color #e3e3e3)) 1 stretch;
}
.listfirstlast {
  border-bottom: none;
}
.listsec {
  margin: 0 16px 10px 16px;
  padding: 10px 0 21px 0;
  border-bottom: 1px solid transparent;
  border-image: svg(1px-border param(--color #e3e3e3)) 1 stretch;
}

.titlewrap {
  @mixin flexbox;
  margin-bottom: 5px;
}
.titledetails {
  @mixin flexbox;
}
.star {
  width: 16px;
  height: 16px;
  margin-left: 4px;
}
.barwrap {
  @mixin flexbox;
  justify-content: flex-start;
}
.barinner {
  background-color: #ff8200;
  height: 100%;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.fullbarinner {
  border-radius: 6px;
}
.bar {
  width: 43px;
  height: 6px;
  border-radius: 6px;
  background-color: #ededed;
  margin-right: 6px;
}
.button {
  @mixin flexbox;
  width: 65px;
  height: 28px;
  line-height: 28px !important;
}
.button::after {
  border-color: #ff8200;
}
.greybutton {
  color: #999 !important;
}
.greybutton::after {
  border-color: #dadada;
}
.getbutton {
  position: relative;
  width: 65px;
  height: 28px;
  border-radius: 28px;
  background-size: 100%;
  background-image: linear-gradient(-66deg, #ffaf00 0%, #ff8200 100%);
  color: #fff;
}
.getbuttoncontext {
  display: block;
  font-size: 22px;
  white-space: nowrap;
  transform: scale(0.5);
  transform-origin: 4px;
}
.down {
  width: 21px;
  height: 13px;
  margin-right: 18px;
  cursor: pointer;
}
.up {
  transform: rotate(180deg);
}
.listright {
  display: flex;
  align-items: center;
}
</style>
