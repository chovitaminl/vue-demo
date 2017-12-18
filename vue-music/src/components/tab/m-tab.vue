<template>
<div class="g-tab g-flex">
  <router-link tag="div" to="/recommend" class="g-flex-item g-tab-item s-tab-item text-center"><span class="tab-link">推荐</span></router-link>
  <router-link tag="div" to="/singer" class="g-flex-item g-tab-item s-tab-item text-center"><span class="tab-link">歌手</span></router-link>
  <router-link tag="div" to="/rank" class="g-flex-item g-tab-item s-tab-item text-center"><span class="tab-link">排名</span></router-link>
  <router-link tag="div" to="/search" class="g-flex-item g-tab-item s-tab-item text-center"><span class="tab-link">搜索</span></router-link>
</div>
</template>
<script type="text/ecmascript-6">
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl';
.g-tab
  height: 40px;
  line-height : 40px;
  .g-tab-item
    &.s-tab-item
      color:#898989;
      .tab-link
        display :inline-block;
        height :inherit;
        font-size :$font-size-medium-x;
        font-weight:600;
    &.router-link-exact-active
      color:$color-theme;
      .tab-link
        border-bottom:2px inset $color-theme;
</style>
