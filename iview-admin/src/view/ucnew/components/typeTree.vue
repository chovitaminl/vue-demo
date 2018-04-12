<style lang="less" scoped>
@import url("../index.less");
.type-tree {
    padding: 10px 15px;
    max-width: 240px;
    max-height: 270px;
    overflow-y: scroll;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
</style>

<template>
  <div class="type-tree">
    <h4 class="title">
      <Checkbox v-model="isChecked" :disabled="true">
        {{treeTitle}}
        <Tooltip placement="bottom">
          <Icon type="help-circled"></Icon>
          <div slot="content">
            <p v-for="(tip, index) in tipsText" :key="index">{{tip}}</p>
          </div>
        </Tooltip>
      </Checkbox>
    </h4>
    <div class="content">
      <Tree @on-check-change="handleTree" :data="treeData" show-checkbox></Tree>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    treeTitle: {
      type: String,
      default: ""
    },
    treeData: {
      type: [Array, Object],
      default: []
    },
    tipsText: {
      type: [Array, String],
      default: []
    }
  },
  data() {
    return {
      isChecked: false,
      tipTxt: ""
    };
  },
  methods: {
    handleTree(list) {
      this.isChecked = list.length > 0 ? true : false;
      this.$emit("on-change", list);
    }
  }
};
</script>