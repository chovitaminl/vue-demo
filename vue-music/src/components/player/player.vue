<template>
  <div class="player" v-show="playlist.length">
    <transition name="normal">
      <div class="normal-player" v-show="fullScreen"></div>
    </transition>
    <transition name="mini">
      <div class="mini-player" v-show="!fullScreen"></div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'currentIndex',
        'fullScreen',
        'playing'
      ])
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .player
    .normal-player
      position: fixed
      top: 0
      bottom: 0
      left: 0
      right: 0
      z-index: 150
      background-color: $color-background
      &.normal-enter-active,&.normal-leave-active
        transition: all 0.4s
      &.normal-enter,&.normal-leave-to
        opacity: 0
    .mini-player
      position: fixed
      left: 0
      bottom: 0
      z-index: 180
      width: 100%
      height: 60px
      background-color: $color-highlight-background
      &.min-enter-active,&.min-leave-active
        transition: all 0.4s
      &.min-enter,&.mini-leave-to
        opacity: 0
</style>
