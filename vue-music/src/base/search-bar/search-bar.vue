<template>
  <div class="search-bar-wrapper" ref="query">
    <i class="icon icon-search"></i>
    <input type="text"
           class="search-box"
           :placeholder="placeholder"
           v-model="query">
    <i class="icon icon-delete"
       v-show="query"
       @click="clearQuery"
    ></i>
  </div>
</template>
<script type="text/ecmascript-6">
  import { debounce } from 'common/js/util'

  export default {
    props: {
      placeholder: {
        type: String,
        default: '搜索歌曲、歌手'
      }
    },
    data () {
      return {
        query: ''
      }
    },
    methods: {
      blur () {
        this.$refs.query.blur()
      },
      getQueryContent (hotKey) {
        this.query = hotKey
      },
      clearQuery () {
        this.query = ''
      }
    },
    created () {
      this.$watch('query', debounce((newQuery) => {
        this.$emit('query', newQuery)
      }, 200))
    }
//    watch: {
//      query () {
//        this.$emit('query', this.query)
//      }
//    }
  }
</script>
<style lang="stylus" scoped>
  @import '~common/stylus/variable'

  .search-bar-wrapper
    position relative
    display: flex
    justify-content: center
    align-items: center
    height: 40px
    line-height: 40px
    overflow: hidden
    background-color: $color-highlight-background
    border-radius: 5px
    .icon
      display: inline-block
      flex: 0 0 30px
      width: 30px
      height: 30px
      line-height: 30px
      text-align: center
      font-size: 14px
      color: $color-text-l
    .search-box
      display: inline-block
      margin-right: 5px
      flex: 1
      height: 35px
      background-color: $color-highlight-background
      color: $color-text-l
</style>
