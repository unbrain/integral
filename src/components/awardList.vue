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
                src="../assets/Group 17.png"
                alt=""
                :class="$style.star"
              >
              <div v-text="item.integral">
              </div>
            </div>
          </div>
          <div :class="$style.barwrap">
            <div :class="$style.bar">
              <div
                :class="[$style.barinner, {[$style.fullbarinner]: item.total === 5}]"
                :style="{width: `calc(100% * ${item.total} / 5)`}"
              ></div>
            </div>
            <div c-b8b8b8>
              <span
                c-org
                v-text="item.total"
              ></span>/5
            </div>
          </div>
        </div>
        <div :class="$style.listright">
          <img
            src="../assets/down.png"
            alt=""
            :class="$style.down"
          >
          <button
            :class="[$style.mybutton,$style.button, {[$style.greybutton]: item.status === 2}]"
            c-org
            w-12-17
            v-if="item.status"
          >去完成</button>
          <button
            :class="$style.getbutton"
            w-11-15
            v-else
          >领取20积分</button>
        </div>
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
          title: '标题标题标题',
          integral: '+50',
          total: 0,
          status: 0
        },
        {
          title: '标题标题标题',
          integral: '+50',
          total: 1,
          status: 1
        },
        {
          title: '标题标题标题',
          integral: '+50',
          total: 2,
          status: 2
        },
        {
          title: '标题标题标题',
          integral: '+50',
          total: 4,
          status: 1
        },
        {
          title: '标题标题标题',
          integral: '+50',
          total: 5,
          status: 1
        }
      ]
    }
  }
}
</script>

<style lang="postcss" module>
@import "../base/global.css";
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 21px 0;
  margin: 0 16px 10px 16px;
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
.fullbarinner{
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
  width: 65px;
  height: 28px;
}
.greybutton {
  color: #999 !important;
}
.greybutton::after {
  border-color: #dadada;
}
.getbutton {
  width: 65px;
  height: 28px;
  border-radius: 28px;
  background-image: linear-gradient(-66deg, #ffaf00 0%, #ff8200 100%);
  color: #fff;
}
.down {
  width: 21px;
  height: 13px;
  padding-right: 18px;
}
.listright {
  display: flex;
  align-items: center;
}
</style>
