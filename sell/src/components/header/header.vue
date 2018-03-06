<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avater">
        <img :src="seller.avatar" alt="商家logo">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name" v-text="seller.name"></span>
        </div>
        <div class="description">
          {{seller.description}} / {{seller.deliveryTime}} 分钟到达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text" v-text="seller.supports[0].description"></span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports" @click="detailShows">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="detailShows">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="shop background" width="100%" height="100%">
    </div>
    <transition name="fade" mode="out-in">
      <div class="detail-mask" v-show="this.detailShow">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <div class="shop-title">{{seller.name}}</div>
            <div class="star-wrapper">
              <star :size="48" :score="seller.score"></star>
            </div>
            <div class="discount-title">
              <div class="line"></div>
              <div class="title">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul class="support" v-if="seller.supports">
              <li class="support-item" v-for="(item,index) in seller.supports" :key="index">
                <span class="icon" :class="classMap[item.type]"></span>
                <span class="text">{{item.description}}</span>
              </li>
            </ul>
            <div class="discount-title">
              <div class="line"></div>
              <div class="title">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              {{seller.bulletin}}
            </div>
          </div>
        </div>
        <div class="detail-close" @click="hideBulletin">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  import Star from '../star/star';

  export default {
    components: {
      Star
    },
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        detailShow: false
      };
    },
    methods: {
      detailShows() {
        this.detailShow = true;
      },
      hideBulletin() {
        this.detailShow = false;
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    }
  }
  ;
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"
  .header
    position: relative
    color: #ffffff
    background-color: rgba(7, 17, 27, 0.5)
    .content-wrapper
      position: relative
      padding: 24px 12px 18px 24px
      font-size: 0
      .avater
        display: inline-block
        vertical-align: top
        img
          width: 64px
          height: 64px
          -webkit-border-radius: 2px
          -moz-border-radius: 2px
          border-radius: 2px
      .content
        display: inline-block
        font-size: 14px
        margin-left: 16px
        .title
          margin: 2px 0 8px 0
          color: rgb(255, 255, 255)
          .brand
            display: inline-block
            width: 30px
            height: 18px
            bg-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
            vertical-align: top
          .name
            margin-left: 6px
            font-size: 16px
            font-weight: bold
            line-height: 18px
        .description
          margin-bottom: 10px
          line-height: 12px
          font-size: 12px
        .support
          .icon
            display: inline-block
            width: 12px
            height: 12px
            margin-right: 4px
            background-size: 12px 12px
            background-repeat: no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            line-height: 12px
            font-size: 10px
            vertical-align: top
      .support-count
        position: absolute
        right: 8px
        bottom: 18px
        padding: 0 8px
        -webkit-border-radius: 14px
        -moz-border-radius: 14px
        border-radius: 14px
        background-color: rgba(0, 0, 0, 0.2)
        cursor: pointer
        .count
          font-size: 12px
          vertical-align: top
          text-align: center
          line-height 24px
        .icon-keyboard_arrow_right
          font-size 12px
          line-height: 24px
          margin-left: 2px
    .bulletin-wrapper
      position: relative
      padding: 0 44px 0 12px
      height: 28px
      line-height: 28px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      background-color: rgba(7, 17, 27, .2)
      cursor: pointer
      .bulletin-title
        vertical-align: top
        display: inline-block
        margin-top: 8px
        width: 22px
        height: 12px
        bg-image('bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
      .bulletin-text
        display: inline-block
        vertical-align: top
        font-size: 10px
        margin: 0 4px
      .icon-keyboard_arrow_right
        display: inline-block
        position: absolute
        right: 12px
        top: 10px
        font-size: 10px
    .background
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      filter: blur(10px)
      z-index: -1
    .detail-mask
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 100%
      overflow: auto
      z-index: 100
      transition: all .5s
      background-color: rgba(7, 17, 27, 0.8)
      -webkit-backdrop-filter: blur(10px)
      &.fade-enter-active, &.fade-leave-active
        opacity: 1
      &.fade-enter, &.fade-leave-to
        opacity: 0
    .detail-wrapper
      width: 100%
      min-height: 100%
      .detail-main
        margin-top: 64px
        padding-bottom: 64px
        text-align: center
        .shop-title
          line-height: 16px
        .star-wrapper
          margin-top: 16px
        .discount-title
          display: flex
          margin: 28px auto 24px auto
          width: 80%
          .line
            flex: 1
            position: relative
            top: -6px
            border-bottom: 1px solid rgba(255, 255, 255, 0.2)
          .title
            padding: 0 12px
            font-weight: 700
        .support
          width: 80%
          margin: 0 auto
          .support-item
            margin-bottom: 12px
            font-size: 0
            line-height: 16px
            text-align: left
            &:last-child
              margin-bottom: 0
            .icon
              display: inline-block
              width: 32px
              height: 32px
              vertical-align: top
              background-repeat: no-repeat
              background-size: 32px 32px
              &.decrease
                bg-image('decrease_2')
              &.discount
                bg-image('discount_2')
              &.guarantee
                bg-image('guarantee_2')
              &.invoice
                bg-image('invoice_2')
              &.special
                bg-image('special_2')
            .text
              margin-left: 6px
              font-size: 16px
              font-weight: 200
              color: rgb(255, 255, 255)
              line-height: 32px
        .bulletin
          margin: 0 auto
          width: 80%
          text-align: left
          font-size: 16px
          font-weight: 200
          line-height: 24px
    .detail-close
      position: relative
      width: 32px
      height: 32px
      font-size: 32px
      margin: -64px auto 0 auto
      clear: both
</style>
