<template>
  <div class="song-list">
    <ul>
      <li @click="selectItem(song, index)"
          class="song-list-item"
          v-for="(song, index) in songs"
          :key="index"
          v-show="songs.length">
        <div class="song-rank"></div>
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
      getDesc (song) {
        return `${song.singer}·${song.album}`
      },
      selectItem (song, index) {
        this.$emit('select', song, index)
      }
    }
  }
</script>
<style  lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .song-list
    .song-list-item
      display: flex
      align-item: center
      box-sizing: border-box
      height: 64px
      font-size: $font-size-medium
      .rank
        display: inline-block
        width: 25px
        height: 24px
        background-size: 25px 24px
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
