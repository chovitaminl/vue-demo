<template>
  <el-container class="is-vertical">
    <el-main>
      <router-view></router-view>
    </el-main>
    <admin-footer></admin-footer>
  </el-container>
</template>
<script type="text/ecmascript-6">
import adminFooter from 'components/footer/footer'

export default {
  name: 'Layout',
  components: {
    adminFooter
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.el-container{
  .el-main{
    position: relative;
  }
}
</style>
