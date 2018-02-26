<template>
  <div class="g-music-list">
    <div class="back"
         @click="goBack"
    >
      <i class="icon-back"></i>
    </div>
    <h1 class="g-title" v-html="title"></h1>
    <div class="g-bg-image"
         :style="bgStyle"
         ref="bgImage"
    >
      <div class="play-wrapper" ref="playBtn">
        <div class="play" @click="random">
          <i class="icon-play"></i>
          <span class="text">随机播放全部</span>
        </div>
      </div>
      <div class="filter" ref="filter"></div>
    </div>
    <div class="bg-layer" ref="bgLayer"></div>
    <scroll class="g-list"
            @scroll="scroll"
            :probe-type="probeType"
            :listen-scroll="listenScroll"
            :data="songs"
            ref="songList"
    >
      <div class="g-singer-list">
        <song-list @select="selectItem"
                   :songs="songs"></song-list>
      </div>
      <div class="loading-container" v-show="!this.songs.length">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>
<script type="text/ecmascript-6">
  import scroll from 'base/scroll/scroll'
  import songList from 'base/song-list/song-list'
  import loading from 'base/loading/loading'
  import { prefixStyle } from 'common/js/dom'
  import { mapActions } from 'vuex'
  import { playlistMixin } from 'common/js/mixin'

  const RESERVED_HEIGHT = 40
  const transform = prefixStyle('transform')
  const backdrop = prefixStyle('backdrop-filter')
  export default {
    mixins: [playlistMixin],
    components: {
      scroll,
      songList,
      loading
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      songs: {
        type: Array,
        default: []
      },
      bgImage: {
        type: String,
        default: 'http://www.twicetech.top/wp-content/uploads/2017/09/missing.png'
      }
    },
    data () {
      return {
        scrollY: 0
      }
    },
    computed: {
      bgStyle () {
        return `background-image:url(${this.bgImage})`
      }
    },
    watch: {
      scrollY (newY) {
        let transformY = Math.max(this.minTranslateY, newY)
        let zIndex = 0
        let scale = 1
        let blur = 0
        const percent = Math.abs(newY / this.imageHeight)
        this.$refs.bgLayer.style[transform] = `translate3d(0, ${transformY}px, 0)`
        this.$refs.filter.style[backdrop] = `blur(${blur}px)`
        if (newY > 0) {
          scale = 1 + percent
          zIndex = 10
        } else {
          blur = Math.min(20, percent + 20)
        }
        if (newY < transformY) {
          zIndex = 10
          this.$refs.bgImage.style.paddingTop = 0
          this.$refs.bgImage.style.height = `${RESERVED_HEIGHT}px`
          this.$refs.playBtn.style.display = 'none'
        } else {
          this.$refs.bgImage.style.paddingTop = '70%'
          this.$refs.bgImage.style.height = 0
          this.$refs.playBtn.style.display = ''
        }
        this.$refs.bgImage.style.zIndex = zIndex
        this.$refs.bgImage.style[transform] = `scale(${scale})`
      }
    },
    methods: {
      handlePlaylist (playlist) {
        const bottom = playlist.length > 0 ? '60px' : ''
        this.$refs.songList.$el.style.bottom = bottom
        this.$refs.songList.refresh()
      },
      random () {
        this.randomPlay({
          list: this.songs
        })
      },
      goBack () {
        this.$router.back()
      },
      scroll (pos) {
        this.scrollY = pos.y
      },
      selectItem (item, index) {
        console.log('selectItem', item, index)
        this.selectPlay({
          list: this.songs,
          index
        })
      },
      ...mapActions([
        'selectPlay',
        'randomPlay'
      ])
    },
    created () {
      this.probeType = 3
      this.listenScroll = true
    },
    mounted () {
      this.imageHeight = this.$refs.bgImage.clientHeight
      this.minTranslateY = -this.imageHeight + RESERVED_HEIGHT
      this.$refs.songList.$el.style.top = `${this.imageHeight}px`
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped="true">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .g-music-list
    position: fixed
    z-index: 100
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: $color-background
    .back
      position absolute
      top: 0
      left: 6px
      z-index: 50
      .icon-back
        display: block
        padding: 10px
        font-size: $font-size-large-x
        color: $color-theme
    .g-title
      position: absolute
      top: 0
      left: 0
      right: 0
      z-index: 40
      no-wrap()
      padding-left: 10%
      text-align: center
      line-height: 40px
      font-size: $font-size-large
      color: $color-text
    .g-bg-image
      position: relative
      width: 100%
      height: 0
      padding-top: 70%
      transform-origin: top
      background-size: cover
      .play-wrapper
        position: absolute
        bottom: 20px
        z-index: 50
        width: 100%
        .play
          margin: 0 auto
          padding: 7px 0
          box-sizing: border-box
          border: 1px solid $color-theme
          border-radius: 100px
          width: 135px
          text-align: center
          font-size: 0
          color: $color-theme
          .icon-play, .text
            display: inline-block
            vertical-align: middle
          .icon-play
            margin-right: 6px
            font-size: $font-size-medium-x
          .text
            font-size: $font-size-small
      .filter
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: rgba(7, 17, 27, 0.4)
    .bg-layer
      position: relative
      height: 100%
      background-color: $color-background
    .g-list
      position: fixed
      top: 0
      bottom: 0
      width: 100%
      .g-singer-list
        margin: 20px 0
        padding: 0 30px
      .loading-container
        position: absolute
        width: 100%
        top: 20%
        transform: translateY(-50%)
</style>
