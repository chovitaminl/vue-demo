<template>
  <el-header class="header-wrapper" is="header" :span="24">
    <el-row class="content text-center" :span="24">
      <el-col class="g-header-item" :span="6">
        <router-link class="menu-link" :to="{path:'index'}">首页</router-link>
      </el-col>
      <el-col class="g-header-item" :span="6">
        <router-link class="menu-link" :to="{path:'index',query:{tab:'good'}}">精华</router-link>
      </el-col>
      <el-col class="g-header-item" :span="6">
        <router-link class="menu-link" :to="{path:'index',query:{tab:'share'}}">分享</router-link>
      </el-col>
      <el-col class="g-header-item" :span="6">
        <router-link class="menu-link" :to="{path:'index',query:{tab:'ask'}}">问答</router-link>
      </el-col>
    </el-row>
  </el-header>
</template>

<style lang="scss">
  @import "../style/base/_color";
  @import "../style/base/_base";

  .header-wrapper {
    height: $header-height;
    line-height: $header-height;
    background-color: $website-background-color;
    color: $default-font-color;
    .content {
      .g-header-item {
        .menu-link {
          color: $meue-link-color;
        }
      }
    }
  }
</style>

<script>

  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {}
  };
</script>

