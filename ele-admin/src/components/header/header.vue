<template>
  <el-header>
    <el-menu
      :default-active="activeIndex"
      class="el-header-menu"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="logo">chovitaminljy</el-menu-item>
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="2" >消息中心</el-menu-item>
      <el-menu-item index="3"><a href="https://#" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
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
  }
</style>
