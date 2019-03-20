<template>
  <div :class="$style.wrapcontain">
    <svg
      :class="$style.icon"
      aria-hidden="true"
      @click="move(-1)"
    >
      <use xlink:href="#icon-left"></use>
    </svg>
    <svg
      :class="$style.icon"
      aria-hidden="true"
      @click="move(1)"
    >
      <use xlink:href="#icon-right"></use>
    </svg>
    <ul
      :class="{[$style.wrap]:1,[$style.move]:!normal}"
      :style="[change,move]"
    >
      <li><img
          :src="urls[urls.length-1]"
          alt=""
        ></li>
      <li
        v-for="(item, index) in urls"
        :key="index"
      ><img
          :src="item"
          alt=""
        ></li>
      <li><img
          :src="urls[0]"
          alt=""
        ></li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      urls: [
        require('@/assets/2.png'),
        require('@/assets/3.png'),
        require('@/assets/4.jpg'),
        require('@/assets/5.png'),
        require('@/assets/6.jpg')
      ],
      currIndex: 1,
      distance: -375,
      normal: true,
      long: 0,
      transitionEnd: true
    };
  },
  methods: {
    move(moveNum) {
      if (!this.transitionEnd) return;
      this.transitionEnd = false;
      this.currIndex += moveNum;
      this.long = (this.currIndex * 375) * -1;
      this.run(moveNum);
    },
    run(moveNum) {
      const tt = setInterval(() => {
        if ((moveNum === 1 && this.long < this.distance &&
          this.distance > this.distance * this.urls.length)
          || (moveNum === -1 && this.long > this.distance && this.distance < 0)) {
          this.distance -= (15) * moveNum;
        } else {
          this.transitionEnd = true;
          clearInterval(tt);
          this.distance = this.long;
          if (this.long < -1875) {
            this.distance = -375;
            this.currIndex = 1;
          }
          if (this.long > -375) {
            this.distance = -1875;
            this.currIndex = this.urls.length;
          }
        }
      }, 25);
    },
    format() {
      setTimeout(() => {
        this.normal = false;
        this.currIndex = (this.currIndex < 1) ? this.urls.length : 1;
        this.distance = (this.currIndex * 375) * -1;
        setTimeout(() => {
          this.normal = true;
        }, 0);
      }, 1000);
    },
  },
  computed: {
    change() {
      return {
        transform: `translate3d(${this.distance}px, 0, 0)`
      };
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.distance -= window.innerWidth;
      });
    });
  }
};
</script>

<style lang="postcss" module>
.wrapcontain {
  position: relative;
  overflow: hidden;
  height: 200px;
  width: 375px;
}
.wrap {
  display: flex;
  position: absolute;
  & img {
    height: 200px;
    width: 375px;
  }
}

.icon {
  width: 16px;
  height: 16px;
  vertical-align: -0.15em;
  fill: #d4d4d4;
  overflow: hidden;
}
.move {
  transition: 1s;
}
.staicmove {
  transition: 1s;
}
</style>
