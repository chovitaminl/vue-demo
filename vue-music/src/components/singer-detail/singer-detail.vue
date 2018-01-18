<template>
  <transition name="slide" >
    <music-list :songs="songs" :title="singerTitle" :bgImage="bgImage"></music-list>
  </transition>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: .3s all

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import { ERR_OK } from 'api/config'
  import { getSingerDetail } from 'api/singer'
  import { createSongs } from 'common/js/song'
  import musicList from 'components/music-list/music-list'

  export default {
    components: {
      musicList
    },
    computed: {
      ...mapGetters([
        'singer'
      ]),
      singerTitle () {
        return this.singer.name
      },
      bgImage () {
        return this.singer.avatar
      }
    },
    data () {
      return {
        songs: []
      }
    },
    created () {
      this._getDetail()
      console.log(this.singer.id, '...', this.singer.name)
    },
    methods: {
      _getDetail () {
        if (!this.singer.id) {
          this.$router.push('/singer')
          return
        }
        getSingerDetail(this.singer.id).then((res) => {
          if (ERR_OK === res.code) {
            this.songs = this._normalizeSongs(res.data.list)
            console.log('this.songs', this.songs, res.data.list)
          }
        })
      },
      _normalizeSongs (list) {
        let ret = []
        list.forEach((data) => {
          let {musicData} = data
          if (musicData.songid && musicData.songmid) {
            ret.push(createSongs(musicData))
          }
        })
        return ret
      }
    }
  }
</script>

