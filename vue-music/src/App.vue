<template>
  <div id="app">
    <m-header></m-header>
    <m-tab></m-tab>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import MTab from 'components/tab/m-tab'

export default {
  name: 'app',
  components: {
    MHeader,
    MTab
  }
}
</script>

<style>
</style>
