<template>
  <div class="g-singer">
    <list-view :data="singers" @select="selectSinger"></list-view>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import { getSinger } from 'api/singer'
  import { ERR_OK } from 'api/config'
  import { mapMutations } from 'vuex'
  import Singer from 'common/js/singer'
  import ListView from 'base/listView/listview'

  const HOT_SINGER_LEN = 10
  const HOT_NAME = '热门'

  export default {
    components: {
      ListView
    },
    created () {
      this._getSingerList()
    },
    data () {
      return {
        singers: []
      }
    },
    methods: {
      selectSinger (singer) {
        this.$router.push({
          path: `/singer/${singer.id}`
        })
        this.setSinger(singer)
      },
      _getSingerList () {
        getSinger().then((res) => {
          if (res.code === ERR_OK) {
            this.singers = this._normalizeSingers(res.data.list)
            console.log('this.singers::', this.singers)
            console.log('this.$router', this.$router)
          }
        })
      },
      _normalizeSingers (list) {
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        }
        list.forEach((item, index) => {
          if (index < HOT_SINGER_LEN) {
            map.hot.items.push(new Singer({
              id: item.Fsinger_mid,
              name: item.Fsinger_name
            }))
          }
          // not exit and create object
          const key = item.Findex
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
            map[key].items.push(new Singer({
              id: item.Fsinger_mid,
              name: item.Fsinger_name
            }))
          }
        })
        // 为了得到有序列表， 我们需要处理 map
        let ret = []
        let hot = []
        for (let key in map) {
          let val = map[key]
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val)
          } else if (val.title === HOT_NAME) {
            hot.push(val)
          }
          ret.sort((a, b) => {
            return a.title.charCodeAt(0) - b.title.charCodeAt(0)
          })
        }
        return hot.concat(ret)
      },
      ...mapMutations({
        setSinger: 'SET_SINGER'
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .g-singer
    position: fixed
    top: 88px
    bottom: 0px
    width: 100%
</style>
