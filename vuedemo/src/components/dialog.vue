<template>
  <div>
    <div class="dialog-container"  role="dialog" >
      <div class="dialog-mask" v-if="isShow" @click="closeMySelf"></div>
        <transition name="drop">
          <div class="dialog-content" v-if="isShow">
            <div class="dialog-narbar">
              <a class="dialog-close" @click="closeMySelf">X</a>
            </div>
            <slot>dialog template</slot>
          </div>
        </transition>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeMySelf() {
        this.$emit('on-close');
      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .dialog-container
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index 5;
    .dialog-mask
      background-color: rgba(0, 0, 0, 0.27);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 8;
    .dialog-content
      background-color: #fff;
      z-index: 10;
      width: 50%;
      border: 1px solid #ccc;
      box-shadow: 0 0 5px #70cc9c;
      box-sizing: border-box;
      position: fixed;
      top: 30%;
      left: 50%;
      margin-left: -25%;
      padding: 2px 10px;
      z-index: 10;
      .dialog-narbar
        display: flex;
        justify-content flex-end;
        align-items: center;
        height: 36px;
        line-height: 36px;
        border-bottom: 1px solid #f9f9f9;
        .dialog-close
          display: inline-flex;
          text-align: right;
          cursor: pointer;
          z-index: 12;

  .drop-enter-active {
    transition: all .5s ease;
  }
  .drop-leave-active {
    transition: all .3s ease;
  }
  .drop-enter {
    transform: translateY(-500px);
  }
  .drop-leave-active {
    transform: translateY(-500px);
  }
</style>
