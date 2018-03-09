<template>
  <div class="cart-control">
    <transition name="move">
      <span class="decrease-btn" v-show="food.count" @click="decreaseFood">
        <span class="inner icon-remove_circle_outline"></span>
      </span>
    </transition>
    <span class="count" v-show="food.count">{{this.food.count}}</span>
    <span class="add-btn icon-add_circle" @click="addFood"></span>
  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue';

  export default {
    props: {
      food: {
        type: Object,
        default: {}
      },
      eventList: {
        type: Object
      }
    },
    created() {
//      console.log(eventList);
    },
    methods: {
      addFood(event) {
        if (!event._constructed) {
          return;
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        this.$emit('add-cart', event.target);
      },
      decreaseFood(event) {
        if (!event._constructed) {
          return;
        }
        this.food.count--;
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/color"
  .cart-control
    font-size: 0
    .move-enter-active, .move-leave-active
      transition: all .5s linear
      transform: translate3D(0, 0, 0)
      .inner
        transition: all .5s
        transform: rotate(0)
    .move-enter, .move-leave-to
      opacity: 0
      transform: translate3D(24px, 0, 0)
      .inner
        transform: rotate(180deg)
    .decrease-btn, .add-btn, .count
      display: inline-block
      height: 24px
      line-height: 24px
      text-align: center
      vertical-align: top
      box-sizing: border-box
    .decrease-btn, .add-btn
      width: 24px
      border-radius: 50%
      font-size: 24px
    .decrease-btn
      z-index: 99
      .inner
        display: inline-block
        width: inherit
        height: inherit
        background-color: cart-control-decrease-bg
        color: cart-control-decrease-color
    .add-btn
      z-index: 100
      color: cart-control-add-bg
      background-color: cart-control-add-color
    .count
      width: 24px
      font-size: 12px
      color: cart-control-count-text-color
</style>
