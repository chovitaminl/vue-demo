<template>
  <div>
    <div class="dialog-container">
      <div class="dialog-content">
        <div class="panel-default">
          <div class="panel-title"><h3>登录</h3></div>
          <div class="panel-body" role="form">
            <div class="form-item user-email pre-10">
              <input class="input-default pre-6" type="text" placeholder="请输入你的邮箱..." v-model="userNameValue">
              <span>{{userError.errorText}}</span>
            </div>
            <div class="form-item user-pwd pre-10">
              <input class="input-default pre-6" type="password" placeholder="******" minlength="6"
                     v-model="passwordValue"><span>{{passwordError.errorText}}</span>
            </div>
            <div class="form-item flex pre-6">
              <div class="flex-space-between">
                <a href="">忘记密码？</a>
              </div>
              <div class="flex-space-between">
                <label for="remember">记住密码</label>
                <input id="remember" type="checkbox" value="remember">
              </div>
            </div>
            <div class="form-item user-send pre-10">
              <input id="login-btn" type="submit" value="登录" @click="onLogin">
            </div>
          </div><!--panel-body-->
        </div>
      </div><!--panel-default-->
    </div>
  </div>

</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        userNameValue: '',
        passwordValue: '',
        errorText: '',
      }
    },
    computed: {
      userError() {
        let errorText, status;
        if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g.test(this.userNameValue)) {
          errorText = "邮箱格式错误";
          status = false;
        } else {
          errorText = '';
          status = true;
        }
        if(!this.userFlag){
          errorText='';
          this.userFlag = true;
        }
        return {
          errorText,
          status
        }
      },
      passwordError() {
        let errorText, status;
        if (!/^\w{6,15}$/g.test(this.passwordValue)) {
          errorText = "密码太弱";
          status = false;
        } else {
          errorText = '';
          status = true;
        }
        if(!this.passwordFlag){
          errorText = '';
          this.passwordFlag = true;
        }
        return {
          errorText,
          status
        }
      }
    },
    methods: {
      onLogin() {
        if (!this.userError.status || !this.passwordError.status) {
          console.log("login error")
        } else {
          console.log(this.userNameValue, this.passwordValue);
          this.$http.get('/api/login').then((res)=>{
            console.log(res);
            this.$emit('on-login',res.data);
          },(error)=>{
            console.log(error)
          });
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .dialog-container
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    box-sizing: border-box
    .dialog-content
      padding: 20px 40px;
      .panel-default
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        box-sizing: border-box
        .panel-title
          height: 36px
          line-height: 36 ox
          h3
            margin: 20px 0
        .panel-body
          padding: 12px 0
          .pre-10
            width: 100%
          .form-item
            margin-bottom: 8px
            .pre-6
              width: 60%
              padding: .5rem
            .input-default
              border: 1px rgba(134, 171, 134, 0.56) double
          .flex
            display: flex
            justify-content: center
            align-items: space-between
            .flex-space-between
              flex-basis: 50%
              font-size: .8rem
          .user-send
            input#login-btn
              color: #fff
              background: #000
              border: 1px solid #fff
              -webkit-border-radius: 2px
              -moz-border-radius: 2px
              border-radius: 2px
              padding: 5px 20px
              width: 60%
            input#login-btn:hover
              opacity: .6


</style>
