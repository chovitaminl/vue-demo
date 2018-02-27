<template>
  <transition name="slide">
    <music-list :songs="songs" :title="title" :bg-image="bgImage"></music-list>
  </transition>
</template>
<script typy="text/ecmascript-6">
  import MusicList from 'components/music-list/music-list'
  import { mapGetters } from 'vuex'
  import { getToplistMusic } from 'api/rank'
  import { ERR_OK } from 'api/config'
  import { createSongs } from 'common/js/song'

  export default {
    components: {
      MusicList
    },
    created () {
      this._getMusicList()
    },
    data () {
      return {
        songs: []
      }
    },
    methods: {
      normalize (list) {
        const ret = []
        list.forEach((item) => {
          if (item.data.songmid && item.data.albummid) {
            ret.push(createSongs(item.data))
          }
        })
        return ret
      },
      _getMusicList () {
        if (!this.topList.id) {
          this.$router.push('/rank')
          return
        }
        getToplistMusic(this.topList.id).then((res) => {
          if (ERR_OK === res.code) {
            this.songs = this.normalize(res.songlist)
          }
        })
      }
    },
    computed: {
      title () {
        console.log(this.topList)
        return this.topList.topTitle
      },
      bgImage () {
        return this.songs[0].image
      },
      ...mapGetters([
        'topList'
      ])
    }
  }
</script>
<style scroped lang="stylus" rel="sheetstyle/stylus">
  .slide-enter-active,.slide-leave-active
    transition: all 0.3s
  .slide-enter,.slide-leave-to
    transform: translate3d(100%, 0 ,0)
</style>