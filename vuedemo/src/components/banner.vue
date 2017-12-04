<template>
  <div>i am a banner
    <div>{{msg}}
      <button type="button" @click="getParam">Get Param</button>
    </div>
    <button @click="addOne">add one</button>
    <button @click="minusOne">minus one</button>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        msg: "liejiayong",
        price: 5
      }
    },
    methods: {
      getParam() {
        console.log(this.$route.params)
      },
      addOne() {
        this.$store.dispatch('increase', this.price);
      },
      minusOne() {
        this.$store.commit('decrement', this.price);
      }
    }
  }
</script>
<style>

</style>
