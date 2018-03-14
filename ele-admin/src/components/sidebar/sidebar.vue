<template>
  <el-aside style="width: auto">
    <el-menu
      default-active="1"
      class="aside-menu"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      ref="menuBar"
    >
      <router-link to="/dashboard">
        <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">仪表盘</span>
        </el-menu-item>
      </router-link>
      <router-link to="/setting">
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>设置</span>
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
      </router-link>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">文章</span>
      </el-menu-item>
      <router-link to="/messege" >
        <el-menu-item index="messege" disabled>
          <i class="el-icon-message"></i>
          <span slot="title">邮件</span>
        </el-menu-item>
      </router-link>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">会员管理</span>
      </el-menu-item>
      <el-menu-item
        @click="handleCollapse"
        index="collapse"
      >
          <i class="el-icon-view"></i>
          <span slot="title">收起菜单</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script type="text/ecmascript-6">

const MENU_WIDTH = 200
export default {
  data() {
    return {
      isCollapse: false,
      menuBarWidth: MENU_WIDTH
    }
  },
  methods: {
    currentMenuBarWidth() {
      if (this.isCollapse) {
        this.menuBarWidth = this.$refs.menuBar.$el.offsetWidth
      } else {
        this.menuBarWidth = MENU_WIDTH
      }
    },
    handleCollapse() {
      this.isCollapse = !this.isCollapse
      this.currentMenuBarWidth()
    },
    handleOpen(index, indexPath) {
      console.log('handleOpen', index, indexPath)
    },
    handleClose(...arg) {
      console.log('handleClose', arg)
    }
  },
  computed: {
    currentMenuBarWidthStyle() {
      return `width:${this.menuBarWidth}px`
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../common/scss/variable.scss";

  .el-aside{
    overflow: hidden;
    .el-menu{
      height: 100%;
      &.aside-menu{
        background-color: $color-background-menu;
        .el-menu-item{
          padding-right: 30px;
        }
      }
    }
  }
</style>
