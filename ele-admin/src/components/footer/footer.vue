<template>
  <el-footer>
    <el-container class="text-center">
      <strong>© {{this.getYear()}} chovitaminljy. All rights reserved</strong>
    </el-container>
  </el-footer>
</template>
<script type="text/ecmascript-6">
export default {
  methods: {
    getYear () {
      return new Date().getFullYear()
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.el-footer {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
