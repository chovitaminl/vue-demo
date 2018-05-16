<style scoped>
  .select-tree{
    font-size: 0;
  }
  .select-tree ul li{
    list-style: none;
    margin: 8px 0;
    padding: 0;
    white-space: nowrap;
    outline: 0;
  }
  .select-tree .tree-input-inner{
    display: inline-block;
    margin-right: 8px;
    cursor: pointer;
    font-size: 12px;
    border-color: #2d8cf0;
    background-color: #2d8cf0;
  }
  .select-tree .tree-checkbox-input{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    cursor: pointer;
    opacity: 0;
}
.select-tree .tree-title{
  display: inline-block;
  margin: 0;
  padding: 0 4px;
  border-radius: 3px;
  cursor: pointer;
  vertical-align: top;
  font-size: 12px;
  color: #495060;
  transition: all .2s ease-in-out;
}
</style>
<template>
  <div class="select-tree">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <span class="tree-input-inner"><input type="checkbox" class="tree-checkbox-input"></span>
        <span class="tree-title">{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'selectTree',
  props: {
    data: {
      type: Array,
      default: (() => [])
    }
  },
  data() {
    return {
      list: []
    }
  },
  watch: {
    data(newVal) {
      this.list = newVal
      console.log(this.list,'xxxxx')
    }
  },
  mounted() {
    this.list = this.data
  },
  methods: {}
}
</script>
