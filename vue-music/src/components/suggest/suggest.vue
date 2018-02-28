<template>
  <scroll class="g-suggest" 
  :data="suggests"
  :pullup="pullup"
  @scrollToEnd="searchMore"
  >
    <ul class="suggest-list">
      <li class="suggest-item" v-for="(item, index) in suggests" :key="index">
        <div class="icon">
          <i :class="getIconCls(item)"></i>
        </div>
        <div class="name">
          <p class="text" v-html="getDisplayName(item)"></p>
        </div>
      </li>
      <loading v-show="hasMore" :title="''"></loading>
    </ul>
  </scroll>
</template>
<script>
import { search } from 'api/search'
import { ERR_OK } from 'api/config'
import { createSongs } from 'common/js/song'
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'

const SET_SINGER = 'singer'
const perpage = 30
export default {
  props: {
    query: {
      type: String,
      default: ''
    },
    zhida: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      page: 1,
      suggests: [],
      pullup: true,
      hasMore: true
    }
  },
  methods: {
    searchMore () {
      if (!this.hasMore) {
        return
      }
      this.page++
      search(this.query, this.page, this.zhida, perpage).then((res) => {
        if (ERR_OK === res.code) {
          this.suggests = this.suggests.concat(this.genNormalize(res.data))
          this._checkMore(res.data)
        }
      })
    },
    getIconCls (item) {
      if (item.type === SET_SINGER) {
        return 'icon-mine'
      } else {
        return 'icon-music'
      }
    },
    getDisplayName (item) {
      if (item.type === SET_SINGER) {
        return item.singername
      } else {
        return `${item.name} - ${item.singer}`
      }
    },
    genNormalize (data) {
      let ret = []
      if (data.zhida && data.zhida.singermid) {
        ret.push({
          ...data.zhida, ...{type: SET_SINGER}
        })
      }
      if (data.song) {
        ret = ret.concat(this._normalizeSong(data.song.list))
      }
      return ret
    },
    getSearch () {
      this.hasMore = true
      search(this.query, this.page, this.zhida, perpage).then((res) => {
        if (ERR_OK === res.code) {
          this.suggests = this.genNormalize(res.data)
        }
      })
    },
    _checkMore (data) {
      const song = data.song
      if (!song.list.length || (song.curnum + song.perpage * perpage) > song.totalnum) {
        this.hasMore = false
      }
    },
    _normalizeSong (list) {
      let ret = []
      list.forEach((song) => {
        if (song.songid && song.albumid) {
          ret.push(createSongs(song))
        }
      })
      return ret
    }
  },
  watch: {
    query () {
      this.getSearch()
    }
  },
  components: {
    Scroll,
    Loading
  }
}
</script>
<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  @import '~common/stylus/mixin'

  .g-suggest
    position: fixed
    top: 160px
    left: 0
    right: 0
    bottom: 0
    height: 100%
    overflow: hidden
    .suggest-list
      margin: 0 30px
      .suggest-item
        display: flex
        align-items: center
        padding-bottom: 20px
        .icon
          flex: 0 0 30px
          width: 30px
          [class^="icon-"]
            font-size: $font-size-medium
            color: $color-text-d
        .name
          flex: 1
          font-size: $font-size-medium
          color: $color-text-d
          overflow: hidden
          .text
            no-wrap()
    .no-result-wrapper
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
