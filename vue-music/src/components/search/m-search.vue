<template>
  <div class="g-search">
    <div class="search-box-wrapper">
      <div class="search-box-content">
        <search-bar ref="searchBar" @query="onChangeQuery"></search-bar>
      </div>
    </div>
    <div class="search-suggest-wrapper" v-show="query">
      <suggest :query="query" :zhida="1"></suggest>
    </div>
    <div class="search-hotkey-warpper" v-show="!query">
      <h2 class="hotkey-title">热门搜索</h2>
      <ul class="hotkey-tag-content">
        <li class="hotkey-tag"
        @click="selectHotKey(key.k)"
        v-for="(key, index) in hotKeys"
        :key="index"
        >{{key.k}}</li>
      </ul>
    </div>
    <div class="search-history-wrapper" v-show="!query">
      <h2 class="history-title">
        <span class="title">搜索历史</span>
        <span class="icon icon-clear"></span>
      </h2>
    </div>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import SearchBar from 'base/search-bar/search-bar'
  import Suggest from 'components/suggest/suggest'
  import { getHotKey } from 'api/search'
  import { ERR_OK } from 'api/config'

  export default {
    created () {
      this._getHotKeys()
    },
    data () {
      return {
        hotKeys: [],
        query: ''
      }
    },
    methods: {
      onChangeQuery (query) {
        this.query = query
      },
      selectHotKey (hotKey) {
        this.$refs.searchBar.getQueryContent(hotKey)
      },
      normalize (list) {
        const ret = []
        if (list.special_key) {
          ret.push({
            k: list['special_key'],
            n: 1
          })
        }
        list['hotkey'].forEach((hotkey) => {
          ret.push(hotkey)
        })
        return ret
      },
      _getHotKeys () {
        getHotKey().then((res) => {
          if (ERR_OK === res.code) {
            this.hotKeys = this.normalize(res.data).slice(0, 10)
          }
        })
      }
    },
    components: {
      SearchBar,
      Suggest
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable';
  .g-search
    position fixed
    top: 90px
    bottom: 0
    width: 100%
    .search-box-wrapper
      margin: 15px
      .search-box-content
        position: relative
    .search-suggest-wrapper
      margin: 15px
    .search-hotkey-warpper
      margin: 15px
      .hotkey-title
        margin: 20px 0
        font-size: $font-size-medium
        color: $color-text-l
      .hotkey-tag-content
        .hotkey-tag
          display: inline-block
          margin: 10px 15px 10px 0
          padding: 5px 10px
          background-color: $color-highlight-background
          color: $color-text-l
    .search-history-wrapper
      margin: 15px
      .history-title
        display: flex
        margin: 20px 0
        justify-content: space-between
        align-items: center
        font-size: $font-size-medium
        color: $color-text-l
        .title
          flex: 1
        .icon
          flex: 0 0 30px
          width: 30px
          height: 30px
</style>
