<template>
  <div
    class="carousel-wrap"
    ref="wrap"
  >
    <div class="wrap">
      <div
        ref="text"
        :style="change"
        :class="{left:!direction}"
      >
        <div
          v-text="text"
          v-show="!direction"
        ></div>
        <div v-show="direction">
          <transition-group
            name="list"
            tag="div"
          >
            <div
              class="lists"
              v-for="(item) in currArr"
              :key="item"
              v-text="item"
              mode="out-in"
            ></div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 宽度未设置
 * 需要传入的数据
 * headTimerMsg 滚动的数据以数组的形式传入
 * direction 方向，默认 false，false 水平滚播，true 垂直滚播
 * speed 速度，默认为 5，数值越大速度越快
 */
export default {
  props: {
    headTimerMsg: {
      type: Array,
      default: []
    },
    direction: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 5
    }
  },
  data: function () {
    return {
      timer: '',
      text: '',
      moveX: 0, //水平移动距离
      moveY: 0, //处置移动距离
      cw: 0, //当前宽
      ch: 0, //当前高
      wcw: 0, //包裹器宽
      wch: 0, //包裹器高
      currIndex: 0,
      currArr: [],
    };
  },
  methods: {
    autoPlay() {
      if (!this.direction) { //水平逻辑
        this.timer = setInterval(() => {
          this.moveX = (-this.moveX >= (this.cw / 2)) ?
            0 : this.moveX - this.wcw / this.cw * this.speed;
        }, 30);
      } else {
        // this.timer = setInterval(() => {
        //   this.moveY = (-this.moveY >= (this.ch - this.wch)) ?
        //     0 : this.moveY - this.wch / this.ch * this.speed;
        //   if (Math.floor(this.moveY) % this.wch === 0 && this.moveY !== 0) {
        //     clearInterval(this.timer);
        //     this.moveY = Math.floor(this.moveY);
        //     setTimeout(() => {
        //       this.autoPlay();
        //     }, 1000);
        //   }
        // }, 30);
        this.timer = setInterval(() => { //垂直逻辑
          // this.list.shift()
          // this.list.push(this.next++)
          const a = this.currArr.shift();
          setTimeout(() => {
            this.currArr.push(a);
          }, 1000);
          // this.currIndex = (this.currIndex < this.headTimerMsg.length - 1)
          //   ? this.currIndex + 1 : 0;
        }, 2000);
      }
    }
  },
  computed: {
    change() { //水平改变样式并返回给 style
      return {
        transform: `translate3d(${this.moveX}px, ${this.moveY}px, 0)`
      };
    },
  },
  created() {
    if (!this.direction) {
      for (let i = 0; i < this.headTimerMsg.length; i++) {
        this.text += ' ' + this.headTimerMsg[i];
      }
      this.text += this.text;
    } else {
      this.currArr = this.headTimerMsg;
    }
    // 获取宽高
    this.$nextTick(() => {
      this.wcw = this.$refs.wrap.clientWidth;
      this.wch = this.$refs.wrap.clientHeight;
      this.cw = this.$refs.text.clientWidth;
      this.ch = this.$refs.text.clientHeight;
      this.autoPlay();
    });
  },
  destroyed() {
    clearInterval(this.timer);
  }
};
</script>

<style>
.carousel-wrap {
  display: block;
  width: 100%;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
}

.wrap > div {
  color: #a05220;
  display: inline-block;
  line-height: 18px;
  width: auto;
}

.left {
  white-space: nowrap;
}
.lists {
  width: 154px;
  transition: 2s ease;
}

.list-enter {
  transform: translateY(100%);
}
.list-leave-to {
  transform: translateY(-100%);
}

.list-leave-active {
  position: absolute;
}
</style>
