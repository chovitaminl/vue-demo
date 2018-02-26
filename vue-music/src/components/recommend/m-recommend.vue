<template>
  <div class="g-recommend" ref="recommend">
    <scroll ref="scroll" class="g-recommend-content" :data="dissList">
      <div>
        <div class="g-slider" v-if="recommends.length">
          <slider>
            <div class="text-center" v-for="(slider,index) in recommends" :key="index">
              <a :href="slider.linkUrl" :key="slider.id">
                <img class="needsclick" @load="loadImage" :src="slider.picUrl" alt=""/>
              </a>
            </div>
          </slider>
        </div>
        <div class="g-recommend-list">
          <h1 class="g-list-title s-list-title text-center">热门歌单推荐</h1>
          <div class="g-item g-flex" 
              v-for="(item, index) in dissList" 
              :key="index"
              @click="selectRecommend(item)"
          >
            <img class="g-icon" v-lazy="item.imgurl" alt=""/>
            <div class="g-text g-flex">
              <div class="name" v-html="item.creator.name"></div>
              <div class="desc" v-html="item.dissname"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="g-loading">
        <loading v-show="!dissList.length"></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import Slider from 'base/slide/slide'
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  import { getRecommend, getDissList } from 'api/recommend'
  import { ERR_OK } from 'api/config'
  import { playlistMixin } from 'common/js/mixin'
  import { mapMutations } from 'vuex'

  export default {
    mixins: [playlistMixin],
    components: {
      Slider,
      Scroll,
      Loading
    },
    data () {
      return {
        recommends: [],
        dissList: []
      }
    },
    created () {
      this._getRecommend()
      this._getDissList()
    },
    methods: {
      ...mapMutations({
        setDisc: 'SET_DISC'
      }),
      handlePlaylist (playlist) {
        const bottom = playlist.length > 0 ? '60px' : ''
        this.$refs.recommend.style.bottom = bottom
        this.$refs.scroll.refresh()
      },
      selectRecommend (diss) {
        this.$router.push({
          path: `/recommend/${diss.dissid}`
        })
        this.setDisc(diss)
      },
      _getRecommend () {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
          }
        })
      },
      _getDissList () {
        getDissList().then((res) => {
          if (res.code === ERR_OK) {
            this.dissList = res.data.list
          }
        })
      },
      loadImage () {
        if (!this.loaChecker) {
          this.$refs.scroll.refresh()
          this.loaChecker = true
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .g-recommend
    position: fixed
    width: 100%
    top: 90px
    bottom: 0
    .g-recommend-content
      height: 100%
      overflow: hidden;
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
        .g-item
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px
          .g-icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .g-text
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .g-loading
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>