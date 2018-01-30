<template>
  <div id="app">
    <m-header></m-header>
    <m-tab></m-tab>
    <router-view></router-view>
    <player></player>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import MTab from 'components/tab/m-tab'
import Player from 'components/player/player'

export default {
  name: 'music-home',
  components: {
    MHeader,
    MTab,
    Player
  }
}
</script>

<style>
</style>
