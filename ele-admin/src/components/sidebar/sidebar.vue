<template>
  <el-aside  width="200px">
      <el-menu
        default-active="2"
        class="aside-menu"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="collapse" collapse="isCollapse">
            <i class="el-icon-view"></i>
            <span slot="title">收起菜单</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>仪表盘</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
  </el-aside>
</template>
<script type="text/ecmascript-6">
import ElMenuItem from "../../../node_modules/element-ui/packages/menu/src/menu-item.vue";

export default {
  components: {ElMenuItem},
  data() {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen() {},
    handleClose() {}
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../common/scss/variable.scss";

  .el-aside{
    background-color: $color-background-menu;
  }
</style>
