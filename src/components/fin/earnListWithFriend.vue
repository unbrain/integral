<template>
  <div>
    <div>
      <div :class="$style.money">
        <div :class="$style.circle"></div>
        <div :class="$style.num">预计可赚{{money}}元</div>
        <div :class="$style.circle"></div>
      </div>
    </div>
    <div :class="$style.friendlist">
      <ul ref="earnList">
        <li
          v-for="(item, index) in friendDetail"
          :key="index"
          :class="$style.friendlistli"
        >
          <div :class="$style.friendlidivfirst">
            <div
              :style="{backgroundImage: `url(${item.friendImageUrl})`}"
              :class="$style.image"
            ></div>
          </div>
          <div
            v-text="item.friendName"
            :class="$style.friendlidivtwo"
          ></div>
          <div :class="$style.friendlidivthree">预计收益：{{item.friendLucky}}元</div>
          <button
            @click="showToast=true"
            :class="$style.mybutton"
          >邀请Ta</button>
        </li>
        <!-- 无限加载 -->
        <div
          ref="scroll"
          :class="$style.loadingwrap"
        >
          <svg
            :class="{[$style.iconactionaction]: fetchStatus,[$style.iconaction]:1}"
            aria-hidden="true"
            v-if="status"
          >
            <use
              xlink:href="#icon-loading"
              v-if="fetchStatus"
            ></use>
            <use
              xlink:href="#icon-error"
              v-else
            ></use>
          </svg>

          <div
            :class="$style.scrollh"
            v-else
          ></div>
          <!-- 用来撑布局 -->
        </div>
      </ul>
    </div>

    <fin-invite-toast
      v-show="showToast"
      @close="showToast=false"
    ></fin-invite-toast>
  </div>

</template>

<script>
// 邀请好友弹出的 toast
import inviteToast from '@/components/fin/inviteToast';
export default {
  components: {
    'fin-invite-toast': inviteToast,
  },
  data() {
    return {
      shouldFetch: true, // 是否应该获去
      fetchStatus: true, // 获取后的状态
      status: true, // 管理获取后图标的状态
      showToast: false,
      money: 666,
      lastt: 0, // 上一次获取是距离屏幕的高
      thist: 0, // 本次获取时距离屏幕的高
      friendDetail: [
        {
          friendImageUrl: require('@/assets/unbrain.png'),
          friendName: '用户昵称用户昵称用户昵称用户昵称',
          friendLucky: 8
        },
        {
          friendImageUrl: require('@/assets/unbrain.png'),
          friendName: '用户昵称',
          friendLucky: 8
        },
        {
          friendImageUrl: require('@/assets/unbrain.png'),
          friendName: '用户昵称',
          friendLucky: 8
        },
        {
          friendImageUrl: require('@/assets/brain.jpg'),
          friendName: '用户昵称',
          friendLucky: 8
        },
        {
          friendImageUrl: require('@/assets/brain.jpg'),
          friendName: '用户昵称',
          friendLucky: 8
        },
        {
          friendImageUrl: require('@/assets/brain.jpg'),
          friendName: '用户昵称',
          friendLucky: 8
        }
      ],
      getDate: [
        { friendImageUrl: require('@/assets/unbrain.png'), friendName: '用户昵称', friendLucky: 8 },
        { friendImageUrl: require('@/assets/unbrain.png'), friendName: '用户昵称', friendLucky: 8 },
        { friendImageUrl: require('@/assets/unbrain.png'), friendName: '用户昵称', friendLucky: 8 },
        { friendImageUrl: require('@/assets/brain.jpg'), friendName: '用户昵称', friendLucky: 8 },
        { friendImageUrl: require('@/assets/brain.jpg'), friendName: '用户昵称', friendLucky: 8 },
        { friendImageUrl: require('@/assets/brain.jpg'), friendName: '用户昵称', friendLucky: 8 },
        { friendImageUrl: require('@/assets/unbrain.png'), friendName: '用户昵称', friendLucky: 8 },
        { friendImageUrl: require('@/assets/unbrain.png'), friendName: '用户昵称', friendLucky: 8 },
        { friendImageUrl: require('@/assets/unbrain.png'), friendName: '用户昵称', friendLucky: 8 },
        { friendImageUrl: require('@/assets/brain.jpg'), friendName: '用户昵称', friendLucky: 8 },
        { friendImageUrl: require('@/assets/brain.jpg'), friendName: '用户昵称', friendLucky: 8 },
        { friendImageUrl: require('@/assets/brain.jpg'), friendName: '用户昵称', friendLucky: 8 }
      ]
    };
  },
  methods: {
    checkInView() {
      const triggers = ['scroll', 'resize'];
      const execute = () => {
        const inView = this.eleInView(this.$refs.scroll);
        this.thist = window.pageYOffset;
        if (this.shouldFetch && inView && this.thist >= this.lastt) {
          this.fetchData();
        }
        this.lastt = this.thist;
      };
      //1秒只执行一次
      this.check = this.throttle(execute, 1000);
      triggers.forEach(event => window.addEventListener(event, this.check));
    },
    fetchData() {
      this.shouldFetch = false;
      this.fetchStatus = true;
      this.status = true;
      setTimeout(() => {
        this.$axios.get('http://localhost:3000/fd').then(
          (res) => {
            if (res.status === 200) {
              this.friendDetail = this.friendDetail.concat(res.data);
              this.status = true;
            }
          },
          (fail) => {
            console.log(fail);
            this.fetchStatus = false;
            setTimeout(() => {
              this.status = false;
              window.scrollTo(0, window.pageYOffset - 48);
            }, 2000);
          });
      }, 2000);
      this.shouldFetch = true;
    },
    //设定函数多久能执行一次
    throttle(func, wait) {
      let rtn;
      let timeoutID;
      let last = 0;
      function call() {
        timeoutID = 0;
        last = +new Date();
        rtn = func();
      }
      return function throttled() {
        const delta = new Date() - last;
        if (!timeoutID) {
          if (delta >= wait) call();
          else timeoutID = setTimeout(call, wait - delta);
        }
        return rtn;
      };
    },
    // 查看该节点是否出现在视口
    eleInView(element, { offset = 0 } = {}) {
      if (element) {
        const {
          top,
          right,
          bottom,
          left,
        } = element.getBoundingClientRect();

        const intersection = {
          t: bottom,
          r: window.innerWidth - left,
          //减去 footer 的高
          b: window.innerHeight - top - 44,
          l: right
        };

        return (
          intersection.t >= (offset.top || offset) &&
          intersection.r >= (offset.right || offset) &&
          intersection.b >= (offset.bottom || offset) &&
          intersection.l >= (offset.left || offset)
        );
      }
      return null;
    },
  },
  mounted() {
    this.checkInView();
    this.lastt = window.pageYOffset;
  },
  beforeDestroy() {
    const triggers = ['scroll', 'resize'];
    triggers.forEach(event => this.$refs.scroll.removeEventListener(event, this.check));
  }
};
</script>

<style lang="postcss" module>
@import "../../base/global.css";

.money {
  @mixin flexbox;
  backface-visibility: hidden;
  padding-bottom: 5px;
}
.num {
  position: relative;
  padding-left: 8px;
  padding-right: 8px;
  background-color: white;
}
.num::after {
  content: "";
  display: block;
  position: absolute;
  top: 49%;
  right: -20px;
  z-index: -1;
  width: 162px;
  border-bottom: 1px solid transparent;
  border-image: svg(1px-border param(--color #979797)) 1 stretch;
}
.circle {
  height: 2px;
  width: 2px;
  background-color: #979797;
  border-radius: 100%;
}
.friendlist {
  & .friendlistli {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    padding: 0 17px 12px 17px;
    line-height: 16px;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    color: #585858;
    & div {
      white-space: nowrap;
      overflow: hidden;
    }
    & .friendlidivfirst {
      /* backface-visibility: hidden; */
      margin-right: 8px;
    }
    & .friendlidivtwo {
      padding-right: 18px;
      width: 72px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    & .friendlidivthree {
      padding-right: 57px;
    }
    & button{
      color: #FB802D;
    }
    & button::after{
      border-color: #FB802D;
    }
  }
  & .image {
    height: 33px;
    width: 33px;
    background-size: cover;
    border-radius: 100%;
  }
  & button {
    width: 74px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.loadingwrap {
  @mixin flexbox;
  flex-direction: column;
  padding: 12px;
  font-size: 12px;
  color: #b0b0b0;
}
.iconaction {
  @mixin flexbox;
  width: 1.5rem;
  height: 1.5rem;
}

.iconactionaction {
  animation: myRotate 0.5s linear infinite;
}
@keyframes myRotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.scrollh {
  height: 1.5rem;
}
</style>
