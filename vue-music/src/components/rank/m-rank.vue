<template>
  <scroll class="g-rank" :data="topList" ref="rank">
    <ul class="content">
      <li class="top-list" 
      v-for="(item, index) in topList" 
      :key="index"
      @click="selectTopList(item)"
      >
        <div class="image-wrapper">
          <img width="100" height="100" v-lazy="item.picUrl" alt="">  
        </div>
        <div class="content-wrapper">
          <p class="song-list" 
          v-for="(songInfo, songIndex) in item.songList"
          :key="songIndex"
          >
            <span class="serial">{{songIndex + 1}}</span>
            <span class="song">{{songInfo.singername+'-'+songInfo.songname}}</span>
          </p>
        </div>
      </li>
    </ul>
    <router-view></router-view>
    <loading v-show="!topList.length"></loading>
  </scroll>
</template>
<script type="text/ecmascript-6">
  import { getRankTopList } from 'api/rank'
  import { ERR_OK } from 'api/config'
  import { playlistMixin } from 'common/js/mixin'
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  import { mapMutations } from 'vuex'

  export default {
    mixins: [playlistMixin],
    created () {
      this._getTopList()
    },
    data () {
      return {
        topList: []
      }
    },
    methods: {
      selectTopList (musicList) {
        this.$router.push({
          path: `/rank/${musicList.id}`
        })

        this.setMusiclist(musicList)
      },
      handlePlaylist (playlist) {
        const bottom = playlist.length ? '60px' : 0
        this.$refs.rank.$el.style.bottom = bottom
        this.$refs.rank.refresh()
      },
      _getTopList () {
        getRankTopList().then((res) => {
          if (ERR_OK === res.code) {
            this.topList = res.data.topList
            console.log('rank list', this.topList)
          }
        })
      },
      ...mapMutations({
        setMusiclist: 'SET_TOP_LIST'
      })
    },
    components: {
      Scroll,
      Loading
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable'

  $bottom = 15px
  .g-rank
    position: fixed
    top: 90px
    bottom: 0px
    width: 100%
    background-color: $color-background
    overflow: hidden
    .content
      padding-bottom: $bottom
      .top-list
        display: flex
        margin: $bottom 20px
        height: 100px
        background-color: $color-highlight-background
        .image-wrapper
          flex: 0 0 100px
          width: 100px
        .content-wrapper
          flex: 1
          margin: 5px 15px
          overflow: hidden
          .song-list
            margin: 10px 0
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            .serial,.song
              font-size: $font-size-medium
              color: $color-text-d
      
</style>
