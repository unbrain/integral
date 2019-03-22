<template>
  <div>
    <div :class="$style.wrap">
      <!-- <fin-carsouel></fin-carsouel> -->
      <!-- <test></test> -->
      <fin-head
        :head-detail="headDetail"
        @show-rule="showRuleChange"
      ></fin-head>
      <fin-top-bar
        :body-detail="bodyDetail"
        @show-rule="showRuleChange"
      ></fin-top-bar>
      <fin-fixed-footer></fin-fixed-footer>
      <fin-action-description
        v-show="showRule"
        @close="showRule = false"
      ></fin-action-description>
    </div>
  </div>
</template>

<script>
/**
 * head  头部组件
 * topBar 顶部栏切换
 * fixedFooter 固定底部栏
 * actionDescription 规则详情页弹窗
 */
import head from '@/components/fin/head';
import topBar from '@/components/fin/topBar';
import fixedFooter from '@/components/fin/fixedFooter';
import actionDescription from '@/components/fin/actionDescription';
// import carousel from '@/components/fin/carousel';
// import test from '@/components/fin/test';

export default {
  components: {
    'fin-head': head,
    'fin-top-bar': topBar,
    'fin-fixed-footer': fixedFooter,
    'fin-action-description': actionDescription,
    //  'fin-carsouel': carousel,
    //  test,
  },
  data: function () {
    return {
      showRule: false, //是否显示弹窗
      pageScrollYoffset: 0, // 保存滚动条位置
      headDetail: {
        headMsg: '立即分享赚钱',
        inviteCode: '27543222',
        headImageUrl: require('@/assets/fi_mask.png'),
        headTimerMsg: ['福利继续，邀请1！', '邀请2！', '利继续，邀请3！', '福利继，邀请4！'],
        deadLine: new Date(2019, 2, 25),
      }, // 头部所需信息
      bodyDetail: {
        limitNum: '1/30',
        balance: '1.00',
        howWithdrawTitle: '首次邀请1位老铁，30元怎么提？',
        luckyMoney: [5, 2, 5],
      } // topBar所需信息
    };
  },
  watch: {
    showRule(newVal) {
      this.getScrollTop();
      if (newVal === true) {
        const cssStr = 'overflow-y: hidden; height: 100vh;';
        document.body.style.cssText = cssStr;
      } else {
        const cssStr = 'overflow-y: auto; height: auto;';
        document.body.style.cssText = cssStr;
      }
      this.$root.$el.pageYOffset = this.pageScrollYoffset;
    }
  },
  methods: {
    showRuleChange() {
      this.showRule = true;
    },
    getScrollTop() { // 获取滚动条位置
      this.pageScrollYoffset = window.pageYOffset;
    }
  },
  created() {
    // this.$axios.get('http://127.0.0.1:3000/bodyDetail').then((response) => {
    //   this.bodyDetail = response.data;
    // });
  }
};
</script>

<style lang="postcss" module>
li:active {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

button:active {
  transform: scale(1.05);
  outline: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.wrap {
  width: 100%;
  margin-bottom: 44px;
  position: relative;
  padding: constant(safe-area-inset-top) constant(safe-area-inset-right)
    constant(safe-area-inset-bottom) constant(safe-area-inset-left);
}
</style>
