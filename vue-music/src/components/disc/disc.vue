<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs='songs'></music-list>
  </transition>
</template>
<script type="text/ecmascript-6">
  import { mockResult } from 'common/js/mock'
  import { mapGetters } from 'vuex'
  import { ERR_OK } from 'api/config'
  import { getRecommendSong } from 'api/recommend'
  import musicList from 'components/music-list/music-list'

  export default {
    created () {
      // a test for test mockjs data
      this.mockResult = mockResult
      console.log('mockdata', this.mockResult)

      this._getDiscSong()
    },
    data () {
      return {
        songs: []
      }
    },
    components: {
      musicList
    },
    methods: {
      _getDiscSong () {
        if (!this.disc.dissid) {
          this.$router.push('/recommend')
          return
        }
        getRecommendSong(this.disc.dissid).then((res) => {
          if (ERR_OK === res.code) {
            console.log(res.data)
          }
        })
      }
    },
    computed: {
      title () {
        return this.disc.dissname
      },
      bgImage () {
        return this.disc.imgurl
      },
      ...mapGetters([
        'disc'
      ])
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active,.slide-leave-active
    transition: .3s all
  .slide-enter,.slide-leave-to
    transform: translate3d(100%,0,0)
</style>
