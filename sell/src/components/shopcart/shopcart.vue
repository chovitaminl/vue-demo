<template>
  <div class="shopcart-wrapper">
    <div class="lt-wrapper">
      <span class="cart-wrapper">
        <span class="cart" :class="{'highlight':totalCount>0}">
          <i class="icon-shopping_cart" :class="{'highlight':totalCount>0}"></i>
        </span>
        <span class="count">{{totalCount}}</span>
      </span>
      <span class="price" :class="{'highlight':totalPrice>0}">￥{{this.totalPrice}}</span>
      <span class="desc">另需配送费￥{{this.deliveryPrice}}元</span>
    </div>
    <div class="rt-wrapper">
      <div class="pay" :class="settleClass">{{this.payDes}}</div>
    </div>
    <div class="ball-wrapper">
      <div v-for="(ball,index) in balls" v-show="ball.show" :key="index" class="ball">
        <transition name="drop">
          <div class="inner"></div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 20
      },
      selectedFoods: {
        type: Array,
        default() {
          return [
            {
              price: 0,
              count: 0
            }
          ];
        }
      }
    },
    data() {
      return {
        balls: [
          {show: false},
          {show: false},
          {show: false},
          {show: false},
          {show: false}
        ]
      };
    },
    computed: {
      totalPrice() {
        let total = 0;
        this.selectedFoods.forEach((food) => {
          total += food.price * food.count;
        });
        return total;
      },
      totalCount() {
        let count = 0;
        this.selectedFoods.forEach((food) => {
          count += food.count;
        });
        return count;
      },
      payDes() {
        if (this.totalPrice === 0) {
          return `￥${this.minPrice}元起送`;
        } else if (this.totalPrice < this.minPrice) {
          let diff = this.minPrice - this.totalPrice;
          return `还差￥${diff}元起送`;
        } else {
          return `去结算`;
        }
      },
      settleClass() {
        if (this.totalPrice < this.minPrice) {
          return 'not-enough';
        } else {
          return 'enough';
        }
      }
    },
    methods: {
      drop(el) {
        console.log('eel');
        console.log(el);
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  cart-wrapper = 44px
  cart-wrapper-bg = #141d27
  cart-bg = rgb(43, 52, 60)
  cart-color = rgb(128, 133, 128)
  highlight-bg = rgb(0, 160, 220)
  highlight-color = rgb(255, 255, 255)
  .shopcart-wrapper
    position: fixed
    display: flex
    bottom: 0
    left: 0
    width: 100%
    height: cart-wrapper
    line-height: cart-wrapper
    background-color: cart-wrapper-bg
    .lt-wrapper
      flex: 1
      width: 100%
      .cart-wrapper
        position: relative
        top: -10px
        display: inline-block
        box-sizing: border-box
        margin: 0 12px
        padding: 6px
        width: 56px
        height: 56px
        line-height: 56px
        text-align: center
        border-radius: 50%
        vertical-align: top
        background-color: cart-wrapper-bg
        .cart
          display: inline-block
          width: 100%
          height: 100%
          text-align: center
          border-radius: 50%
          background-color: cart-bg
          &.highlight
            background-color: highlight-bg
          .icon-shopping_cart
            line-height: 44px
            font-size: 24px
            color: cart-color
            &.highlight
              color: highlight-color
      .count
        position: absolute
        display: inline-block
        padding: 1px
        top: -2px
        right: 0
        width: 24px;
        height: 15px;
        line-height: 15px
        border-radius: 8px
        font-size: 10px
        color: rgb(255, 255, 255)
        background-color: rgb(240, 20, 20)
      .price
        display: inline-block
        vertical-align: top
        margin-top: 12px
        padding-right: 12px
        line-height: 24px
        box-sizing: border-box
        border-right: 1px solid rgba(255, 255, 255, 0.1)
        font-size: 16px
        color: rgba(255, 255, 255, 0.4)
        &.highlight
          color: highlight-color
      .desc
        display: inline-block
        vertical-align: top
        margin: 12px
        line-height: 24px
        font-size: 10px
        box-sizing: border-box
        color: rgba(255, 255, 255, 0.4)
    .rt-wrapper
      flex: 0 0 105px
      .pay
        padding: 0 8px
        line-height: 44px
        text-align: center
        font-size: 12px
        &.not-enough
          color: rgba(255, 255, 255, 0.4)
          background-color: rgb(43, 51, 59)
        &.enough
          background-color: #00BC4D
          color: #fff
    .ball-wrapper
      .ball
        positon: fixed
        left: 32px
        bottom: 22px
        z-index: 200
        &.drop-enter-active, &.drop-leave-active
          transition: all 0.4s
          .inner
            width: 16px
            height: 16px
            border-radius: 50%
            background: rgb(0, 160, 220)
            transition: all 0.4s
</style>
