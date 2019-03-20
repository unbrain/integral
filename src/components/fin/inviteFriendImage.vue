<template>
  <div :class="$style.image"></div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="postcss" module>
@import "../../base/global.css";
.image {
  height: 69px;
  @mixin bg "@/assets/i_banner1.png";
}
</style>
