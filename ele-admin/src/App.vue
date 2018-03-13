<template>
  <el-container class="is-vertical">
    <admin-header></admin-header>
    <el-container>
      <sidebar></sidebar>
      <admin-layout></admin-layout>
    </el-container>
  </el-container>
</template>

<script>
import adminHeader from 'components/header/header'
import Sidebar from 'components/sidebar/sidebar'
import adminLayout from 'components/layout/layout'

export default {
  name: 'App',
  components: {
    adminHeader,
    Sidebar,
    adminLayout
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .el-container.is-vertical{
    height: 100%;
  }
</style>
