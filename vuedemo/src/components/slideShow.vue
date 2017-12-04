<template>
  <div>
    <div class="carousel-container" @mouseover="clearInv" @mouseout="runInv">
      <div class="carousel-banner-content">
        <a :href="slides[nowIndex].href">
          <transition name="slide-trans">
            <img v-if="isShow" :src="slides[nowIndex].src" :alt="slides[nowIndex].title"><!--img-->
          </transition><!--slide-trans-->
          <transition name="slide-trans-old">
            <img v-if="!isShow" :src="slides[nowIndex].src" :alt="slides[nowIndex].title"><!--img-->
          </transition><!--slide-trans-old-->
        </a><!--a-->
      </div><!--carousel-banner-content-->
      <h3 v-text="slides[nowIndex].title">技术论坛</h3><!--carousel tite-->
      <ul class="slide-page">
        <li @click="goto(preIndex)">&lt;</li>
        <li v-for="(item,index) in slides" @click="goto(index)"><a v-text="index+1"
                                                                   :class="{on:index === nowIndex}">1</a>
        </li>
        <li @click="goto(nextIndex)">&gt;</li>
      </ul>
    </div><!--carousel-container-->
  </div><!--root-->
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      slides: {
        type: Array,
        default: [],
      },
      inv: {
        type: Number,
        default: 1000,
      }
    },
    data() {
      return {
        nowIndex: 0,
        isShow: true
      }
    },
    methods: {
      goto(index) {
        this.isShow = false;
        this.nowIndex = index;
        this.$emit('onchange',index);
        setInterval(()=>{
          this.isShow = true;
        },10);
      },
      runInv() {
        this.invId = setInterval(() => {
          this.goto(this.nextIndex);
        }, this.inv);
      },
      clearInv() {
        clearInterval(this.invId);
      }
    },
    computed: {
      preIndex() {
        if (this.nowIndex === 0) {
          return this.slides.length - 1;
        } else {
          return this.nowIndex - 1;
        }
      },
      nextIndex() {
        if (this.nowIndex === this.slides.length - 1) {
          return 0;
        } else {
          return this.nowIndex + 1;
        }
      }
    },
    mounted() {
      this.runInv();
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .carousel-container
    position: relative;
    width: 100%;
    overflow: hidden;
    box-sizing :box-sizing ;
    .carousel-banner-content
      box-sizing: border-box;
      a
        img
          width: 100%;
    h3
      position: absolute;
      bottom: 4px;
      width: 100%;
      background: rgba(0, 0, 0, 0.49);
      color: #fff;
      text-indent: 1rem;
      padding: 5px 0;
    ul.slide-page
      position: absolute;
      bottom 12px;
      right: 8px;
      list-style: none !important;
      color: #fff;
      li
        display: inline-block;
        padding-right: 10px;
        cursor: pointer
      li:hover
        text-decoration: underline;
        a
          color: #fff;
          text-decoration: none;
          cursor: pointer;
        a:hover
          text-decoration: underline;
        a:checked
          text-decoration: underline;

  .on
    text-decoration: underline;

  .slide-trans-enter-active {
    transition: all .5s ease;
  }

  .slide-trans-enter {
    transform: translateX(300px);
  }

  .slide-trans-old-leave-active {
    transiton: all .5s ease;
    transform: translateX(-900px);
  }
</style>
