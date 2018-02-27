<template>
  <div class="song-list">
    <ul>
      <li @click="selectItem(song, index)"
          class="song-list-item"
          v-for="(song, index) in songs"
          :key="index"
          v-show="songs.length">
        <div class="song-rank" v-show="rank">
          <span :class="getRankCls(index)" v-text="getRankText(index)"></span>
        </div>
        <div class="song-content">
          <h2 class="song-name">{{song.name}}</h2>
          <p class="song-desc">{{getDesc(song)}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      songs: {
        type: Array,
        default: []
      },
      rank: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      getRankCls (index) {
        let cls
        if (index <= 2) {
          cls = `icon icon${index}`
        } else {
          cls = 'text'
        }
        return cls
      },
      getRankText (index) {
        if (index > 2) {
          return index + 1
        }
      },
      getDesc (song) {
        return `${song.singer}·${song.album}`
      },
      selectItem (song, index) {
        this.$emit('select', song, index)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .song-list
    .song-list-item
      display: flex
      align-item: center
      box-sizing: border-box
      height: 64px
      font-size: $font-size-medium
      .song-rank
        flex: 0 0 25px
        width: 25px
        margin-right: 30px
        text-align: center
        .icon
          display: inline-block
          width: 25px
          height: 24px
          background-size: 25px 24px
          &.icon0
            bg-image('first')
          &.icon1
            bg-image('second')
          &.icon2
            bg-image('third')
        .text
          color: $color-theme
          font-size: $font-size-large
    .song-content
      flex: 1
      line-height: 20px
      overflow: hidden
      .song-name
        no-wrap()
        color: $color-text
      .song-desc
        margin-top: 4px
        no-wrap()
        color: $color-text-d
</style>
