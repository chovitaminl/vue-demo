<template>
    <transition name="slide">
        <div class="g-singer-detail"></div>
    </transition>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .g-singer-detail
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background-color:$color-background
    z-index: 100
  .slide-enter-active,.slide-leave-active
    transition: .3s all
  .slide-enter,.slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'singer'
      ])
    },
    create() {
      console.log(this.singer, ',,,,')
    }
  }
</script>

