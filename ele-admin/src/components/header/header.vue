<template>
  <el-header class="el-header-menu">
    <div class="flex-item console-wrapper">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="logo"><i class="el-icon-menu"></i></el-menu-item>
        <el-menu-item index="console">管理控制台</el-menu-item>
      </el-menu>
    </div>
    <div class="flex-item message-wrapper">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="user">chovitaminljy</el-menu-item>
        <el-menu-item index="2" >消息中心</el-menu-item>
        <el-menu-item index="3"><a href="" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </div>
  </el-header>
</template>
<script type="text/ecmascript-6">

export default {
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect() {
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .el-header {
    padding: 0;
    &.el-header-menu{
      display: flex;
      .flex-item{
        flex: 1;
        &.message-wrapper{
          .el-menu{
            .el-menu-item{
              float: right;
            }
          }
        }
      }
    }
  }
</style>
