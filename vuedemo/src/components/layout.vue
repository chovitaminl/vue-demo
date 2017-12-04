<template>
  <div>
    <div class="app-header">
      <nav class="navbar text-white" role="navigation">
        <router-link :to="{path:'/'}">
          <span class="narbar-brand">ChoVitaminL</span>
        </router-link>
        <div class="narbar-nav">
          <div class="narbar-item">1</div>
          <div class="narbar-item">2</div>
          <div class="narbar-item">3</div>
          <div class="narbar-item">
            <span class="" v-if="userName !== ''">{{userName}}</span>
            <span class="" @click="logClick()" v-if="userName === ''">登录</span>
            <i>|</i>
            <span class="" @click="regClick()" v-if="userName === ''">注册</span>
            <span class="" @click="logout()" v-if="userName !== ''">退出</span>
            <i>|</i>
            <span class="" @click="aboutClick()">关于</span>
          </div>
        </div>
      </nav>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
      <div class="container">
        <div class="footer-container ">
          <div class="footer-content text-white text-center">
            由CHOVitaminL@liejiayong 技术提供 | 版权所有@809206619@qq.com
          </div>
        </div>
      </div>
    </div>
    <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <article>
        <h2>#有关github主的一些事一些情</h2>
        <p>
          #好记性不如烂笔头 ##对于好的事物，我宁愿将时间停下来，我希望能有好的心情、好的灵感、立即的执行力去探索这个世界 ##如果可以将每一时刻的灵感写下来并重复对比，多年之后你会有不一样的自己
        </p>
        <p>
          #一些初衷 ##从学生一族到上班一族这段时间里，发生了很多事情。 ##关于发生在工作上的时候，时常觉得有些力不从心， ##有些笔记记下来了，很长时间了，从未翻阅 ##对于工作上内容，很长时间里，从菜鸟code到有些精髓code，好像也从来没留心将code充分利用起来 ##其实回想起来，自己浪费了许多劳动力，如果每一次将每次的code对比起来，取其精华去其糟粕，然后融合为模块、组件、甚至是插件，不进对现在，而且对以后的生活也有无限的好
        </p>
        <h3>#一些触发</h3>
      </article>
    </my-dialog>
    <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      reg dilog
    </my-dialog>
    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <login-dialog @on-login="onSuccessLogin"></login-dialog>
    </my-dialog>
  </div>
</template>
<script type="text/ecmascript-6">
  import dialog from './dialog.vue';
  import loginDialog from './loginDialog.vue';

  export default {
    components: {
      myDialog: dialog,
      loginDialog,
    },
    data() {
      return {
        isShowAboutDialog: false,
        isShowRegDialog: false,
        isShowLogDialog: false,
        userName: '',
      }
    },
    methods: {
      aboutClick() {
        this.isShowAboutDialog = true;
      },
      regClick() {
        this.isShowRegDialog = true;
      },
      logClick() {
        this.isShowLogDialog = true;
      },
      closeDialog(attr) {
        this[attr] = false;
      },
      onSuccessLogin(data) {
        this.userName = data.username;
        this.closeDialog('isShowLogDialog');
      },
      logout() {
        this.userName = '';
      }
    }
  }
</script>
<style>
  *, html {
    margin: 0;
    padding: 0
  }

  .text-white {
    color: white;
  }

  .text-center {
    text-align: center;
  }

  .navbar {
    display: flex;
    width: 100%;
    height: 90px;
    line-height: 90px;
    background: #010001;
    padding: 0 30px;
    box-sizing: border-box;
  }

  .narbar-brand {
    flex-basis: 200px;
    text-align: center;
  }

  .narbar-nav {
    display: inherit;
    flex-grow: 1;
  }

  .narbar-item {
    flex-grow: 1;
    text-align: right;
    cursor: pointer;
  }

  .app-content {
    z-index: 2;
  }

  .footer-container {
    width: 100%;
    height: 200px;
    line-height: 90px;
    background: #010001;
    padding: 0 30px;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 0;
  }
  a{
    text-decoration: none;
  }
</style>
