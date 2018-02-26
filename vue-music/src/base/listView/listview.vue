<template>
  <scroll class="list-view"
          :data="data"
          :probeType="probeType"
          ref="listView"
          :listenScroll="listenScroll"
          @scroll="scroll"
  >
    <ul>
      <li class="list-group"
          v-for="(group, index) in data"
          :key="index"
          ref="listGroup"
      >
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li class="list-group-item g-flex"
              v-for="(singer, index) in group.items"
              :key="index"
              @click="selectSinger(singer)"
          >
            <img v-lazy="singer.avatar" alt="" class="avatar">
            <span class="name">{{singer.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-shortcut"
          @touchstart="onShortcutTouchStart"
          @touchmove.stop.prevent="onShortcutTouchMove"
    >
      <ul>
        <li v-for="(item,index) in shortcutList"
            class="list-shortcut-item"
            :class="{'current' : currentIndex === index}"
            :key="index"
            :data-index="index"
            ref="listShortcut(item)"
        >{{item}}</li>
      </ul>
    </div>
    <div class="fixedTop" v-show="fixedTitle" ref="fixedTop">
      <h1 class="title">{{fixedTitle}}</h1>
    </div>
    <div class="g-loading" v-show="!data.length">
      <loading></loading>
    </div>
  </scroll>
</template>
<script type="text/ecmascript-6">
  import scroll from 'base/scroll/scroll'
  import loading from 'base/loading/loading'
  import { getData } from 'common/js/dom.js'

  const SHORTCUT_HEIGHT = 18
  const ANCHOR_HEIGHT = 30
  export default {
    created () {
      this.touch = {}
      this.listHeight = []
      this.probeType = 3
      this.listenScroll = true
    },
    components: {
      scroll,
      loading
    },
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    computed: {
      shortcutList () {
        return this.data.map(group => {
          return group.title.substr(0, 1)
        })
      },
      fixedTitle () {
        if (this.scrollY > 0) {
          return ''
        }
        return (this.data[this.currentIndex] ? this.data[this.currentIndex].title : '')
      }
    },
    data () {
      return {
        scrollY: -1,
        currentIndex: 0,
        diff: -1
      }
    },
    methods: {
      refresh () {
        this.$refs.listView.refresh()
      },
      selectSinger (singer) {
        this.$emit('select', singer)
      },
      onShortcutTouchStart (e) {
        let anchorIndex = getData(e.target, 'index')
        let firstTouch = e.touches[0]
        this.touch.y1 = firstTouch.pageY
        this.touch.anchorIndex = anchorIndex

        this._scrollTo(anchorIndex)
      },
      onShortcutTouchMove (e) {
        let firstTouch = e.touches[0]
        this.touch.y2 = firstTouch.pageY
        let delta = (this.touch.y2 - this.touch.y1) / SHORTCUT_HEIGHT | 0
        let anchorIndex = parseInt(this.touch.anchorIndex) + delta
        this._scrollTo(anchorIndex)
      },
      _scrollTo (index) {
        if (!index && index !== 0) {
          return
        }
        if (index < 0) {
          index = 0
        } else if (index > this.listHeight.length - 2) {
          index = this.listHeight.length - 2
        }
        this.scrollY = -this.listHeight[index]
        this.$refs.listView.scrollToElement(this.$refs.listGroup[index], 0)
      },
      scroll (pos) {
        this.scrollY = pos.y
      },
      _calculateHeight () {
        this.listHeight = []
        let listGroup = this.$refs.listGroup
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < listGroup.length; i++) {
          let item = listGroup[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
      }
    },
    watch: {
      data () {
        setTimeout(() => {
          this._calculateHeight()
        }, 20)
      },
      scrollY (newY) {
        let listHeight = this.listHeight
        if (newY > 0) {
          this.currentIndex = 0
          return
        }
        for (let i = 0; i < listHeight.length - 1; i++) {
          let height1 = listHeight[i]
          let height2 = listHeight[i + 1]
          if (-newY >= height1 && -newY < height2) {
            this.currentIndex = i
            this.diff = height2 + newY
            return
          }
        }
        this.currentIndex = listHeight.length - 2
      },
      diff (newY) {
        let fixedTop = (newY > 0 && newY < ANCHOR_HEIGHT) ? newY - ANCHOR_HEIGHT : 0
        if (this.fixedTop === fixedTop) {
          return
        }
        this.fixedTop = fixedTop
        this.$refs.fixedTop.style.transform = `translate3d(0,${fixedTop}px,0)`
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .list-view
    position: relative
    width: 100%
    height: 100%
    overflow: hidden
    background-color: $color-background
    z-index: 99
    .list-group
      .list-group-title
        padding-left: 20px
        s-height(30px)
        font-size: $font-size-small
        color: $color-text-l
        background-color: $color-highlight-background
      .list-group-item
        align-items: center
        padding: 10px 1vw 10px 20px
        last-border(rgba(158, 158, 158, 0.2))
        .avatar
          flex: 0 0 50px
          height: 50px
          -webkit-border-radius: 50%
          -moz-border-radius: 50%
          border-radius: 50%
        .name
          margin-left: 20px
          color: $color-text-1
          font-size: $font-size-medium
    .list-shortcut
      position: fixed
      right: 0
      top: 22vh
      .list-shortcut-item
        font-size: $font-size-small
        width: 18px
        height: 18px
        line-height: 18px
        text-align: center
        &.current
          color: $color-theme
    .fixedTop
      position: absolute
      left: 0
      top: 0
      width: 100%
      .title
        padding-left: 20px
        s-height(30px)
        font-size: $font-size-small
        color: $color-text-l
        background-color: $color-highlight-background
    .g-loading
      position relative
</style>
