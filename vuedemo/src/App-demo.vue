<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{totalPrice}}</p>
    <banner></banner>
    <apple></apple>
    <router-view></router-view>

    <router-link :to="{path:'/banner'}"> to banner</router-link>
    <router-link :to="{path:'/apple'}"> to hello</router-link>
  </div>
</template>

<script>
  import banner from '@/components/banner';
  import apple from '@/components/apple';

  export default {
    name: 'app',
    components: {
      banner,
      apple
    },
    computed: {
      totalPrice() {
        /*方法一*/
//        return this.$store.state.totalPrice;
        /*方法二：在使用vuex的getter之后可以 actions */
        return this.$store.getters.getTotal;
      }
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
