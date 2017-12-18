<template>
  <div class="g-recommend">
    <div class="g-slider">
      <slide v-if="recommends.length">
        <div class="text-center" v-for="slider in recommends">
          <a :href="slider.linkUrl" :key="slider.id">
            <img :src="slider.picUrl" alt="">
          </a>
        </div>
      </slide>
    </div>
    <div class="g-recommend-list">
      <h1 class="g-list-title s-list-title text-center">热门歌单推荐</h1>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Slide from 'base/slide/slide'
  import { getRecommend } from 'api/recommend'
  import { ERR_OK } from 'api/config'

  export default {
    components: {
      Slide
    },
    data () {
      return {
        recommends: []
      }
    },
    created () {
      this._getRecommend()
    },
    methods: {
      _getRecommend () {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
          }
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .g-recommend
    width: 100%
    .g-slide
      position: relative
      width: 100%
      overflow: hidden
    .g-recommend-list
      .g-list-title
        s-height(65px)
        &.s-list-title
          font-size: $font-size-medium
          color: $color-theme
</style>
