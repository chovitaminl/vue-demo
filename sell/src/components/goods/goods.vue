<template>
  <div class="good-wrapper">
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li class="menu-item" v-for="(name,index) in goods" :key="index" :class="{'current': currentIndex === index}"
              @click="selectMenu(index,$event)">
            <span class="name"><span class="icon" v-show="name.type>-1" :class="classMap[name.type]"></span>{{name.name}}</span>
          </li>
        </ul>
      </div>
      <div class="goods-wrapper" ref="goodWrapper">
        <ul>
          <li class="good-item good-item-hook" v-for="(good,index) in goods" :key="index">
            <h1 class="good-title">{{good.name}}</h1>
            <ul class="foods">
              <li class="food-item" v-for="(food,index) in good.foods">
                <div class="icon"><img :src="food.icon" alt="food.name" width="57" height="57"></div>
                <div class="detail-wrapper">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="description">{{food.description}}</p>
                  <div class="extra">
                    <span class="sales">月销{{food.sellCount}}份 </span>
                    <span class="rating">好评率{{food.rating}}%</span>
                    <div class="prices">
                      <span class="new-price"><i>￥</i>{{food.price}}</span>
                      <span class="old-price" v-show="food.oldPrice"><i>￥</i>{{food.oldPrice}}</span>
                    </div>
                    <div class="cart-control-wrapper">
                      <cart-control :food="food" @add-cart="_drop"></cart-control>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <shop-cart ref="shopcart" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"
               :selectedFoods="selectedFoods"></shop-cart>
  </div>
</template>
<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import ShopCart from '../shopcart/shopcart';
  import CartControl from '../cartcontrol/cartcontrol';

  const ERRNO_OK = 0;
  export default {
    created() {
      this.$http.get('/api/goods').then((res) => {
        res = res.body;
        if (res.errno === ERRNO_OK) {
          this.goods = res.data;
          this.$nextTick(() => {
            this._initScroll();
            this._calculateHeight();
          });
        }
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      });
      this.$on('add-cart', this._drop);
    },
    components: {
      ShopCart,
      CartControl
    },
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: {},
        listHeight: [],
        scrollY: 0
      };
    },
    computed: {
      currentIndex() {
        for (let i = 0; i < this.listHeight.length; i++) {
          let preHeight = this.listHeight[i];
          let nextHeight = this.listHeight[i + 1];
          if (!nextHeight || (this.scrollY >= preHeight && this.scrollY < nextHeight)) {
            return i;
          }
        }
        return 0;
      },
      selectedFoods() {
        let foodList = [];
        if (this.goods) {
          let goods = Array.from(this.goods);
          goods.forEach((good) => {
            good.foods.forEach((food) => {
              if (food.count) {
                foodList.push(food);
              }
            });
          });
        }
        return foodList;
      }
    },
    methods: {
      _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        });
        this.goodScroll = new BScroll(this.$refs.goodWrapper, {
          click: true,
          probeType: 3
        });
        this.goodScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
        });
      },
      _drop(target) {
        this.$refs.shopcart.drop(target);
      },
      _calculateHeight() {
        let foodList = this.$refs.goodWrapper.getElementsByClassName('good-item-hook');
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
      },
      selectMenu(index, event) {
        if (!event._constructed) {
          return;
        }
        let foodList = this.$refs.goodWrapper.getElementsByClassName('good-item-hook');
        let item = foodList[index];
        this.goodScroll.scrollToElement(item, 300);
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"
  .goods
    position: absolute
    display: flex
    top: 174px
    width: 100%
    bottom: 46px
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background-color: #f3f5f7
      ul
        .menu-item
          display: table
          width: 56px
          height: 54px
          padding: 0 12px
          line-height: 14px
          &.current
            position: relative
            top: -4px
            z-index: 10
            background-color: #fff
            .name
              font-weight: 700
              border-none()
          .icon
            display: inline-block
            width: 12px
            height: 12px
            vertical-align: top
            margin-right: 2px
            background-size: 12px 12px
            &.decrease
              bg-image('decrease_3')
            &.discount
              bg-image('discount_3')
            &.guarantee
              bg-image('guarantee_3')
            &.invoice
              bg-image('invoice_3')
            &.special
              bg-image('special_3')
          .name
            display: table-cell
            width: 56px
            vertical-align: middle
            text-align: center
            border-1px(rgba(7, 17, 27, 0.1))
            font-size: 12px
            font-weight: normal
    .goods-wrapper
      flex: 1
      width: 100%
      .good-item
        .good-title
          padding-left: 14px
          height: 26px
          line-height: 26px;
          border-left: 2px solid #d9dde1
          font-size: 12px
          color: rgb(147, 153, 159)
          background-color: #f3f5f7
        .foods
          .food-item
            display: flex
            margin: 18px
            padding-bottom: 18px
            border-1px(rgba(7, 17, 27, 0.1))
            &:last-child
              border-none()
              padding-bottom: 0
            .icon
              flex: 0 0 57px
              border-radius: 1px
              margin-right: 10px
            .detail-wrapper
              flex: 1
              .name
                margin: 2px 0 8px 0
                line-height 14px
                font-size: 14px
                color: rgb(7, 17, 27)
              .description
                font-size: 10px
                color: rgb(147, 153, 159)
                line-height: 10px
              .extra
                position: relative
                margin: 8px 0
                .sales, .rating
                  font-size: 10px
                  color: rgb(147, 153, 159)
                  line-height: 10px
                .sales
                  margin-right: 12px
              .prices
                margin-top: 8px
                .new-price
                  margin-rigth: 6px
                  font-size: 10px / 14px
                  font-weight: 700
                  color: rgb(240, 20, 20)
                  line-height: 24px
                .old-price
                  font-size: 10px
                  color: rgb(147, 153, 159)
                  line-height: 24px
                  text-decoration-line: line-through
              .cart-control-wrapper
                position: absolute
                display: inline-block
                bottom: 0
                right: 0
                margin-top: 8px

</style>
