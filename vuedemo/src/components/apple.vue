<template>
  <div>
    <h1>i am a apple</h1>
    <button @click="addOne">add one</button>
    <button @click="minusOne">add two</button>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        price: 15,
      }
    },
    methods: {
      addOne() {
        this.$store.commit('increment', this.price);
      },
      minusOne() {
        this.$store.commit('decrement', this.price);
      }
    }
  }
</script>
<style>

</style>
