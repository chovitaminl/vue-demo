<template>
  <div class="selection-component">
    <div class="selection-show" @click="toggleDrop">
      <span>{{selections[nowIndex].label}}</span>
      <div class="arrow"></div>
    </div>
    <div class="selection-list" v-if="isDrop">
      <ul>
        <li v-for="(item,index) in selections" v-text="item.label" @click="chooseSelection(index)">aaa</li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      selections: {
        type: Array,
        default: [
          {
            label: '入门级',
            value: 0,
          }
        ]
      }
    },
    data() {
      return {
        isDrop:false,
        nowIndex: 0
      }
    },
    methods:{
      toggleDrop(){
        this.isDrop = !this.isDrop;
      },
      chooseSelection(index){
       this.nowIndex = index;
       this.isDrop = false;
       this.$emit('on-change',this.selections[this.nowIndex]);
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  height = 20px
  line-height = 25px
  .selection-component
    position: relative
    display: inline-block

  .selection-show
    border: 1px solid #e3e3e3
    padding: 0 20px 0 10px
    display: inline-block
    position: inherit
    top: 5px
    cursor: pointer
    height: height;
    line-height: line-height;
    background-color: #fff

  .selection-list
    display: inline-block
    position: absolute
    left: 0
    top: 25px
    width: 100%
    border-top: 1px solid #e3e3e3
    border-bottom: 1px solid #e3e3e3
    z-index: 5

  .selection-list li
    padding: 5px 15px 5px 10px
    border-left: 1px solid #e3e3e3
    border-right: 1px solid #e3e3e3
    cursor: pointer
    background: #fff
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis

  .selection-list li:hover
    background: #e3e3e3

  .arrow {
    display: inline-block;
    width: 0;
    height: 0;
    border-color: #000 transparent transparent transparent;
    border-style: solid dashed dashed dashed;
    border-width: 4px;
    position: absolute;
    right: 6px;
    top: 8px;
  }
</style>
