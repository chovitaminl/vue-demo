<template>
  <div id="app">
      <!--<nav-bar :show="true"></nav-bar>-->
      <!--<router-view></router-view>-->
      <!--<footer-bar></footer-bar>-->
  </div>
</template>
<style>
</style>
<script>
  export  default{
    //replase 用来替代html中的id为main的标签
    replace: true,
    name:"Main",
    data() {
      return {
          msg: 'Hello Vue!'
      }
    },
    components:{
    }
  }
</script>